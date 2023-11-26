import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../HomeRoute/HomeRoot";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AllContest from "../../Pages/Home/All Contest/AllContest";
import ContestDetailsDiv from "../../Pages/Home/All Contest/ContestDetailsDiv";

import PrivateRoute from "./PrivateRoute";
import Payment from "../../Pages/Payment/Payment";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyContest from "../../Pages/Dashboard/MyContest";
import Profile from "../../Pages/Dashboard/Profile";
import MyWining from "../../Pages/Dashboard/MyWining";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import AddContest from "../../Pages/Dashboard/Creator Dashboard/AddContest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot></HomeRoot>,
    errorElement:<ErrorPage></ErrorPage>,
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // user section
      {
        path: "myContest",
        element: <MyContest></MyContest>,
      },
      {
        path: "myWining",
        element: <MyWining></MyWining>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "addContest",
        element: <AddContest></AddContest>,
      },
    ],
  },
]);
export default router;
