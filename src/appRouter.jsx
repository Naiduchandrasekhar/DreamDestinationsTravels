import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import OurCars from "./Pages/OurCars"
import { useEffect, useState } from "react"

const AppLayout = () => {

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "dreamdestinationstravels.netlify.app/Contact",
                element: <Contact />
            },
            {
                path: "dreamdestinationstravels.netlify.app/OurCars",
                element: <OurCars />
            }
        ]
    }
])

export default appRouter