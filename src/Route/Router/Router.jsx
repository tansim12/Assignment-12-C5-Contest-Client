import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../HomeRoute/HomeRoot";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeRoot></HomeRoot>,
    },
  ]);
  export default router