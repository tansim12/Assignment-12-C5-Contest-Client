import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import useAuthContext from "../../Hooks/useAuthContext";
import useAxiosHook from "../../Hooks/useAxiosHook";
import { globalInstance } from "../../Hooks/useGlobalInstance";

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
console.log(user?.photoURL);
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
            image:user?.photoURL,
            participantName: user?.displayName,
            transactionId: result?.paymentIntent?.id,
            contestId: oneContestData?._id,
            price: oneContestData?.price.toFixed(2),
            creatorEmail: oneContestData?.creatorInfo?.email,
            registerTime: new Date(), 
          };
          const res = await instance.post("/userPaymentDetails", info);
          const fetchData = await res.data;
          if (fetchData?.success) {
            let newTotalJoin = oneContestData?.total_join + 1;
            console.log(newTotalJoin);
            globalInstance
              .patch(`/contest/${oneContestData?._id}`, {
                total_join: newTotalJoin,
              })
              .then((response) => {
             
                if (response.data) {
                  setPaymentId(result?.paymentIntent?.id);
                  toast.success("Payment Successfully done");
                }
              });
          }
        }
      })
      .catch((err) => {
        setPaymentIdError(err.message);
        toast.error(err.message);
      });
  };
 
  const {
    contest_name,
 
    image,
    description,
   
    creatorInfo,
  } = oneContestData;
  
    return (
      <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 20 }}>
      <img src={image} alt={contest_name} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
      <CardContent>
        {/* Contest Details */}
        <Typography variant="h5" gutterBottom>{contest_name}</Typography>
        <Typography variant="subtitle1" gutterBottom>{description}</Typography>
        {/* ... (display other contest details) */}

        {/* Creator Info */}
        <Grid container alignItems="center" spacing={2} marginTop={2}>
          <Grid item>
            <img src={creatorInfo.image} alt={creatorInfo.name} style={{ width: 50, height: 50, borderRadius: '50%', objectFit: 'cover' }} />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{creatorInfo.name}</Typography>
            <Typography variant="body2">{creatorInfo.email}</Typography>
          </Grid>
        </Grid>

        {/* Payment Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px', marginTop: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Payment Details
            </Typography>
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
          <Button
            type="submit"
            disabled={!stripe}
            variant="contained"
            sx={{
              backgroundColor: '#3f51b5',
              color: 'white',
              '&:hover': {
                backgroundColor: '#303f9f',
              },
              width: '100%',
            }}
          >
            Pay
          </Button>
          {paymentError && <p style={{ color: "red", marginTop: '10px' }}>{paymentError}</p>}
          {/* Responsive styles for Payment Id section */}
          <div style={{ marginTop: '20px' }}>
            {paymentSuccess && paymentId ? (
              <Typography variant="body1" sx={{ color: "green" }}>
                Payment Id: {paymentId}
              </Typography>
            ) : (
              <Typography variant="body1" sx={{ color: "red" }}>
                {paymentIdError}
              </Typography>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
    );
  
};

export default CheckOutFrom;
