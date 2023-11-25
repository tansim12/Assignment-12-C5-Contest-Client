import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../HomeRoute/HomeRoot";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AllContest from "../../Pages/Home/All Contest/AllContest";
import ContestDetailsDiv from "../../Pages/Home/All Contest/ContestDetailsDiv";

import PrivateRoute from "./PrivateRoute";
import Payment from "../../Pages/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot></HomeRoot>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allContest",
        element: <AllContest></AllContest>,
      },
      {
        path: "/contest/:id",
        element: (
          <PrivateRoute>
            <ContestDetailsDiv></ContestDetailsDiv>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login></Login> },
  { path: "/register", element: <Register /> },
]);
export default router;
