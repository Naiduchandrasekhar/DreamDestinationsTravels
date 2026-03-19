import React, { useEffect } from 'react';
import undrawContactUs from "../Images/undrawContactUs.png"
import { Helmet } from 'react-helmet';
import { useTranslation } from '../hooks/useTranslation';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>Contact Us | Vizag Car Rentals - Dream Destinations Travels</title>
        <meta name="description" content="Get in touch with Dream Destinations Travels for car rentals, airport pickups, and tour packages in Vizag. Call or email us today." />
        <meta property="og:title" content="Contact Us | Vizag Car Rentals - Dream Destinations Travels" />
        <meta property="og:description" content="Reach out to us for affordable and reliable car rental services in Visakhapatnam. We’re here to help!" />
        <meta property="og:image" content="https://yourwebsite.com/images/share-preview.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
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

      <section className="section">
        <div className="container">
          <div className="mb-5 pt-5">
            <h2 className="section-title">{t('contact.title')}</h2>
            <p className="section-subtitle">
              {t('contact.intro')}
            </p>
          </div>

          <div className="glass p-4 mb-5 d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4">
            <div className="flex-fill ps-lg-4">
              <div className="mb-4">
                <h5 className="fw-bold text-accent" style={{ fontFamily: 'Outfit', letterSpacing: '0.02em' }}>{t('contact.emailLabel')}</h5>
                <p className="text-muted fs-5">info@dreamdestination.com</p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold text-accent" style={{ fontFamily: 'Outfit', letterSpacing: '0.02em' }}>{t('contact.phoneLabel')}</h5>
                <p className="text-muted fs-5">+91 8790535149</p>
              </div>
              <div>
                <h5 className="fw-bold text-accent" style={{ fontFamily: 'Outfit', letterSpacing: '0.02em' }}>{t('contact.addressLabel')}</h5>
                <p className="text-muted fs-5 lh-lg">
                  14-170/1/9, Chinnamushidiwada, Pendurthi, Visakhapatnam, Andhra Pradesh 531173
                </p>
              </div>
            </div>

            <div className="flex-fill d-flex justify-content-center">
              <img className='undrawContactUs' src={undrawContactUs} alt='Contact illustration' />
            </div>
          </div>

          <div>
            <h5 className="fw-semibold text-accent mb-3">{t('contact.ourLocation')}</h5>
            <div className="ratio ratio-16x9 rounded overflow-hidden glass">
              <iframe
                title="Dream Destinations Travels Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.606017382681!2d83.19895307594597!3d17.810204090485666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3966e746ed7c7b%3A0xfeb9aa369c80379a!2s14-170%2F1%2F9%2C%20Chinnamushidiwada%2C%20Pendurthi%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20531173!5e0!3m2!1sen!2sin!4v1747761075997!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
