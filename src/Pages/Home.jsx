import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import LoaderContainer from "../Components/LoaderContainer"
import { Helmet } from 'react-helmet';
import { useTranslation } from '../hooks/useTranslation';

// import planeEritaCarImage from "../Images/planeEritaCarImage.png";
// import planeDzireCarImage from "../Images/planeDzireCarImage.png";
// import planBrezzaCarImage from "../Images/planBrezzaCarImage.png";
// import carwalDzireImage from "../Images/carwaleDzireImage.jpg";
// import urbaniaVanImage from "../Images/urbaniaVanImage.jpg";
// import grandVitaraCarImage from "../Images/grandVitaraCarImage.webp";
// import ertigaCarWaleImage from "../Images/ertigaCarWaleImage.webp";
// import swiftVDICarwaleImage from "../Images/swiftVDICarwale.webp";
// import innovaCrystaCarwaleImage from "../Images/innovaCrystaCarwaleImage.webp";
import mainFirstBgImage from "../Images/mainFirstBgImage.webp";
// import innovaHycrosCarWaleImage from "../Images/innovaHycrosCarWaleImage.webp"
// import xuvCarImage from "../Images/xuvCarImage.webp"
import arakuImage from "../Images/arakuImage.jpg"
import arakuLandscape from "../Images/arakuLandscape.jpg"
import arakuWaterfalls from "../Images/arakuWaterfalls.jpg"
import borraCaves from "../Images/borraCaves.jpg"
import vizagCity from "../Images/vizagCity.jpg"
import TourCard from '../Components/TourCard';
import AllCars from '../Components/AllCars';
import CarRouteAnimation from '../Components/CarRouteAnimation';

const WHATSAPP_LINK = "https://wa.me/918790535149?text=Hello%20I%20am%20interested%20in%20your%20car%20rental%20services";

// import SwiftVdiCarImage from "../Images/swiftVDICarImage.jpg";
// import bmwFontImage from "../Images/bmwFontImage.jpg";
// import bmwSideImage from "../Images/bmwSideImage.jpg";
// import MarutiSuzukiErtigaFrontLeftView from "../Images/MarutiSuzukiErtaFrontLeftView.jpg";
// import allCarBrandImage from "../Images/allCarBrandImage.jpg";
// import balenoCarImage from "../Images/balenoCarImage.jpg"
// import swiftVDICarImage from "../Images/swiftVDICarImage.jpg"

// const vizagTourImages = [tenatiPark, simhachalamTemple, divisBeachImage]
const arakuTourImages = [arakuImage, arakuLandscape, arakuWaterfalls, borraCaves]

// const travelPlaces = [
//   {
//     title: "Araku Valley",
//     img: arakuLandscape,
//     description: "A picturesque hill station nestled in the Eastern Ghats, Araku Valley is known for its coffee plantations, tribal culture, and stunning waterfalls. A perfect getaway from Visakhapatnam.",
//     path:"/araku-package"
//   },
//   {
//     title: "Lambasingi",
//     img: "https://lightsalmon-okapi-437889.hostingersite.com/wp-content/uploads/2025/03/Misty-Lambasingi.jpg",
//     description: "Often called the 'Kashmir of Andhra Pradesh', Lambasingi is a tiny village known for its chilly weather, misty mornings, and scenic landscapes. A rare place in South India where it gets close to freezing temperatures in winter.",
//     path:"/lambasingi-package"
//   },
//   {
//     title: "Vanajangi",
//     img: "https://lightsalmon-okapi-437889.hostingersite.com/wp-content/uploads/2025/03/30-VZ-VANJANGI.jpg",
//     description: "A hidden gem located in the Eastern Ghats, Vanajangi offers a magical sunrise view above the clouds. It’s a favorite trekking spot for nature lovers and photographers.",
//     path:"/vanajangi-package"
//   },
//   {
//     title: "Visakhapatnam Temple Tour Packages",
//     img: "https://lightsalmon-okapi-437889.hostingersite.com/wp-content/uploads/2025/03/download-3.jpg",
//     description: "Explore the divine side of Visakhapatnam with curated temple tour packages. Visit ancient temples like Simhachalam, Sri Kanaka Mahalakshmi, and ISKCON to experience spiritual bliss.",
//     path:"/temple-package"
//   },
//   {
//     title: "Visakhapatnam City Sightseeing Tour Packages",
//     img: vizagCity,
//     description: "Discover the charm of Vizag through its popular attractions—RK Beach, Kailasagiri, Submarine Museum, and more. A perfect mix of city vibes and coastal beauty.",
//     path:"/vizag-tour-package"
//   },
//   // {
//   //   title: "Odisha Tour",
//   //   img: "https://lightsalmon-okapi-437889.hostingersite.com/wp-content/uploads/2025/03/duduma-koraput-odisha-2-attr-hero.jpg",
//   //   description: "Explore the cultural richness and natural beauty of Odisha—from the majestic Duduma Waterfalls in Koraput to ancient temples, tribal traditions, and scenic landscapes. This tour offers a soulful journey through Eastern India’s hidden gems.",
//   //   path:"/odisha-package"
//   // },
// ];

