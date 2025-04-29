import React from 'react';
import undrawContactUs from "../Images/undrawContactUs.png"

const Contact = () => {
  return (
    <div className="container pt-5 py-5">
      <div className="mb-5 pt-5">
        <h2 className="display-5 fw-bold text-dark">Contact Dream Destinations Travels</h2>
        <p className="text-muted">
          Welcome to Dream Destinations Travels! We specialize in providing reliable and comfortable car rental services to make your journeys memorable. Whether you're planning a business trip or a leisure getaway, our fleet is ready to serve you.
        </p>
      </div>

      <div className="bg-light p-3 rounded rounded-3 shadow-sm mb-5 d-flex flex-column flex-lg-row justify-content-around align-items-center">
        <div className='order-1 order-lg-0'>
        <div className="mb-3">
          <h5 className="fw-semibold text-secondary">Email</h5>
          <p className="text-dark">info@dreamdestination.com</p>
        </div>
        <div className="mb-3">
          <h5 className="fw-semibold text-secondary">Phone</h5>
          <p className="text-dark">+91 8790535149</p>
        </div>
        <div className="mb-3">
          <h5 className="fw-semibold text-secondary">Address</h5>
          <p className="text-dark">Maddilapalem, Visakhapatnam, Andhra Pradesh, India</p>
        </div>
      </div>
        <div className='order-0 order-lg-1'>
          <img className='undrawContactUs' src={undrawContactUs} alt='undrawContactUs' />
        </div>
      </div>

      <div>
        <h5 className="fw-semibold text-secondary mb-3">Our Location</h5>
        <div className="ratio ratio-16x9 rounded overflow-hidden">
          <iframe
            title="Dream Destinations Travels Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.512039759343!2d83.31726847505586!3d17.738247292430624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943f90563f061%3A0x86b155e0fd4f9186!2sMaddilapalem%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530013!5e0!3m2!1sen!2sin!4v1714401707790!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
