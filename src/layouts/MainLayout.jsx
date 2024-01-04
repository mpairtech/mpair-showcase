import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
// import { useAuth } from "../providers/AuthProvider";

const MainLayout = () => {

    // const { loading } = useAuth();

    // const location = useLocation()
    // console.log(location.pathname)

    // if (loading) {

    //     return (
    //         <div className="d-flex justify-content-center align-items-center bg-light min-vh-100 min-vw-100 ">
    //             <div>
    //                 <img style={{
    //                     width: "100px",
    //                     height: "100px",
    //                     opacity: "0.5"

    //                 }} src="../../public/loader.svg" alt="" />
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div>
            <Navbar />
            <div className="w-5/6 mx-auto min-h-[50vh]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
