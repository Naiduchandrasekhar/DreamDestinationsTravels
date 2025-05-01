import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import OurCars from "./Pages/OurCars"
import { useEffect, useState } from "react"
import ArakuPackage from './Pages/ArakuPackage';
import LambasingiPackage from './Pages/LambasingiPackage';
import VanajangiPackage from './Pages/VanajangiPackage';
import TemplePackage from './Pages/TemplePackage';
import VizagTourPackage from './Pages/VizagTourPackage';
import OdishaPackage from './Pages/OdishaPackage';

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
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/OurCars",
                element: <OurCars />
            },
            {
                path: "/araku-package",
                element: <ArakuPackage />
            },
            {
                path: "/lambasingi-package",
                element: <LambasingiPackage />
            },
            {
                path: "/vanajangi-package",
                element: <VanajangiPackage />
            },
            {
                path: "/temple-package",
                element: <TemplePackage />
            },
            {
                path: "/vizag-tour-package",
                element: <VizagTourPackage />
            },
            {
                path: "/odisha-package",
                element: <OdishaPackage />
            }
        ]
    }
])

export default appRouter