import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";

import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { Toaster } from "react-hot-toast";


const Root = () => {
    useEffect(() => {
        initFlowbite();
    })

    return (
        <div className="bg-white">
            <Navbar></Navbar>
          <Outlet></Outlet>
          <Toaster></Toaster>

          
        </div>
    );
};

export default Root;