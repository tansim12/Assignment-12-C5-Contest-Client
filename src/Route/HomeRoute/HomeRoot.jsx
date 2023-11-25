import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const HomeRoot = () => {
    return (
        <div>
           <div>
            <Navbar></Navbar>
           </div>
           <div style={{marginTop:"100px"}}>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default HomeRoot;