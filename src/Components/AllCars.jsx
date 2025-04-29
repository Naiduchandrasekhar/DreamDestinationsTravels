import React, { useEffect, useState } from 'react'
import carFilterIcon from "../Images/carFilterIcon.png";
import seatsIcon from "../Images/seatsIcon.png";
import whatsUpIcon from "../Images/whatsUpIcon.png";
import luggageIcon from "../Images/luggageIcon.png";
import carwalDzireImage from "../Images/carwaleDzireImage.jpg";
import urbaniaVanImage from "../Images/urbaniaVanImage.jpg";
import amazeRedCar from "../Images/amazeRedCar.jpg";
import fortunerCar from "../Images/fortunerCar.jpg";
import volovoBus from "../Images/volovoBus.jpg";
import memberIcon from "../Images/memberIcon.png"
import searchLogo from "../Images/searchLogo.png"
import toll from "../Images/toll.png"
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
            baseFare: "14/- per KM"
        },

        {
            id: 2,
            brand: "Honda",
            model: "Amaze",
            image: amazeRedCar,
            price: "2500",
            seats: "4",
            luggage: "2",
            baseFare: "14/- per KM"
        },
        {
            id: 3,
            brand: "Maruti Suzuki",
            model: "Ertiga",
            image: ertigaCarWaleImage,
            price: "3500",
            seats: "6",
            luggage: "3",
            baseFare: "18/- per KM"
        },
        {
            id: 4,
            brand: "Toyota",
            model: "Innova Crysta",
            image: innovaCrystaCarwaleImage,
            price: "4000",
            seats: "7",
            luggage: "3",
            baseFare: "20/- per KM"
        },
        {
            id: 5,
            brand: "Toyota",
            model: "Innova Hycross",
            image: innovaHycrosCarWaleImage,
            price: "4500",
            seats: "7",
            luggage: "3",
            baseFare: "20/- per KM"
        },
        {
            id: 6,
            brand: "Toyota",
            model: "Fortuner",
            image: fortunerCar,
            price: "10000",
            seats: "7",
            luggage: "3",
            baseFare: "45/- per KM"
        },
        {
            id: 7,
            brand: "17 Seater",
            model: "Tempo Traveller",
            image: urbaniaVanImage,
            price: "7000",
            seats: "17",
            luggage: "20",
            baseFare: "35/- per KM"
        },
        {
            id: 8,
            brand: "45 Seater",
            model: "Bus",
            image: volovoBus,
            price: "15000",
            seats: "45",
            luggage: "50",
            baseFare: "95/- per KM"
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

            // Step 1: Update the clicked filter (models)
            const currentValues = new Set(prev[name] || []);
            checked ? currentValues.add(value) : currentValues.delete(value);
            updatedFilters[name] = Array.from(currentValues);

            // Step 2: Get matching cars based on the clicked value (model)
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

            // Step 4: Ensure brand stays in filter only if there's at least one model for that brand
            const remainingModels = carData.filter(car =>
                relatedModels.has(car.model)
            );
            const brandsToKeep = new Set();
            remainingModels.forEach(car => brandsToKeep.add(car.brand));

            // Step 5: Update the filters (brand, model, seats, price)
            updatedFilters.brand = Array.from(brandsToKeep);

            // Step 6: Ensure seats and price filters are valid based on remaining cars
            const remainingSeats = new Set(remainingModels.map(car => String(car.seats)));
            const remainingPrices = new Set(remainingModels.map(car => String(car.price)));

            updatedFilters.seats = Array.from(remainingSeats);
            updatedFilters.price = Array.from(remainingPrices);

            // Return updated filter values
            return {
                brand: Array.from(brandsToKeep),
                model: Array.from(relatedModels),
                seats: Array.from(remainingSeats),
                price: Array.from(remainingPrices),
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
                        <button className="btn filterButtonText" type="button" ><img className='searchLogo' src={searchLogo} alt='searchLogo' /> Filter your favourite car</button>
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
                                    { label: "Brand", options: ["Maruti Suzuki", "Toyota", "Honda", "17 Seater", "45 Seater"], name: "brand" },
                                    { label: "Model", options: ["Dzire", "Ertiga", "Amaze", "Bus", "Innova Crysta", "Innova Hycross", "Tempo Traveller", "Fortuner"], name: "model" },
                                    { label: "Seats", options: ["4", "6", "7", "17", "45"], name: "seats", format: val => `${val} Seats` },
                                    { label: "Price", options: ["2500", "3500", "4000", "4500", "7000", "10000", "15000"], name: "price", format: val => `₹ ${Number(val).toLocaleString("en-IN")}` }
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
                        <div className={`${hideFilterSection ? "col-lg-12" : "col-lg-9  justify-content-lg-start"} d-flex justify-content-center flex-wrap`}>
                            {
                                filteredCars?.map((carDetails) => {
                                    return (
                                        <div key={carDetails?.id} className='m-1 text-center fontSize13 fontWeight600 card p-1'>
                                            <img className='carImage' src={carDetails?.image} alt={carDetails?.brand} />
                                            <div className='d-flex justify-content-between align-items-center p-2'>
                                                <div className='text-start'>
                                                    <div className='cursorPointer text-truncate' style={{ maxWidth: '150px' }}>{carDetails?.brand} {carDetails?.model}</div>
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
                                                    <div className='text-decoration-underline cursorPointer' data-bs-toggle='modal'
                                                        data-bs-target={`#${carDetails?.model?.replace(/\s+/g, '_')}`}>
                                                        <span className='fontSize11'>starts from</span> ₹{parseFloat(carDetails?.price)?.toLocaleString('en-IN')}
                                                    </div>
                                                    <div
                                                        className='text-decoration-underline cursorPointer'
                                                        data-bs-toggle='modal'
                                                        data-bs-target={`#${carDetails?.model?.replace(/\s+/g, '_')}`}
                                                    >
                                                        Base Price
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
                                                            <div className='modalHeadingFareDetails' id={`${carDetails?.model?.replace(/\s+/g, '_')}_Label`}>
                                                                {carDetails?.brand} {carDetails?.model} - Fare Details
                                                            </div>
                                                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                                        </div>
                                                        <div className='modal-body text-start'>
                                                            {/* You can put more fare breakdown info here */}
                                                            <div className='baseFareContainer'>
                                                                <div className='mb-1'>₹ {carDetails?.baseFare} for outstation trips (min 300 kms travels)</div>
                                                                <div className='d-flex align-items-center'><div><img className='tollIcon' src={toll} alt='toll' /></div> <div className='mx-2'>Excluding toll Charges</div></div>
                                                            </div>
                                                        </div>
                                                        <div className='modal-footer'>
                                                            <button type='button' className='btn btn-secondary fontSize13' data-bs-dismiss='modal'>
                                                                Close
                                                            </button>
                                                            <div className='d-flex justify-content-center justify-content-center p-2'>
                                                                <a
                                                                    href="https://wa.me/918790535149"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className='text-decoration-none'
                                                                >
                                                                    <button className='baseFareContactBtn fontSize13 d-flex align-items-center text-decoration-none'> <div><img className='whatsUpIcon' src={whatsUpIcon} alt='whatsUpIcon' /></div> <div className='mx-2'>Book Now</div></button>
                                                                </a>
                                                            </div>
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
                                    { label: "Brand", options: ["Maruti Suzuki", "Toyota", "Honda", "17 Seater", "45 Seater"], name: "brand" },
                                    { label: "Model", options: ["Dzire", "Ertiga", "Amaze", "Bus", "Innova Crysta", "Innova Hycross", "Tempo Traveller", "Fortuner"], name: "model" },
                                    { label: "Seats", options: ["4", "6", "7", "17", "45"], name: "seats", format: val => `${val} Seats` },
                                    { label: "Price", options: ["2500", "3500", "4000", "4500", "7000", "10000", "15000"], name: "price", format: val => `₹ ${Number(val).toLocaleString("en-IN")}` }
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
