import { useParams } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useFindOneContest from "../../Hooks/useFindOneContest";
import CheckOutFrom from "./CheckOutFrom";

const Payment = () => {
  const { id } = useParams();
  const { oneContestData } = useFindOneContest(id);

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
  return (
    <Elements stripe={stripePromise}>
      {" "}
      <CheckOutFrom oneContestData={oneContestData} />{" "}
    </Elements>
  );
};

export default Payment;
