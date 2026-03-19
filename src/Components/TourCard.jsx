import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
        <motion.div
      className='card d-flex flex-column justify-content-between align-items-stretch border-0'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -12 }}
    >
      <div className='position-relative overflow-hidden bg-light d-flex justify-content-center align-items-center' style={{ borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)', height: '220px' }}>
        <img src={imgSrc} alt={title} className='cardImage w-100 h-100' onError={handleImageError} style={{ objectFit: 'cover' }} />
        <div className='position-absolute bottom-0 w-100' style={{ height: '50%', background: 'linear-gradient(to top, rgba(15,23,42,0.8), transparent)' }}></div>
      </div>
      <div className='p-4 flex-grow-1 d-flex flex-column bg-white' style={{ borderBottomLeftRadius: 'var(--radius-lg)', borderBottomRightRadius: 'var(--radius-lg)' }}>
        <h5 className='card-title mb-3 text-dark' style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.4rem' }}>{title}</h5>
        <p className='card-text text-muted flex-grow-1 mb-4' style={{ lineHeight: 1.6 }}>{description}</p>
        <button className='btn btn-secondary mt-auto align-self-start' style={{ borderColor: 'var(--accent)', color: 'var(--accent)', background: 'transparent' }} onClick={() => navigate(`${path}`)}>
          Explore Package
        </button>
      </div>
    </motion.div>
    )
}

export default TourCard
