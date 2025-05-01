import React, { useEffect, useState } from 'react'
import LoaderContainer from "../Components/LoaderContainer"
import { Helmet } from 'react-helmet';

// import planeEritaCarImage from "../Images/planeEritaCarImage.png";
// import planeDzireCarImage from "../Images/planeDzireCarImage.png";
// import planBrezzaCarImage from "../Images/planBrezzaCarImage.png";
// import carwalDzireImage from "../Images/carwaleDzireImage.jpg";
// import urbaniaVanImage from "../Images/urbaniaVanImage.jpg";
// import grandVitaraCarImage from "../Images/grandVitaraCarImage.webp";
// import ertigaCarWaleImage from "../Images/ertigaCarWaleImage.webp";
// import swiftVDICarwaleImage from "../Images/swiftVDICarwale.webp";
// import innovaCrystaCarwaleImage from "../Images/innovaCrystaCarwaleImage.webp";
// import mainFirstBgImage from "../Images/mainFirstBgImage.webp";
// import innovaHycrosCarWaleImage from "../Images/innovaHycrosCarWaleImage.webp"
// import xuvCarImage from "../Images/xuvCarImage.webp"
import airportDreamDestinationLogo from "../Images/airportDreamDestinationLogo.png"
import mainBackgroundImage from "../Images/mainBackgroundImage.png"
import divisBeachImage from "../Images/divisBeachImage.jpg";
import simhachalamTemple from "../Images/simhachalamTemple.jpg";
import tenatiPark from "../Images/tenatiPark.jpg"
import arakuImage from "../Images/arakuImage.jpg"
import arakuLandscape from "../Images/arakuLandscape.jpg"
import arakuWaterfalls from "../Images/arakuWaterfalls.jpg"
import borraCaves from "../Images/borraCaves.jpg"
import vizagCity from "../Images/vizagCity.jpg"
// import yaradaBeach from "../Images/yaradBeach.jpg"
import { Link } from 'react-router-dom';
import CarouselContainer from '../Components/CarouselContainer';
import TourCard from '../Components/TourCard';
import AllCars from '../Components/AllCars';
// import SwiftVdiCarImage from "../Images/swiftVDICarImage.jpg";
// import bmwFontImage from "../Images/bmwFontImage.jpg";
// import bmwSideImage from "../Images/bmwSideImage.jpg";
// import MarutiSuzukiErtigaFrontLeftView from "../Images/MarutiSuzukiErtigaFrontLeftView.jpg";
// import allCarBrandImage from "../Images/allCarBrandImage.jpg";
// import balenoCarImage from "../Images/balenoCarImage.jpg"
// import swiftVDICarImage from "../Images/swiftVDICarImage.jpg"

const vizagTourImages = [tenatiPark, simhachalamTemple, divisBeachImage]
const arakuTourImages = [arakuImage, arakuLandscape, arakuWaterfalls, borraCaves]

const travelPlaces = [
  {
    title: "Araku Valley",
    img: arakuLandscape,
    description: "A picturesque hill station nestled in the Eastern Ghats, Araku Valley is known for its coffee plantations, tribal culture, and stunning waterfalls. A perfect getaway from Visakhapatnam.",
    path:"/araku-package"
  },
  {
    title: "Lambasingi",
    img: "https://lightsalmon-okapi-437889.hostingersite.com/wp-content/uploads/2025/03/Misty-Lambasingi.jpg",
    description: "Often called the 'Kashmir of Andhra Pradesh', Lambasingi is a tiny village known for its chilly weather, misty mornings, and scenic landscapes. A rare place in South India where it gets close to freezing temperatures in winter.",
    path:"/lambasingi-package"
  },
  {
    title: "Vanajangi",
    img: "https://lightsalmon-okapi-437889.hostingersite.com/wp-content/uploads/2025/03/30-VZ-VANJANGI.jpg",
    description: "A hidden gem located in the Eastern Ghats, Vanajangi offers a magical sunrise view above the clouds. It’s a favorite trekking spot for nature lovers and photographers.",
    path:"/vanajangi-package"
  },
  {
    title: "Visakhapatnam Temple Tour Packages",
    img: "https://lightsalmon-okapi-437889.hostingersite.com/wp-content/uploads/2025/03/download-3.jpg",
    description: "Explore the divine side of Visakhapatnam with curated temple tour packages. Visit ancient temples like Simhachalam, Sri Kanaka Mahalakshmi, and ISKCON to experience spiritual bliss.",
    path:"/temple-package"
  },
  {
    title: "Visakhapatnam City Sightseeing Tour Packages",
    img: vizagCity,
    description: "Discover the charm of Vizag through its popular attractions—RK Beach, Kailasagiri, Submarine Museum, and more. A perfect mix of city vibes and coastal beauty.",
    path:"/vizag-tour-package"
  },
  {
    title: "Odisha Tour",
    img: "https://lightsalmon-okapi-437889.hostingersite.com/wp-content/uploads/2025/03/duduma-koraput-odisha-2-attr-hero.jpg",
    description: "Explore the cultural richness and natural beauty of Odisha—from the majestic Duduma Waterfalls in Koraput to ancient temples, tribal traditions, and scenic landscapes. This tour offers a soulful journey through Eastern India’s hidden gems.",
    path:"/odisha-package"
  },
];


const Home = () => {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    window.scrollTo(0,0)
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }, [])

  return (
    <div>
      <Helmet>
        <title>Vizag Car Rentals | Affordable Self Drive & Airport Pickup in Visakhapatnam</title>
        <meta name="description" content="Book Vizag car rentals and airport pickups at the best price. Self-drive and chauffeur options. Trusted, budget-friendly car hire service in Visakhapatnam." />
        <meta property="og:title" content="Vizag Car Rentals | Affordable Self Drive & Airport Pickup" />
        <meta property="og:description" content="Book reliable self-drive cars and airport pickups in Vizag. Easy booking, best rates, no hassle." />
        <meta property="og:image" content="https://yourwebsite.com/images/share-preview.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Helmet>
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
          <div className='text-center'>
            <h2 className='my-2 text-center firstTitle text-decoration-underline'>Our Cars</h2>
          </div>
          <AllCars hideViewMoreCarsBtn={false} hideFilterSection={true} />
          <div className='p-3 container'>
            <div className='tourPackagesTite p-2 my-2 text-center text-decoration-underline'>Our Tour Packages</div>
            <div className='d-flex justify-content-center justify-content-lg-between align-items-center flex-wrap'>
              {travelPlaces?.map((place, index) => {
                return (
                  <div className='m-1' key={index}>
                    <TourCard image={place?.img} description={place?.description} title={place?.title} path={place?.path} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      }
      </div>
    </div>
  )
}

export default Home
