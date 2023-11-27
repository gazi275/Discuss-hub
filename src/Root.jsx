import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/footer";


const Root = () => {
    return (
        <div className="bg-white">
            <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;