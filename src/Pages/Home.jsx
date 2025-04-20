import React, { useEffect, useState } from 'react'
import LoaderContainer from "../Components/LoaderContainer"

// import planeEritaCarImage from "../Images/planeEritaCarImage.png";
// import planeDzireCarImage from "../Images/planeDzireCarImage.png";
// import planBrezzaCarImage from "../Images/planBrezzaCarImage.png";
import carwalDzireImage from "../Images/carwaleDzireImage.jpg";
import urbaniaVanImage from "../Images/urbaniaVanImage.jpg";
import grandVitaraCarImage from "../Images/grandVitaraCarImage.webp";
import ertigaCarWaleImage from "../Images/ertigaCarWaleImage.webp";
import swiftVDICarwaleImage from "../Images/swiftVDICarwale.webp";
import innovaCrystaCarwaleImage from "../Images/innovaCrystaCarwaleImage.webp";
import mainFirstBgImage from "../Images/mainFirstBgImage.webp";
import innovaHycrosCarWaleImage from "../Images/innovaHycrosCarWaleImage.webp"
import xuvCarImage from "../Images/xuvCarImage.webp"
import airportDreamDestinationLogo from "../Images/airportDreamDestinationLogo.png"
import mainBackgroundImage from "../Images/mainBackgroundImage.png"
import { Link } from 'react-router-dom';
// import SwiftVdiCarImage from "../Images/swiftVDICarImage.jpg";
// import bmwFontImage from "../Images/bmwFontImage.jpg";
// import bmwSideImage from "../Images/bmwSideImage.jpg";
// import MarutiSuzukiErtigaFrontLeftView from "../Images/MarutiSuzukiErtigaFrontLeftView.jpg";
// import allCarBrandImage from "../Images/allCarBrandImage.jpg";
// import balenoCarImage from "../Images/balenoCarImage.jpg"
// import swiftVDICarImage from "../Images/swiftVDICarImage.jpg"

const carData = [
  {
    id: 1,
    brand: "Maruti Suzuki",
    model: "Swift VDI",
    image: carwalDzireImage
  },

  {
    id: 2,
    brand: "Maruti Suzuki",
    model: "Baleno",
    image: grandVitaraCarImage
  },
  {
    id: 3,
    brand: "Maruti Suzuki",
    model: "Baleno",
    image: ertigaCarWaleImage
  },
  {
    id: 4,
    brand: "Maruti Suzuki",
    model: "Baleno",
    image: swiftVDICarwaleImage
  },
  {
    id: 5,
    brand: "Maruti Suzuki",
    model: "Baleno",
    image: innovaCrystaCarwaleImage
  },
  {
    id: 6,
    brand: "Maruti Suzuki",
    model: "Baleno",
    image: innovaHycrosCarWaleImage
  },
  {
    id: 7,
    brand: "Maruti Suzuki",
    model: "Baleno",
    image: urbaniaVanImage
  },
  {
    id: 8,
    brand: "Maruti Suzuki",
    model: "Baleno",
    image: xuvCarImage
  }
];

const Home = () => {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [])

  return (
    <div className=''>
      {loader ? <LoaderContainer /> :
        <div>
          <div className='firstContainer d-flex justify-content-center position-relative'>
            <div className='text-white firstDescriptionContainer'>
              <div className='text-center firstDescriptionTitle'>
                Dream Destinations Travels
              </div>
              <div className='firstDescriptionSubTitle'>
                Experience stress-free travel with reliable airport pickups and personalized service, wherever you go.
              </div>
              <div className='my-2 d-flex justify-content-around align-items-center'>
                <a
                  href="https://wa.me/918790535149"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className='descriptionButtons bgLinearGradient'>Pickup from Airport</button>
                </a>
                <a
                  href="https://wa.me/918790535149"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className='descriptionButtons bgLinearGradient'>Travel Packages</button>
                </a>
                <a
                  href="https://wa.me/918790535149"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className='descriptionButtons bgLinearGradient'>Budget Friendly</button>
                </a>
              </div>
            </div>
          </div>

          <div className='text-center'>
            <h2 className='my-2 text-center firstTitle'>Our Cars</h2>
          </div>
          <div>
            <div className='container d-flex justify-content-center py-3'>
              <div className='d-flex justify-content-center justify-content-lg-between flex-wrap'>
                {
                  carData?.map((carDetails) => {
                    return (
                      <div key={carDetails?.id} className='m-1 text-center fontSize13 fontWeight600 card p-1'>
                        <img className='carImage' src={carDetails?.image} alt={carDetails?.brand} />
                        <div>{carDetails?.brand}</div>
                        <div>{carDetails?.model}</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <Link to="/OurCars" className="navbarPageNames">
                <button className='descriptionButtons bgLinearGradient '>
                  View More Cars
                </button>
              </Link>
            </div>
          </div>
          <div className='mainAirportContainer'>
            <div className='mainTitleSkipRental p-2 my-2'>
              Pickups from Vizag Airport, Hassle-Free
            </div>
            <div className='d-flex flex-column flex-lg-row justify-content-center'>
              <div className='col-lg-5 d-flex justify-content-center'>
                <img className='airportImage' src={airportDreamDestinationLogo} alt='airportDreamDestinationLogo' />
              </div>
              <div className='col-lg-5 p-2'>
                <div className='airportDescription'>
                  Skip the usual rental process and enjoy seamless, on-time airport pickups. No lines, no delays — just reliable, comfortable rides waiting when you land.
                </div>
                <ul className='unorderList text-lg-nowrap text-wrap'>
                  <li> From runway to driveway, effortlessly.</li>
                  <li> No more waiting — on-time airport pickups, every time.</li>
                  <li> Land. Ride. Relax.</li>
                </ul>
                <div className='d-flex justify-content-center justify-content-lg-start'>
                  <a
                    href="https://wa.me/918790535149"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className='mx-lg-3 contactUsBtn bgLinearGradient'>Contact Us</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Home
