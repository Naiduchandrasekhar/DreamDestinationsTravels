import React from 'react'
import carwalDzireImage from "../Images/carwaleDzireImage.jpg";
import urbaniaVanImage from "../Images/urbaniaVanImage.jpg";
import grandVitaraCarImage from "../Images/grandVitaraCarImage.webp";
import ertigaCarWaleImage from "../Images/ertigaCarWaleImage.webp";
import swiftVDICarwaleImage from "../Images/swiftVDICarwale.webp";
import innovaCrystaCarwaleImage from "../Images/innovaCrystaCarwaleImage.webp";
import mainFirstBgImage from "../Images/mainFirstBgImage.webp";
import innovaHycrosCarWaleImage from "../Images/innovaHycrosCarWaleImage.webp"
import xuvCarImage from "../Images/xuvCarImage.webp"
import { Link } from 'react-router-dom';


const AllCars = ({ hideViewMoreCarsBtn, hideFilterSection }) => {
    const carData = [
        {
            id: 1,
            brand: "Maruti Suzuki",
            model: "Dzire",
            image: carwalDzireImage,
            price: "₹ 3000",
            seats: "4"
        },

        {
            id: 2,
            brand: "Maruti Suzuki",
            model: "Grand Vitara",
            image: grandVitaraCarImage,
            price: "₹ 3500",
            seats: "6"
        },
        {
            id: 3,
            brand: "Maruti Suzuki",
            model: "Ertiga",
            image: ertigaCarWaleImage,
            price: "₹ 4000",
            seats: "6"
        },
        {
            id: 4,
            brand: "Maruti Suzuki",
            model: "Swift VDI",
            image: swiftVDICarwaleImage,
            price: "₹ 3000",
            seats: "4"
        },
        {
            id: 5,
            brand: "Toyota",
            model: "Crysta",
            image: innovaCrystaCarwaleImage,
            price: "₹ 4500",
            seats: "7"
        },
        {
            id: 6,
            brand: "Toyota",
            model: "Hycross",
            image: innovaHycrosCarWaleImage,
            price: "₹ 4500",
            seats: "4"
        },
        {
            id: 7,
            brand: "Force Motors",
            model: "Urbania",
            image: urbaniaVanImage,
            price: "₹ 7000",
            seats: "17"
        },
        {
            id: 8,
            brand: "Mahindra",
            model: "XUV 700",
            image: xuvCarImage,
            price: "₹ 4500",
            seats: "6"
        }
    ];

    const handleCheckboxChange = () => {

    }

    return (
        <div>
            <div className='container'>
                <div className='d-flex justify-content-center align-items-center py-3'>
                    <div className='d-flex align-items-start'>
                        <div className={`${hideFilterSection ? "col-lg-12" : "col-lg-9"} d-flex justify-content-center justify-content-lg-between flex-wrap`}>
                            {
                                carData?.map((carDetails) => {
                                    return (
                                        <div key={carDetails?.id} className='m-1 text-center fontSize13 fontWeight600 card p-1'>
                                            <img className='carImage' src={carDetails?.image} alt={carDetails?.brand} />
                                            <div>{carDetails?.brand} {carDetails?.model}</div>
                                            <div>Price: {carDetails?.price} per/day</div>
                                            <div>Passengers: {carDetails?.seats}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {hideFilterSection ? "" : <div className="d-none d-lg-block col-lg-3 d-flex flex-column justify-content-center filterCarSectionContainer">
                            <h5 className="">Filter Cars</h5>

                            <div className="mb-2">
                                <strong>Brand</strong>
                                <div className='d-flex justify-content-between flex-wrap fontSize14'>
                                    {["Maruti Suzuki", "Toyota", "Force Motors", "Mahindra"].map((brand, i) => (
                                        <div className="form-check m-1" key={i}>
                                            <input
                                                id={brand}
                                                className="form-check-input cursorPointer"
                                                type="checkbox"
                                                name="brand"
                                                value={brand}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor={brand} className="form-check-label cursorPointer">{brand}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-2">
                                <strong>Model</strong>
                                <div className='d-flex justify-content-between flex-wrap fontSize14'>
                                    {["Dzire", "Grand Vitara", "Ertiga", "Swift VDI", "Crysta", "Hycross", "Urbania", "XUV 700"].map((model, i) => (
                                        <div className="form-check m-1 cursorPointer" key={i}>
                                            <input
                                                id={model}
                                                className="form-check-input cursorPointer"
                                                type="checkbox"
                                                name="model"
                                                value={model}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor={model} className="form-check-label cursorPointer">{model}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-2">
                                <strong>Seats</strong>
                                <div className='d-flex justify-content-between flex-wrap fontSize14'>
                                    {["4", "6", "7", "17"].map((seat, i) => (
                                        <div className="form-check m-1" key={i}>
                                            <input
                                                id={seat}
                                                className="form-check-input cursorPointer"
                                                type="checkbox"
                                                name="seats"
                                                value={seat}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor={seat} className="form-check-label cursorPointer">{seat} Seats</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="">
                                <strong>Price</strong>
                                <div className='d-flex justify-content-between flex-wrap fontSize14'>
                                    {["3000", "3500", "4000", "4500", "7000"].map((price, i) => (
                                        <div className="form-check m-1" key={i}>
                                            <input
                                                id={price}
                                                className="form-check-input cursorPointer"
                                                type="checkbox"
                                                name="price"
                                                value={price}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor={price} className="form-check-label cursorPointer">₹ {price}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className='btn btn-secondary w-100'>Clear All</button>
                        </div>}
                    </div>
                </div>
                {hideViewMoreCarsBtn ? "" : <div className='d-flex justify-content-center'>
                    <Link to="/OurCars" className="navbarPageNames">
                        <button className='descriptionButtons bgLinearGradient '>
                            View More Cars
                        </button>
                    </Link>
                </div>}
            </div>
        </div>
    )
}

export default AllCars
