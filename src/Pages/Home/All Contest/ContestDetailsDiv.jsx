import { Link, useLoaderData, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import useFindOneContest from "../../../Hooks/useFindOneContest";

// todo : single ditails page render , dynamic counter 
const ContestDetailsDiv = () => {
  const {id} = useParams()
  
  const fetchData = useLoaderData();
  const {oneContestData} = useFindOneContest(id)
  
  return (
    <div>
      <Link to={`/payment/${id}`}>
        <Button>Register</Button>
      </Link>
    </div>
  );
};

export default ContestDetailsDiv;
