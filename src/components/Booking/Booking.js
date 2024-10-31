import React, { useState, useEffect } from 'react';
import Clock from '../Clock';

const Booking = () => {
  const [loading, setLoading] = useState(true); // To manage loading state

  useEffect(() => {
    const iframe = document.getElementById('calendly-iframe');
    if (iframe) {
      iframe.onload = () => {
        setLoading(false); // Set loading to false once the iframe is loaded
      };
    }
  }, []);

  return (
    <section id="booking" className="booking-section">
      <h2>Κλείστε online ραντεβού</h2>
      <h3>*Μόνο για online θεραπείες*</h3>

      <div className="time-section">
          <p>Τρέχουσα ημερομηνία και ώρα:</p>
          <Clock />
        </div>
      <div className="iframe-container">
        {loading && (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        )}
        <iframe
          id="calendly-iframe"
          src="https://calendly.com/magdavitsioti/30min"
          width="100%"
          height="800px"
          frameBorder="0"
          style={{ display: loading ? 'none' : 'block' }}
        ></iframe>
      </div>
      
    </section>
  );
};

export default Booking;
