import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import useAuthContext from "../../Hooks/useAuthContext";
import useAxiosHook from "../../Hooks/useAxiosHook";

const CheckOutFrom = ({ oneContestData }) => {
  const instance = useAxiosHook();

  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [clintSecret, setClintSecret] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [paymentIdError, setPaymentIdError] = useState("");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  //   get clint secret by getting backend
  useEffect(() => {
    if (oneContestData?.price) {
      instance
        .post("/create-payment-intent", {
          price: oneContestData?.price.toFixed(2),
        })
        .then((res) => {
          // console.log(res?.data?.clientSecret);
          setClintSecret(res?.data?.clientSecret);
        })
        .catch((err) => toast.error(err.message));
    }
  }, [instance, oneContestData?.price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement == null) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        setPaymentError(error.message);
        setPaymentSuccess(null);
        toast.error(error.message);
      } else {
        setPaymentSuccess(paymentMethod);
        setPaymentError(null);
      }
    } catch (error) {
      console.error("Error:", error);
      setPaymentError("Payment failed. Please try again.");
      setPaymentSuccess(null);
    }

    // confirm payment  section
    await stripe
      .confirmCardPayment(clintSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      })
      .then(async (result) => {
        if (result?.paymentIntent?.status === "succeeded") {
          // userPaymentDetails save by db
          const info = {
            email: user?.email,
            participantName: user?.displayName,
            transactionId: result?.paymentIntent?.id,
            contestId: oneContestData?._id,
            price: oneContestData?.price.toFixed(2),
            creatorEmail: oneContestData?.creatorInfo?.email,
            registerTime: new Date(), // todo : utc formate in moment js
          };
          const res = await instance.post("/userPaymentDetails", info);
          const fetchData = await res.data;
          console.log(fetchData);
          setPaymentId(result?.paymentIntent?.id);
            toast.success("Payment Successfully done");
        }
      })
      .catch((err) => {
        setPaymentIdError(err.message);
        toast.error(err.message);
      });
  };
  console.log(paymentId);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>
      <Button type="submit" disabled={!stripe}>
        Pay
      </Button>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {/* {paymentSuccess && <p style={{ color: "green" }}>Payment successful!</p>} */}

      {/* payment id section  */}
      <div className="mt-4">
        {paymentSuccess && paymentId ? (
          <p style={{ color: "green" }}>Payment Id : {paymentId}</p>
        ) : (
          <p style={{ color: "red" }}>{paymentIdError}</p>
        )}
      </div>
    </form>
  );
};

export default CheckOutFrom;