const travelPlaces = [
  {
    title: "Araku Valley",
    img: arakuLandscape,
    description:
      "Araku Valley is a scenic hill station in the Eastern Ghats, known for coffee plantations, tribal culture, and lush waterfalls. A peaceful retreat just hours from Visakhapatnam.",
    path: "/araku-package",
  },
  {
    title: "Lambasingi",
    img: "https://lightsalmon-okapi-437889.hostingersite.com/wp-content/uploads/2025/03/Misty-Lambasingi.jpg",
    description:
      "Lambasingi is a charming village with misty mornings, cool temperatures, and lush landscapes. Known as the 'Kashmir of Andhra', it's a unique winter destination in South India.",
    path: "/lambasingi-package",
  },
  {
    title: "Vanajangi",
    img: "https://lightsalmon-okapi-437889.hostingersite.com/wp-content/uploads/2025/03/30-VZ-VANJANGI.jpg",
    description:
      "Vanajangi offers breathtaking sunrise views above the clouds. Nestled in the Eastern Ghats, it's a serene trekker’s paradise and perfect for nature photography and quiet escapes.",
    path: "/vanajangi-package",
  },
  {
    title: "Visakhapatnam Temple Tour Packages",
    img: "https://lightsalmon-okapi-437889.hostingersite.com/wp-content/uploads/2025/03/download-3.jpg",
    description:
      "Discover Vizag’s spiritual side by visiting temples like Simhachalam, Kanaka Mahalakshmi, and ISKCON. These guided temple tours offer peaceful and culturally rich experiences across the city.",
    path: "/temple-package",
  },
  {
    title: "Visakhapatnam City Sightseeing Tour Packages",
    img: vizagCity,
    description:
      "Explore Vizag’s top attractions including RK Beach, Kailasagiri, and Submarine Museum. These full-day city tours offer a vibrant blend of culture, coastlines, and urban charm.",
    path: "/vizag-tour-package",
  },
];


