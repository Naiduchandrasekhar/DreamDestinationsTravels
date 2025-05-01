import React, { useEffect } from 'react';

const carPackages = [
  {
    name: "Innova Crysta",
    price: "Start from ₹ 8,500",
    description: "Perfect for full-day Vizag city tours covering beaches, Kailasagiri, temples, and museums. Spacious for families or groups.",
    location: "Visakhapatnam",
    pax: "7 Max",
    type: "SUV",
    offer: null,
  },
  {
    name: "Ertiga",
    price: "Start from ₹ 7,200",
    description: "Ideal for group sightseeing around RK Beach, Rushikonda, and city highlights. Reliable and comfortable.",
    location: "Visakhapatnam",
    pax: "6 Max",
    type: "SUV",
    offer: "Sale 10%",
  },
  {
    name: "Honda Amaze",
    price: "Start from ₹ 5,200",
    description: "Affordable choice for couples or small families exploring Vizag’s scenic and spiritual sites in a day.",
    location: "Visakhapatnam",
    pax: "4 Max",
    type: "Sedan",
    offer: "Sale 10%",
  },
  {
    name: "Swift Dzire",
    price: "Start from ₹ 5,000",
    description: "Great for budget travelers wanting a comfortable full-day city ride around Vizag’s major tourist attractions.",
    location: "Visakhapatnam",
    pax: "4 Max",
    type: "Sedan",
    offer: "Sale 10%",
  },
];

const VizagTourPackage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container py-5">
      <h1 className="pt-5 mb-4">Vizag Full Tour Packages</h1>
      <p className="text-muted mb-4">
        Explore the best of Visakhapatnam in one unforgettable journey. Our Vizag Full Tour Packages cover RK Beach, Kailasagiri,
        Submarine Museum, Simhachalam Temple, Rushikonda Beach, and more — all in comfort with experienced local drivers.
      </p>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/25/RK_Beach_Visakhapatnam.jpg"
        alt="RK Beach Vizag"
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

export default VizagTourPackage;
