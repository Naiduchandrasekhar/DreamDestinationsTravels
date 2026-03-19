import React, { useEffect } from 'react';

import innovaCrystaCarwaleImage from '../Images/innovaCrystaCarwaleImage.webp';
import ertigaCarWaleImage from '../Images/ertigaCarWaleImage.webp';
import amazeRedCar from '../Images/amazeRedCar.jpg';
import carwalDzireImage from '../Images/carwaleDzireImage.jpg';
import urbaniaVanImage from "../Images/urbaniaVanImage.jpg";
import whatsUpIcon from "../Images/whatsUpIcon.png";

const carPackages = [
  {
    name: "Honda Amaze",
    price: "₹ 5,000",
    description: "Accommodates 4 passengers. Comfortable ride for Lambasingi or Vanajagi tours. Minimum 12 hours & 260 km.",
    pax: "4 Max",
    type: "Sedan",
    image: amazeRedCar,
  },
  {
    name: "Swift Dzire",
    price: "₹ 5,000",
    description: "Accommodates 4 passengers. Perfect for a cozy Lambasingi or Vanajagi ride. Minimum 12 hours & 260 km.",
    pax: "4 Max",
    type: "Sedan",
    image: carwalDzireImage,
  },
  {
    name: "Ertiga",
    price: "₹ 6,500",
    description: "Accommodates 6 passengers. Great for Lambasingi or Vanajagi trips. Minimum 12 hours & 260 km.",
    pax: "6 Max",
    type: "SUV",
    image: ertigaCarWaleImage,
  },
  {
    name: "Innova Crysta",
    price: "₹ 8,000",
    description: "Accommodates 7 passengers. Ideal for Lambasingi or Vanajagi tours. Minimum 12 hours & 260 km.",
    pax: "7 Max",
    type: "SUV",
    image: innovaCrystaCarwaleImage,
  },
  {
    name: "17 Seater",
    price: "₹ 10,000",
    description: "Accommodates 7 passengers. Ideal for Lambasingi or Vanajagi tours. Minimum 12 hours & 260 km.",
    pax: "17 Max",
    type: "Van",
    image: urbaniaVanImage,
  },
];

const ArakuPackage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Araku Tour Packages</h1>
          <p className="section-subtitle">
            Discover the serene beauty of Araku Valley with our curated tour packages. Explore misty hills, coffee plantations, and tribal culture in comfort.
          </p>
        </div>

        <div className="glass p-5 mb-5">
          <p className="text-muted">
            Choose from a range of premium vehicles designed for comfort and style. All packages include a professional driver and optional pickup/drop services.
          </p>
        </div>
      {/* <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Lambasingi_morning_fog.jpg"
        alt="Lambasingi"
        className="img-fluid rounded mb-4"
        style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
      /> */}


      <h2 className="mb-4">Available Vehicles</h2>

      <div className="table-responsive tableContainer glass p-4">
        <table className="table table-borderless align-middle text-center text-white">
          <thead>
            <tr className="text-muted">
              <th>Image</th>
              <th>Car Model</th>
              <th>Type</th>
              <th>Seats</th>
              <th>Starts from Price</th>
            </tr>
          </thead>
          <tbody>
            {carPackages.map((car, index) => (
              <tr key={index} className="border-bottom border-white-10">
                <td>
                  <img
                    src={car.image}
                    alt={car.name}
                    style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '10px' }}
                  />
                </td>
                <td><strong>{car.name}</strong></td>
                <td>{car.type}</td>
                <td>{car.pax}</td>
                <td className="text-accent fw-bold">{car.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <a
          href="https://wa.me/918790535149"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className='w-100 btn btn-brand d-flex align-items-center justify-content-center gap-2'>
            <img className='whatsUpIcon' src={whatsUpIcon} alt='WhatsApp' /> Contact Us
          </button>
        </a>
      </div>
    </div>
    </section>
  );
};

export default ArakuPackage;

