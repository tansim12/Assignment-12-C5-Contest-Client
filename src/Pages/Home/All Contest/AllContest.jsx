import { Container } from "@mui/material";
import Heading from "../../../shared/Heading";

import ContestTab from "./ContestTab";
import { Helmet } from "react-helmet-async";


const AllContest = () => {
    return (
        <div>
            <Helmet><title>ALL Contest</title></Helmet>
            {/* heading section  */}
            <div>
            <Heading title={"--COMPETITION--"} subtitle={"Join our exciting contest and showcase your talent to win amazing prizes!"}></Heading>
            </div>

            {/* card section  */}
            <div>
                <Container maxWidth={"xl"}>

                <ContestTab></ContestTab>
                </Container>
            </div>

        </div>
    );
};

export default AllContest;