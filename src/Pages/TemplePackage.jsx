import React, { useEffect } from 'react';

const carPackages = [
  {
    name: "Innova Crysta",
    price: "Start from ₹ 8,000",
    description: "Spacious 7-seater ideal for family temple tours around Simhachalam, ISKCON, and other Vizag temples.",
    location: "Visakhapatnam",
    pax: "7 Max",
    type: "SUV",
    offer: null,
  },
  {
    name: "Ertiga",
    price: "Start from ₹ 7,000",
    description: "Comfortable for small groups visiting temples like Sri Kanaka Mahalakshmi and Simhachalam.",
    location: "Visakhapatnam",
    pax: "6 Max",
    type: "SUV",
    offer: "Sale 15%",
  },
  {
    name: "Honda Amaze",
    price: "Start from ₹ 5,000",
    description: "Ideal for couples or small families visiting multiple temples in one day. Compact and efficient.",
    location: "Visakhapatnam",
    pax: "4 Max",
    type: "Sedan",
    offer: "Sale 10%",
  },
  {
    name: "Swift Dzire",
    price: "Start from ₹ 5,000",
    description: "Perfect for peaceful and budget-friendly temple visits within and around Vizag.",
    location: "Visakhapatnam",
    pax: "4 Max",
    type: "Sedan",
    offer: "Sale 10%",
  },
];

const TemplePackage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container py-5">
      <h1 className="pt-5 mb-4">Vizag Temple Tour Packages</h1>
      <p className="text-muted mb-4">
        Experience spiritual serenity by visiting Vizag's famous temples like Simhachalam Temple, ISKCON, Sri Kanaka Mahalakshmi, and many more.
        Our packages are designed for comfort, convenience, and peace of mind with trusted drivers and clean vehicles.
      </p>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Simhachalam_Temple.jpg"
        alt="Simhachalam Temple Vizag"
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

export default TemplePackage;
