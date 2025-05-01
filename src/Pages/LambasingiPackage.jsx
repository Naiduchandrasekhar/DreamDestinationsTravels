import React, { useEffect } from 'react';

const carPackages = [
  {
    name: "Innova Crysta",
    price: "Start from ₹ 8,000",
    description: "Accommodates 7 passengers. Ideal for Lambasingi or Vanjangi tours. Minimum 12 hours & 260 km.",
    location: "Visakhapatnam",
    pax: "7 Pax",
    type: "SUV",
    offer: null,
  },
  {
    name: "Ertiga",
    price: "Start from ₹ 7,000",
    description: "Accommodates 6 passengers. Great for Lambasingi or Vanjangi trips. Minimum 12 hours & 260 km.",
    location: "Visakhapatnam",
    pax: "6 Pax",
    type: "SUV",
    offer: "Sale 20%",
  },
  {
    name: "Honda Amaze",
    price: "Start from ₹ 5,000",
    description: "Accommodates 4 passengers. Comfortable ride for Lambasingi or Vanjangi tours. Minimum 12 hours & 260 km.",
    location: "Visakhapatnam",
    pax: "4 Pax",
    type: "Sedan",
    offer: "Sale 20%",
  },
  {
    name: "Swift Dzire",
    price: "Start from ₹ 5,000",
    description: "Accommodates 4 passengers. Perfect for a cozy Lambasingi or Vanjangi ride. Minimum 12 hours & 260 km.",
    location: "Visakhapatnam",
    pax: "4 Pax",
    type: "Sedan",
    offer: "Sale 20%",
  },
];

const LambasingiPackage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container py-5">
      <h1 className="pt-5 mb-4">Lambasingi Tour Packages</h1>
      <p className="text-muted mb-4">
        Explore the misty hills of Lambasingi, often called the "Kashmir of Andhra Pradesh". Enjoy cool weather, scenic beauty, and peaceful nature.
        Our tour packages provide reliable transportation and experienced local drivers.
      </p>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Lambasingi_morning_fog.jpg"
        alt="Lambasingi"
        className="img-fluid rounded mb-4"
        style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
      />

      <h2 className="mb-4">Available Vehicles</h2>

      <div className="row">
        {carPackages.map((car, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-0">{car.name}</h5>
                  {car.offer && (
                    <span className="badge bg-danger">{car.offer}</span>
                  )}
                </div>
                <p className="card-text">{car.description}</p>
                <p className="card-text"><strong>Location:</strong> {car.location}</p>
                <p className="card-text"><strong>Capacity:</strong> {car.pax} | <strong>Type:</strong> {car.type}</p>
                <p className="card-text text-success fw-bold">{car.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LambasingiPackage;
