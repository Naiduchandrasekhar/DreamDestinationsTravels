import React from "react";

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
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Our Cars</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-semibold">Contact</h6>
            <p>Email: info@dreamdestination.com</p>
            <p>Phone: +1 234 567 890</p>
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
