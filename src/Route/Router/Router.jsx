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
import MyCreated from "../../Pages/Dashboard/Creator Dashboard/MyCreated";
import CreatorUpdateContest from "../../Pages/Dashboard/Creator Dashboard/CreatorUpdateContest";
import CreatorPrivateRoute from "./CreatorPrivateRoute";
import AdminPrivateRoute from "./AdminPrivateRoute";
import ManageUsers from "../../Pages/Dashboard/Admn Dashboard/ManageUsers";
import ManageContest from "../../Pages/Dashboard/Admn Dashboard/ManageContest";
import SeeSubmission from "../../Pages/Dashboard/Creator Dashboard/SeeSubmission";
import Leaderboard from "../../Pages/Leaderboard/Leaderboard";
import Progress from "../../Pages/Progress/Progress";
import Success from "../../Pages/SuccessRoute/Success";
// import FindUs from "../../Pages/FindUs/FindUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot></HomeRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/progress",
        element: <Progress />,
      },
      // {
      //   path: "/findUs",
      //   element: <FindUs />,
      // },
      {
        path:"/success",
        element:<Success />
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

      // creator section
      {
        path: "addContest",
        element: (
          <CreatorPrivateRoute>
            <AddContest></AddContest>
          </CreatorPrivateRoute>
        ),
      },
      {
        path: "creatorUpdateContest/:_id",
        element: (
          <CreatorPrivateRoute>
            <CreatorUpdateContest />
          </CreatorPrivateRoute>
        ),
      },
      {
        path: "myCreated",
        element: (
          <CreatorPrivateRoute>
            {" "}
            <MyCreated></MyCreated>
          </CreatorPrivateRoute>
        ),
      },
      {
        path: "seeSubmission/:_id",
        element: (
          <CreatorPrivateRoute>
            {" "}
            <SeeSubmission />
          </CreatorPrivateRoute>
        ),
      },

      // admin section
      {
        path: "manageUsers",
        element: (
          <AdminPrivateRoute>
            <ManageUsers />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "manageContest",
        element: (
          <AdminPrivateRoute>
            <ManageContest />
          </AdminPrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
