import React from "react";
import whatsUpIcon from "../Images/whatsUpIcon.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from '../hooks/useTranslation';
import { navLinks } from '../utils/navigation';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <motion.footer
      className="app-footer"
      style={{
        background: 'var(--bg-dark)',
        color: '#f8fafc',
        padding: '5rem 0 3rem 0',
        marginTop: 'auto',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="footer-grid d-flex flex-column flex-lg-row justify-content-between gap-5 mb-5">
          <div style={{ maxWidth: '350px' }}>
            <h4 className="fw-bold mb-3" style={{ fontFamily: 'Outfit', color: 'white' }}>{t('header.pageTitle')}</h4>
            <p className="text-muted" style={{ lineHeight: 1.8 }}>
              Your trusted partner for premium travel cars and unforgettable journeys in Visakhapatnam and beyond.
            </p>
          </div>

          <div>
            <h6 className="fw-semibold mb-2">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="link">
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="fw-semibold mb-3 text-white" style={{ fontFamily: 'Outfit', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.9rem' }}>Contact</h6>
            <p className="mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Phone: <a href="tel:+918790535149" className="link text-white text-decoration-none">+91 87905 35149</a>
            </p>
            <p className="mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Email: <a className="link text-white text-decoration-none" href="mailto:dreamdestinationsonline@gmail.com">
                dreamdestinationsonline@gmail.com
              </a>
            </p>
            <a
              href="https://wa.me/918790535149"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand d-inline-flex align-items-center gap-2"
              style={{ padding: '0.8rem 1.8rem', fontSize: '0.95rem' }}
            >
              <img className="whatsUpIcon" src={whatsUpIcon} alt="WhatsApp" style={{ width: '24px' }} />
              Book Now
            </a>
            <p className="mt-4" style={{ fontSize: "0.9rem", color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
              14-170-1/9, near Saradapeetam, Chinnamushidiwada, Pendurthi, Visakhapatnam, Andhra Pradesh 531173
            </p>
          </div>
        </div>

        <div className="footer-bottom text-center pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
          &copy; {new Date().getFullYear()} Dream Destination. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
