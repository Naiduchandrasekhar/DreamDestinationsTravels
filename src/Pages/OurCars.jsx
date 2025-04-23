import React from 'react'
import AllCars from '../Components/AllCars'

const OurCars = () => {
  return (
    <div className='py-5'>
      <div className='pt-5'>
      <AllCars hideViewMoreCarsBtn={true} hideFilterSection={false}  />
      </div>
    </div>
  )
}

export default OurCars
