import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import arakuLandscape from '../Images/arakuLandscape.jpg'
import borraCaves from '../Images/borraCaves.jpg'
import divisBeachImage from '../Images/divisBeachImage.jpg' // generic fallback

const TourCard = ({ image, title, description, path }) => {
    const navigate = useNavigate()
    const [imgSrc, setImgSrc] = useState(image)

    const handleImageError = () => {
        // choose fallback based on title keywords
        if (title && title.toLowerCase().includes('araku')) {
            setImgSrc(arakuLandscape)
        } else if (title && title.toLowerCase().includes('vanajangi')) {
            setImgSrc(borraCaves)
        } else {
            setImgSrc(divisBeachImage)
        }
    }

    return (
        <div className='tourCard d-flex flex-column justify-content-between align-items-center'>
            <div className='text-center tourTitle p-2 my-1'>{title}</div>
            <div className='my-1 p-2'>
                <img src={imgSrc} alt={title} className='cardImage' onError={handleImageError} />
            </div>
            <div className='my-1 p-2'>{description}</div>
            <div className='d-flex justify-content-center justify-content-center p-2'>
                <button className='mx-lg-3 contactUsBtn bgLinearGradient' onClick={() => navigate(`${path}`)}>Price Details</button>
            </div>
        </div>
    )
}

export default TourCard
