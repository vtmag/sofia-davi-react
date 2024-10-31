import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Λειτουργία για scroll προς τα πάνω
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll
    });
  };

  // Ελέγχει το scroll και εμφανίζει το κουμπί αν ο χρήστης έχει κάνει scroll προς τα κάτω
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      className={isVisible ? 'show' : ''} // Προσθήκη της κλάσης show για ομαλή εμφάνιση
    >
      <i className="fas fa-arrow-up"></i> {/* Εικονίδιο Font Awesome */}
    </button>
  );
};

export default BackToTopButton;
