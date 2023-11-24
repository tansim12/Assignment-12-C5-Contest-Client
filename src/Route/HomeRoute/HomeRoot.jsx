import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const HomeRoot = () => {
    return (
        <div>
           <div>
            <Navbar></Navbar>
           </div>
           <div style={{marginTop:"80px"}}>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default HomeRoot;