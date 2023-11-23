import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const HomeRoot = () => {
    return (
        <div>
           <div>
            <Navbar></Navbar>
           </div>
           <div>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default HomeRoot;