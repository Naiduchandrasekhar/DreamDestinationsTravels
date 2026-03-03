import React from "react";
import whatsUpIcon from "../Images/whatsUpIcon.png";
import { Link } from "react-router-dom";
import { useTranslation } from '../hooks/useTranslation';
import { navLinks } from '../utils/navigation';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bgLinearGradient text-white  py-4 mt-5">
      <div className="container">
        <div className="row">

          {/* Brand and tagline */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">{t('header.pageTitle')}</h5>
            <p>Your trusted partner for premium travel cars and unforgettable journeys.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-semibold">Quick Links</h6>
            <ul className="list-unstyled">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-decoration-none">
                  <div className="text-white">{t(link.key)}</div>
                </Link>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-semibold mb-2">Contact</h6>
            <div>Phone Number : <a href="tel:+918790535149" className="text-success mb-2">+91 8790535149</a></div>
            <div className="mb-2">
              Email: <a className="text-success" href="mailto:dreamdestinationsonline@gmail.com">dreamdestinationsonline@gmail.com</a>
            </div>
            <div>
              <div className='d-flex mb-2'>
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
            <p>14-170-1/9, near Saradapeetam, Chinnamushidiwada, Pendurthi, Visakhapatnam, Andhra Pradesh 531173</p>
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
