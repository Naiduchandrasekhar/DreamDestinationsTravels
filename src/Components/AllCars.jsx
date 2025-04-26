import React, { useEffect, useState } from 'react'
import carFilterIcon from "../Images/carFilterIcon.png";
import seatsIcon from "../Images/seatsIcon.png";
import luggageIcon from "../Images/luggageIcon.png";
import carwalDzireImage from "../Images/carwaleDzireImage.jpg";
import urbaniaVanImage from "../Images/urbaniaVanImage.jpg";
import amazeRedCar from "../Images/amazeRedCar.jpg";
import fortunerCar from "../Images/fortunerCar.jpg";
import volovoBus from "../Images/volovoBus.jpg";
import memberIcon from "../Images/memberIcon.png"
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
            price: "2500",
            seats: "4",
            luggage: "2",
        },

        {
            id: 2,
            brand: "Honda",
            model: "Amaze",
            image: amazeRedCar,
            price: "2500",
            seats: "4",
            luggage: "2"
        },
        {
            id: 3,
            brand: "Maruti Suzuki",
            model: "Ertiga",
            image: ertigaCarWaleImage,
            price: "4000",
            seats: "6",
            luggage: "3"
        },
        {
            id: 4,
            brand: "Toyota",
            model: "Crysta",
            image: innovaCrystaCarwaleImage,
            price: "4500",
            seats: "7",
            luggage: "3"
        },
        {
            id: 5,
            brand: "Toyota",
            model: "Hycross",
            image: innovaHycrosCarWaleImage,
            price: "4500",
            seats: "7",
            luggage: "3"
        },
        {
            id: 6,
            brand: "Toyota",
            model: "Fortuner",
            image: fortunerCar,
            price: "10000",
            seats: "7",
            luggage: "3"
        },
        {
            id: 7,
            brand: "Force Motors",
            model: "Urbania",
            image: urbaniaVanImage,
            price: "7000",
            seats: "17",
            luggage: "20"
        },
        {
            id: 8,
            brand: "Volovo",
            model: "V9600",
            image: volovoBus,
            price: "15000",
            seats: "45",
            luggage: "50"
        }
    ];

    const [filterData, setFilterData] = useState({
        brand: [],
        model: [],
        price: [],
        seats: []
    })

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;

        setFilterData((prev) => {
            const updatedFilters = { ...prev };

            // Step 1: Update the clicked filter
            const currentValues = new Set(prev[name] || []);
            checked ? currentValues.add(value) : currentValues.delete(value);
            updatedFilters[name] = Array.from(currentValues);

            // Step 2: Get matching cars based on the clicked value only
            const clickedValueCars = carData.filter(car => String(car[name]) === value);

            // Step 3: Collect related filter values from those cars
            const relatedBrands = new Set(updatedFilters.brand || []);
            const relatedModels = new Set(updatedFilters.model || []);
            const relatedSeats = new Set(updatedFilters.seats || []);
            const relatedPrices = new Set(updatedFilters.price || []);

            clickedValueCars.forEach(car => {
                if (checked) {
                    relatedBrands.add(car.brand);
                    relatedModels.add(car.model);
                    relatedSeats.add(String(car.seats));
                    relatedPrices.add(String(car.price));
                } else {
                    relatedBrands.delete(car.brand);
                    relatedModels.delete(car.model);
                    relatedSeats.delete(String(car.seats));
                    relatedPrices.delete(String(car.price));
                }
            });

            return {
                brand: Array.from(relatedBrands),
                model: Array.from(relatedModels),
                seats: Array.from(relatedSeats),
                price: Array.from(relatedPrices),
            };
        });
    };

    const handleClearAllFilters = () => {
        setFilterData({
            brand: [],
            model: [],
            price: [],
            seats: []
        })
    }

    const [filteredCars, setFilteredCars] = useState(carData || []);

    useEffect(() => {
        const filtered = carData.filter(car => {
            return (
                (!filterData.brand || filterData.brand.length === 0 || filterData.brand.includes(car.brand)) &&
                (!filterData.model || filterData.model.length === 0 || filterData.model.includes(car.model)) &&
                (!filterData.seats || filterData.seats.length === 0 || filterData.seats.includes(String(car.seats))) &&
                (!filterData.price || filterData.price.length === 0 || filterData.price.includes(String(car.price)))
            );
        });

        setFilteredCars(filtered);
    }, [filterData]);

    return (
        <div>
            <div className='container'>
                <div className='py-3'>
                    {hideFilterSection ? "" : <div className='d-flex d-lg-none justify-content-center align-items-center mb-1' data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                        <button className="btn filterButtonText" type="button" >Filter your favourite car</button>
                        <div className='mx-2'>
                            <img className='carFilterIcon' src={carFilterIcon} alt='carFilterIcon' />
                        </div>
                    </div>}
                    <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                        <div className="offcanvas-header">
                            <h5>Filter Cars</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body small">
                            <div className="d-flex d-lg-none d-flex flex-column justify-content-center filterCarSectionContainer">
                                {/* Filter Section Template */}
                                {[
                                    { label: "Brand", options: ["Maruti Suzuki", "Toyota", "Force Motors", "Volovo", "Honda"], name: "brand" },
                                    { label: "Model", options: ["Dzire", "Ertiga", "Amaze", "V9600", "Crysta", "Hycross", "Urbania", "Fortuner"], name: "model" },
                                    { label: "Seats", options: ["4", "6", "7", "17", "45"], name: "seats", format: val => `${val} Seats` },
                                    { label: "Price", options: ["2500", "4000", "4500", "7000", "10000", "15000"], name: "price", format: val => `₹ ${Number(val).toLocaleString("en-IN")}` }
                                ].map((filter, idx) => (
                                    <div className="mb-3" key={idx}>
                                        <strong>{filter.label}</strong>
                                        <div className="d-flex flex-wrap gap-2 fontSize14 mt-2">
                                            {filter.options.map((option, i) => (
                                                <div className="form-check" key={i} style={{ minWidth: '48%' }}>
                                                    <input
                                                        id={`${filter.name}-${option}`}
                                                        className="form-check-input cursorPointer"
                                                        type="checkbox"
                                                        name={filter.name}
                                                        value={option}
                                                        onChange={handleCheckboxChange}
                                                        checked={filterData[filter?.name]?.includes(option)}
                                                    />
                                                    <label htmlFor={`${filter.name}-${option}`} className="form-check-label cursorPointer">
                                                        {filter.format ? filter.format(option) : option}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <button className="btn btn-secondary w-100" onClick={handleClearAllFilters}>Clear All</button>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center justify-content-lg-start align-items-start'>
                        <div className={`${hideFilterSection ? "col-lg-12" : "col-lg-9"} d-flex justify-content-center justify-content-lg-start flex-wrap`}>
                            {
                                filteredCars?.map((carDetails) => {
                                    return (
                                        <div key={carDetails?.id} className='m-1 text-center fontSize13 fontWeight600 card p-1'>
                                        <img className='carImage' src={carDetails?.image} alt={carDetails?.brand} />
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='text-start'>
                                                <div className='text-decoration-underline cursorPointer'>{carDetails?.brand} {carDetails?.model}</div>
                                                <div className='d-flex align-items-center'>
                                                    <div className='d-flex align-items-center'>
                                                        <div>
                                                            <img className='mx-1 memberIcon' src={memberIcon} alt='memberIcon' />
                                                        </div>
                                                        <div>{carDetails?.seats}</div>
                                                    </div>
                                                    <div className='d-flex align-items-center mx-2'>
                                                        <div>
                                                            <img className='mx-1 memberIcon' src={luggageIcon} alt='luggageIcon' />
                                                        </div>
                                                        <div>{carDetails?.luggage}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-end'>
                                                <div className='text-decoration-underline cursorPointer'>
                                                    <span className='fontSize11'>starts from</span> ₹{carDetails?.price?.toLocaleString('en-IN')}
                                                </div>
                                                <div
                                                    className='text-decoration-underline cursorPointer'
                                                    data-bs-toggle='modal'
                                                    data-bs-target={`#${carDetails?.model?.replace(/\s+/g, '_')}`}
                                                >
                                                    Base Fare
                                                </div>
                                            </div>
                                        </div>
                                    
                                        {/* Modal */}
                                        <div
                                            className='modal fade'
                                            id={carDetails?.model?.replace(/\s+/g, '_')}
                                            data-bs-backdrop='static'
                                            data-bs-keyboard='false'
                                            tabIndex='-1'
                                            aria-labelledby={`${carDetails?.model?.replace(/\s+/g, '_')}_Label`}
                                            aria-hidden='true'
                                        >
                                            <div className='modal-dialog'>
                                                <div className='modal-content'>
                                                    <div className='modal-header'>
                                                        <h1 className='modalHeadingFareDetails' id={`${carDetails?.model?.replace(/\s+/g, '_')}_Label`}>
                                                            {carDetails?.brand} {carDetails?.model} - Fare Details
                                                        </h1>
                                                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                                    </div>
                                                    <div className='modal-body text-start'>
                                                        {/* You can put more fare breakdown info here */}
                                                        Base fare details for {carDetails?.model}
                                                    </div>
                                                    <div className='modal-footer'>
                                                        <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                                                            Close
                                                        </button>
                                                        <button type='button' className='btn btn-primary'>
                                                            Understood
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    )
                                })
                            }
                        </div>

                        {hideFilterSection ? "" :
                            <div className="d-none d-lg-block d-flex flex-column justify-content-center filterCarSectionContainer">
                                <h5>Filter Cars</h5>

                                {/* Filter Section Template */}
                                {[
                                    { label: "Brand", options: ["Maruti Suzuki", "Toyota", "Force Motors", "Volovo", "Honda"], name: "brand" },
                                    { label: "Model", options: ["Dzire", "Ertiga", "Amaze", "V9600", "Crysta", "Hycross", "Urbania", "Fortuner"], name: "model" },
                                    { label: "Seats", options: ["4", "6", "7", "17", "45"], name: "seats", format: val => `${val} Seats` },
                                    { label: "Price", options: ["2500", "4000", "4500", "7000", "10000", "15000"], name: "price", format: val => `₹ ${Number(val).toLocaleString("en-IN")}` }
                                ].map((filter, idx) => (
                                    <div className="mb-3" key={idx}>
                                        <strong>{filter.label}</strong>
                                        <div className="d-flex flex-wrap gap-2 fontSize14 mt-2">
                                            {filter.options.map((option, i) => (
                                                <div className="form-check" key={i} style={{ minWidth: '48%' }}>
                                                    <input
                                                        id={`${filter.name}-${option}`}
                                                        className="form-check-input cursorPointer"
                                                        type="checkbox"
                                                        name={filter.name}
                                                        value={option}
                                                        onChange={handleCheckboxChange}
                                                        checked={filterData[filter?.name]?.includes(option)}
                                                    />
                                                    <label htmlFor={`${filter.name}-${option}`} className="form-check-label cursorPointer">
                                                        {filter.format ? filter.format(option) : option}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <button className="btn btn-secondary w-100" onClick={handleClearAllFilters}>Clear All</button>
                            </div>
                        }
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
