import React from 'react';
import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import WhatsAppWidget from "./Components/WhatsAppWidget";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import OurCars from "./Pages/OurCars";
import ArakuPackage from './Pages/ArakuPackage';
import LambasingiPackage from './Pages/LambasingiPackage';
import VanajangiPackage from './Pages/VanajangiPackage';
import TemplePackage from './Pages/TemplePackage';
import VizagTourPackage from './Pages/VizagTourPackage';
import OdishaPackage from './Pages/OdishaPackage';

const PageTransition = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="page-content"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -18 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

const AppLayout = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <PageTransition />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

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
]);

export default appRouter;