const Home = () => {
  const [loader, setLoader] = useState(true)
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0)
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
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Dream Destinations Travels",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "14-170/1/9, Chinnamushidiwada, Pendurthi",
              "addressLocality": "Visakhapatnam",
              "addressRegion": "Andhra Pradesh",
              "postalCode": "531173",
              "addressCountry": "IN"
            },
            "telephone": "+918790535149",
            "areaServed": "Visakhapatnam"
          }`}
        </script>
      </Helmet>
      <div>
        {loader ? (
          <LoaderContainer />
        ) : (
          <>
            {/* STUNNING NEW HERO SECTION */}
            <section className="position-relative vh-100 overflow-hidden d-flex align-items-center mt-0 pt-0" id="hero-section">
              {/* Animated Background */}
              <motion.div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  backgroundImage: `url(${mainFirstBgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 0,
                }}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />

              {/* Complex Gradient Overlays for Depth */}
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.6) 40%, rgba(15,23,42,0.1) 100%)', zIndex: 1 }}></div>
              <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '40%', background: 'linear-gradient(to top, var(--bg-alt) 0%, transparent 100%)', zIndex: 1 }}></div>

              <div className="container position-relative" style={{ zIndex: 10 }}>
                <div className="row align-items-center">
                  <div className="col-lg-7 pt-5">
                    {/* Floating Badge */}
                    <motion.div
                      className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill glass mb-4 border border-white border-opacity-25 shadow"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                    >
                      <span className="badge bg-accent text-dark rounded-pill px-2 py-1">Premium</span>
                      <span className="text-white fontSize13 fw-semibold">Luxury Travel & Rentals in AP</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                      className="text-white fw-bold mb-4"
                      style={{ fontFamily: 'Outfit', fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    >
                      <span style={{ display: 'block', marginBottom: '0.2rem' }}>{t('header.pageTitle')}</span>
                      <span className="text-accent position-relative d-inline-block" style={{ textShadow: '0 0 30px rgba(245,158,11,0.4)' }}>
                        Made Unforgettable
                        <svg className="position-absolute w-100" style={{ bottom: '-10px', left: 0, height: '12px' }} viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.38043 9.85172C35.0935 3.99126 102.213 -1.82173 197.801 7.21855" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                      className="text-white opacity-75 mb-5 fs-5"
                      style={{ maxWidth: '600px', lineHeight: 1.7 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                    >
                      {t('home.subtitle')}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                      className="d-flex flex-column flex-sm-row gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
                    >
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-brand d-inline-flex justify-content-center align-items-center gap-2 rounded-pill shadow-lg"
                        style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}
                      >
                        <span className="fw-bold">{t('button.contactUs')}</span>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </a>
                      <a
                        href="#tour-packages"
                        className="btn btn-outline-light d-inline-flex justify-content-center align-items-center gap-2 rounded-pill glass"
                        style={{ padding: '1rem 2rem', fontSize: '1.05rem', border: '1px solid rgba(255,255,255,0.4)', color: '#fff' }}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('tour-packages')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <span className="fw-semibold text-black">Explore Packages</span>
                      </a>
                    </motion.div>
                  </div>

                  {/* High-end Review Glass Card (Desktop Only) */}
                  <div className="col-lg-5 d-none d-lg-flex align-items-center justify-content-end pt-5">
                    <motion.div
                      className="glass p-4 rounded-4 text-white border border-white border-opacity-25"
                      style={{ backdropFilter: 'blur(30px)', backgroundColor: 'rgba(255, 255, 255, 0.08)', width: '320px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
                      initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                      transition={{ duration: 1, delay: 0.9, type: 'spring' }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <div className="d-flex align-items-center gap-3 mb-4">
                        <div className="bg-accent text-dark rounded-circle d-flex align-items-center justify-content-center fw-bolder shadow-sm" style={{ width: '54px', height: '54px', fontSize: '1.3rem' }}>
                          4.9
                        </div>
                        <div>
                          <div className="d-flex text-accent fs-5 mb-1">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                          </div>
                          <div className="fontSize13 text-white opacity-75">Trusted by 10k+ users</div>
                        </div>
                      </div>
                      <h5 className="fw-semibold mb-2" style={{ fontFamily: 'Outfit' }}>"Best car rental in Vizag!"</h5>
                      <p className="fontSize14 text-white opacity-75 mb-0" style={{ lineHeight: 1.6 }}>Immaculate cars, professional drivers, and top-tier service. Highly recommended for Araku trips.</p>

                      {/* Decorative elements */}
                      <div className="position-absolute top-0 end-0 m-3 opacity-25">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
            {/* END STUNNING HERO SECTION */}

            <section className="section bg-white overflow-hidden py-5 pt-lg-0 mt-lg-5">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <h2 className="section-title text-start mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Experience Dream Destinations</h2>
                      <p className="section-subtitle text-start ms-0" style={{ maxWidth: '100%', fontSize: '1.15rem' }}>
                        At <strong className="text-accent" style={{ fontFamily: 'Outfit' }}>Dream Destinations Travels</strong>, we don't just provide cars; we design unforgettable journeys. Immerse yourself in the breathtaking landscapes of Visakhapatnam, Araku Valley, and beyond in unparalleled comfort and style.
                      </p>

                      <div className="d-flex flex-column gap-3 mt-4">
                        <motion.div
                          className="d-flex align-items-center gap-3 p-3 bg-light rounded-4"
                          whileHover={{ x: 10, backgroundColor: '#fcd34d' }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <div className="bg-white p-2 rounded-circle shadow-sm fs-4 d-flex">⭐</div>
                          <div>
                            <h6 className="mb-0 fw-bold" style={{ fontFamily: 'Outfit' }}>Top-Rated Experiences</h6>
                            <small className="text-muted">Over 1,000+ happy customers trusting our services.</small>
                          </div>
                        </motion.div>
                        <motion.div
                          className="d-flex align-items-center gap-3 p-3 bg-light rounded-4"
                          whileHover={{ x: 10, backgroundColor: '#fcd34d' }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <div className="bg-white p-2 rounded-circle shadow-sm fs-4 d-flex">🚗</div>
                          <div>
                            <h6 className="mb-0 fw-bold" style={{ fontFamily: 'Outfit' }}>Immaculate Premium Fleet</h6>
                            <small className="text-muted">From sleek sedans to luxurious 45-seater coaches.</small>
                          </div>
                        </motion.div>
                        <motion.div
                          className="d-flex align-items-center gap-3 p-3 bg-light rounded-4"
                          whileHover={{ x: 10, backgroundColor: '#fcd34d' }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <div className="bg-white p-2 rounded-circle shadow-sm fs-4 d-flex">🛡️</div>
                          <div>
                            <h6 className="mb-0 fw-bold" style={{ fontFamily: 'Outfit' }}>Safe & Professional</h6>
                            <small className="text-muted">Highly trained chauffeurs prioritizing your safety.</small>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="col-lg-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="position-relative"
                    >
                      <div className="position-relative w-100" style={{ paddingBottom: '120%' }}>
                        {/* Abstract background shape behind images */}
                        <div className="position-absolute rounded-circle" style={{ top: '10%', right: '-5%', width: '80%', height: '80%', background: 'linear-gradient(135deg, var(--accent) 0%, #fcd34d 100%)', opacity: 0.2, filter: 'blur(40px)', zIndex: 0 }}></div>

                        <img src={arakuLandscape} alt="Visakhapatnam Tourism" className="position-absolute shadow-lg" style={{ top: '0', left: '0', width: '70%', height: '60%', objectFit: 'cover', borderRadius: '30px', zIndex: 2, border: '6px solid white' }} />

                        <img src={vizagCity} alt="Vizag City Tour" className="position-absolute shadow-lg" style={{ bottom: '0', right: '0', width: '65%', height: '55%', objectFit: 'cover', borderRadius: '30px', zIndex: 3, border: '6px solid white' }} />

                        <motion.div
                          className="position-absolute bg-white p-3 rounded-4 shadow-lg d-flex align-items-center gap-3"
                          style={{ top: '40%', left: '-10%', zIndex: 4, border: '2px solid rgba(245, 158, 11, 0.2)' }}
                          animate={{ y: [0, -15, 0] }}
                          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                        >
                          <div className="fs-1">🏆</div>
                          <div>
                            <h5 className="mb-0 fw-bold text-accent" style={{ fontFamily: 'Outfit' }}>#1 Choice</h5>
                            <small className="text-muted fw-bold">in Visakhapatnam</small>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            <CarRouteAnimation />

            <section className="section">
              <div className="container">
                <motion.div
                  className="text-center mb-5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="section-title">Our Cars</h2>
                  <p className="section-subtitle">
                    Find the perfect ride for your journey — from compact city cars to luxurious SUVs.
                  </p>
                </motion.div>
                <AllCars hideViewMoreCarsBtn={false} hideFilterSection={true} />
              </div>
            </section>

            <section className="section" id="tour-packages">
              <div className="container">
                <motion.div
                  className="text-center mb-5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <h2 className="section-title">Exclusive Tour Packages</h2>
                  <p className="section-subtitle">
                    Experience the best of Visakhapatnam and surrounding areas with our meticulously curated tours designed for discovery and comfort.
                  </p>
                </motion.div>
                <motion.div
                  className="d-flex justify-content-center flex-wrap gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {travelPlaces?.map((place, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                      <TourCard
                        image={place?.img}
                        description={place?.description}
                        title={place?.title}
                        path={place?.path}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  )
}

export default Home
