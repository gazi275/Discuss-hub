import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";

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
          

          
        </div>
    );
};

export default Root;