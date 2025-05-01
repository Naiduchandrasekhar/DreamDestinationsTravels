import React, { useEffect } from 'react';

import carwalDzireImage from "../Images/carwaleDzireImage.jpg";
import amazeRedCar from "../Images/amazeRedCar.jpg";
import innovaCrystaCarwaleImage from "../Images/innovaCrystaCarwaleImage.webp";
import ertigaCarWaleImage from "../Images/ertigaCarWaleImage.webp";

const carPackages = [
    {
        name: "Innova Crysta",
        price: "Start from ₹ 9,000",
        description: "Spacious and ideal for temple and coastal tours including Bhubaneswar, Konark, and Puri. Great for families.",
        location: "Bhubaneswar / Puri",
        pax: "7 Max",
        type: "SUV",
        offer: null,
        image: innovaCrystaCarwaleImage,
    },
    {
        name: "Ertiga",
        price: "Start from ₹ 7,800",
        description: "Comfortable and budget-friendly option for heritage tours and scenic drives across Odisha’s top sites.",
        location: "Bhubaneswar / Puri",
        pax: "6 Max",
        type: "SUV",
        offer: "Sale 10%",
        image: ertigaCarWaleImage,
    },
    {
        name: "Honda Amaze",
        price: "Start from ₹ 5,500",
        description: "Perfect for couples or small groups exploring Sun Temple, Chilika Lake, and Bhubaneswar temples.",
        location: "Bhubaneswar",
        pax: "4 Max",
        type: "Sedan",
        offer: "Sale 10%",
        image: amazeRedCar,
    },
    {
        name: "Swift Dzire",
        price: "Start from ₹ 5,300",
        description: "Affordable sedan for full-day Odisha sightseeing and city explorations.",
        location: "Bhubaneswar",
        pax: "4 Max",
        type: "Sedan",
        offer: "Sale 10%",
        image: carwalDzireImage,
    },
];
const OdishaTourPackage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="container py-5">
            <h1 className="pt-5 mb-4">Odisha Full Tour Packages</h1>
            <p className="text-muted mb-4">
                Discover the cultural and natural wonders of Odisha with our all-inclusive tour packages. From the iconic Konark Sun Temple and Jagannath Puri to serene Chilika Lake and tribal heritage, travel in comfort with local drivers and well-maintained vehicles.
            </p>

            <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Sun_temple_Konark.jpg"
                alt="Konark Sun Temple"
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
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="card-text"><strong>Location:</strong> {car.location}</p>
                                        <p className="card-text"><strong>Capacity:</strong> {car.pax} | <strong>Type:</strong> {car.type}</p>
                                        <p className="card-text text-success fw-bold">{car.price}</p>
                                    </div>
                                    <div>
                                        <img className='packageCarImage' src={car?.image} alt={car.name} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OdishaTourPackage;
