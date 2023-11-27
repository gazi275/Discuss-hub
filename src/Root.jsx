import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/footer";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";


const Root = () => {
    useEffect(() => {
        initFlowbite();
    })

    return (
        <div className="bg-white">
            <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;