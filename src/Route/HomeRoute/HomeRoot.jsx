import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const HomeRoot = () => {
    return (
        <div>
           <div>
            <Navbar></Navbar>
           </div>
           <div style={{marginTop:"100px"}}>
            <Outlet></Outlet>
           </div>
           {/* footer  */}
           <div>
<Footer/>
           </div>
        </div>
    );
};

export default HomeRoot;