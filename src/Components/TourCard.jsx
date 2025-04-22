import React from 'react'

const TourCard = ({ image, title, description }) => {
    return (
        <div className='tourCard d-flex flex-column justify-content-between align-items-center'>
            <div className='text-center tourTitle p-2 my-1'>{title}</div>
            <div className='my-1 p-2'><img src={image} alt={title} className='cardImage' /></div>
            <div className='my-1 p-2'>{description}</div>
            <div className='d-flex justify-content-center justify-content-center p-2'>
                <a
                    href="https://wa.me/918790535149"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className='mx-lg-3 contactUsBtn bgLinearGradient'>Book Now</button>
                </a>
            </div>
        </div>
    )
}

export default TourCard
