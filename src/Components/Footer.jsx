import React from "react";
import whatsUpIcon from "../Images/whatsUpIcon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bgLinearGradient text-white  py-4 mt-5">
      <div className="container">
        <div className="row">

          {/* Brand and tagline */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Dream Destination</h5>
            <p>Your trusted partner for premium travel cars and unforgettable journeys.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-semibold">Quick Links</h6>
            <ul className="list-unstyled">
              <Link to="/" className="text-decoration-none"><div  className="text-white">Home</div></Link>
              <Link to="/OurCars" className="text-decoration-none"><div className="text-white">Our Cars</div></Link>
              <Link to="/Contact" className="text-decoration-none"><div className="text-white">Contact Us</div></Link>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-semibold">Contact</h6>
            <div>Email: info@dreamdestination.com</div>
            <div>
            <div className='d-flex p-1'>
              <a
                href="https://wa.me/918790535149"
                target="_blank"
                rel="noopener noreferrer"
                className='text-decoration-none'
              >
                <button className='baseFareContactBtn w-100 fontSize13 d-flex align-items-center text-decoration-none'> <div><img className='whatsUpIcon' src={whatsUpIcon} alt='whatsUpIcon' /></div> <div className='mx-2'>Book Now</div></button>
              </a>
            </div>
            </div>
            <p>Location: 123 Dream St, Travel City, TX</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="text-center mt-4 border-top pt-3" style={{ fontSize: "0.9rem", color: "#ccc" }}>
          &copy; {new Date().getFullYear()} Dream Destination. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
