import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BookingPage from "@/pages/BookingPage";
import HomePage from "@/pages/HomePage";
import MainLayout from "@/layouts/MainLayout";
import ContactPage from "@/pages/ContactPage";
import ProcessPage from "@/pages/process/ProcessPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <MainLayout />
        ),
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
         
            {
                path: "/process",
                element: <ProcessPage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },

        ],
    },

    // {
    //     path: "/booking",
    //     element: <BookingPage />,
    // },


]);

export default router;
