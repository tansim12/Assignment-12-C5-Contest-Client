import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../HomeRoute/HomeRoot";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeRoot></HomeRoot>,
      children:[
        {
          index:true, 
          element:<Home></Home>
        }
      ]
    },
    {path:"/login"  , element:<Login></Login>},
    {path:"/register"  , element:<Register />}
  ]);
  export default router