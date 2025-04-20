import React, { useState } from "react";
import DreamDestinationLogo from "../Images/DreamDestinationLogo.png";
import { Link } from "react-router-dom";
import dayMode from "../Images/dayMode.png"

const Navbar = () => {
  const [mode, setMode] = useState(false)
  return (
    <div className="position-fixed top-0 w-100 z-2">
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div className="container-fluid bgLinearGradient text-white">
          <div className="p-2" onClick={() => window.location.href = '/'}>
            <img
              className="DreamDestinationLogo"
              src={DreamDestinationLogo}
              alt="dreamLogo"
            />
          </div>

          {/* Toggle Button for Offcanvas */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>

          {/* Offcanvas Menu */}
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <div className="p-2" onClick={() => window.location.href = '/'}>
                <img
                  className="DreamDestinationLogo"
                  src={DreamDestinationLogo}
                  alt="dreamLogo"
                />
              </div>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="d-block d-lg-none">
              <hr className="hrLine"/>
            </div>
            <div className="offcanvas-body offcanvas-body-container">
              <div className="navbar-nav justify-content-end align-items-start flex-grow-1 pe-3 fontSanserif">
                <div className="m-2">
                  <Link to="/" className="navbarPageNames">Home</Link>
                </div>
                <div className="m-2">
                  <Link to="/OurCars" className="navbarPageNames">Our Cars</Link>
                </div>
                <div className="m-2">
                  <Link to="/Contact" className="navbarPageNames">Contact Us</Link>
                </div>
                {/* <div className="m-2">
                  <img src={dayMode} alt="sunIcon" className="modesIcon" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
