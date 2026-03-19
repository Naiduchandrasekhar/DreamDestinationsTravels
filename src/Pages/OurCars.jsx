import React, { useEffect } from 'react'
import AllCars from '../Components/AllCars'

const OurCars = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-5 my-lg-5">
          <h1 className="section-title">Our Fleet</h1>
          <p className="section-subtitle">
            Explore our full range of premium vehicles, from city commuters to luxury SUVs.
          </p>
        </div>
        <AllCars hideViewMoreCarsBtn={true} hideFilterSection={false} />
      </div>
    </section>
  )
}

export default OurCars
