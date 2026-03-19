import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaCarSide,
  FaMapMarkerAlt,
  FaPlaneArrival,
  FaClock,
  FaBuilding,
  FaSuitcaseRolling
} from 'react-icons/fa'

const ROUTE_PATH = 'M 80 170 C 210 90, 360 200, 470 110 S 660 100, 820 150'

const steps = [
  { label: 'Flight Arrival', icon: FaPlaneArrival },
  { label: 'Driver Waiting', icon: FaClock },
  { label: 'Comfortable Ride', icon: FaCarSide },
  { label: 'Destination', icon: FaBuilding }
]

const CarRouteAnimation = () => {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const stepDuration = 6000 / steps.length
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  const Path = useMemo(
    () => (
      <>
        <path
          className="route-road"
          d={ROUTE_PATH}
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          className="route-center"
          d={ROUTE_PATH}
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="4"
          strokeDasharray="18 14"
          strokeLinecap="round"
        />
      </>
    ),
    []
  )

  return (
    <motion.section
      className="route-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
    >
      <div className="route-card">
        <div className="route-info">
            <h2 className="route-title" style={{ fontFamily: 'Outfit' }}>Hassle-Free Airport Pickups</h2>
            <p className="route-subtitle">
              Experience seamless airport transfers. We track your flight, wait for you upon arrival, and ensure a premium, comfortable ride to your final destination in Visakhapatnam.
            </p>
          </div>
        <div className="route-status">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const active = idx === activeStep
            return (
              <motion.div
                key={step.label}
                className={`route-stage ${active ? 'active' : ''}`}
                animate={active ? { scale: [1, 1.05, 1] } : undefined}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <div className="route-stage-icon">
                  <Icon />
                </div>
                <div className="route-stage-label">{step.label}</div>
              </motion.div>
            )
          })}
        </div>

        <div className="route-visual">
          <svg
            className="route-svg"
            viewBox="0 0 900 220"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(37, 211, 102, 0.9)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.7)" />
              </linearGradient>
            </defs>
            {Path}
            
            {/* Airport Start Point */}
            <circle className="route-point" cx="80" cy="170" r="16" fill="var(--bg-dark)" stroke="var(--accent)" strokeWidth="3" />
            <g transform="translate(70, 160)">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent)"><path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z"/></svg>
            </g>
            <text x="80" y="205" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" opacity="0.8">Airport</text>

            {/* Destination End Point */}
            <circle className="route-point" cx="820" cy="150" r="16" fill="var(--bg-dark)" stroke="var(--accent)" strokeWidth="3" />
            <g transform="translate(810, 140)">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z"/></svg>
            </g>
            <text x="820" y="185" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" opacity="0.8">Destination</text>
          </svg>

          <motion.div
            className="route-car"
            animate={{
              offsetDistance: ['0%', '100%'],
              scale: [1, 1.04, 1],
              rotate: [0, 3, -3, 0]
            }}
            transition={{
              duration: 6,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop'
            }}
            whileHover={{ scale: 1.12 }}
          >
            <div className="route-car-inner" style={{ fontSize: '1.8rem', color: 'var(--accent)' }}>
              <FaCarSide />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default CarRouteAnimation
