import React from 'react'
import { useNavigate } from 'react-router-dom'

const TourCard = ({ image, title, description, path }) => {
    const navigate = useNavigate()
    return (
        <div className='tourCard d-flex flex-column justify-content-between align-items-center'>
            <div className='text-center tourTitle p-2 my-1'>{title}</div>
            <div className='my-1 p-2'><img src={image} alt={title} className='cardImage' /></div>
            <div className='my-1 p-2'>{description}</div>
            <div className='d-flex justify-content-center justify-content-center p-2'>
                <button className='mx-lg-3 contactUsBtn bgLinearGradient' onClick={() => navigate(`${path}`)}>Book Now</button>
            </div>
        </div>
    )
}

export default TourCard
