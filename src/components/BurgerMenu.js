import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/BurgerMenu.css';

const DURATION = 100;
const OFFSET = -50;

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleServicesMenu = () => setIsServicesOpen(!isServicesOpen);

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false); // Close sub-menu too
  };

  const handleNavigateAndScroll = (sectionId) => {
    closeMenu(); // Close menu on navigation
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          duration: DURATION,
          delay: 0,
          smooth: true,
          offset: OFFSET,
        });
      }, 500);
    } else {
      scroller.scrollTo(sectionId, {
        duration: DURATION,
        delay: 0,
        smooth: true,
        offset: OFFSET,
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !document.querySelector('.mobile-nav1').contains(event.target) &&
        !document.querySelector('.burger-menu1').contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Burger icon */}
      <div className={`burger-menu1 ${isOpen ? 'open' : ''}`}>
        <div className="burger-icon1" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Dark overlay */}
      {isOpen && <div className="overlay show"></div>}

      {/* Mobile dropdown menu */}
      <nav className={`mobile-nav1 ${isOpen ? 'open' : ''}`}>
        <ul id='first-ul'>
          <li><a onClick={() => handleNavigateAndScroll('arxikh')}>ΑΡΧΙΚΗ</a></li>

          {/* Υπηρεσίες with sub-menu */}
          <li className={`services-item ${isServicesOpen ? 'open' : ''}`}>
            <div className="services-title" onClick={toggleServicesMenu}>
              ΥΠΗΡΕΣΙΕΣ&nbsp;
              <span className={`arrow ${isServicesOpen ? 'rotate' : ''}`}>
                <i className={`fas fa-chevron-${isServicesOpen ? 'up' : 'down'} arrow-icon ${isServicesOpen ? 'rotate' : ''}`}></i>
              </span>
            </div>
            <ul className={`services-submenu ${isServicesOpen ? 'open' : ''}`}>
              <li><a href='/individual-therapy' onClick={closeMenu}>Ατομική Θεραπεία</a></li>
              <li><a href='/group-therapy' onClick={closeMenu}>Ομαδική Θεραπεία</a></li>
              <li><a href='/online-therapy' onClick={closeMenu}>Online Συνεδρίες</a></li>
              <li><a href='/home-therapy' onClick={closeMenu}>Κατ' οίκον Συνεδρία</a></li>
              <li><a href='/family-therapy' onClick={closeMenu}>Θεραπεία Ζεύγους/Οικογενειακή</a></li>
              <li><a href='/test-therapy' onClick={closeMenu}>Ψυχολογικές Αξιολογήσεις</a></li>
              <li><a href='/old-therapy' onClick={closeMenu}>Υποστήριξη για Ηλικιωμένους</a></li>
              <li><a href='/child-therapy' onClick={closeMenu}>Παιδοψυχολογία</a></li>
            </ul>
          </li>

          <li><a onClick={() => handleNavigateAndScroll('biography')}>ΒΙΟΓΡΑΦΙΚΟ</a></li>
          <li><a href='/articles' onClick={closeMenu}>ΑΡΘΡΑ</a></li>
          <li><a onClick={() => handleNavigateAndScroll('faq')}>FAQ</a></li>
          <li><a onClick={() => handleNavigateAndScroll('contact')}>ΕΠΙΚΟΙΝΩΝΙΑ</a></li>
          <li><a onClick={() => handleNavigateAndScroll('booking')}>ΡΑΝΤΕΒΟΥ</a></li>
        </ul>

        <div className="footer-section">
          <div className="social-icons2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          {/* Phone Section */}
          <div className="contact-phone">
            <a href="tel:+306912345678">
              <i className="fas fa-phone-alt"></i> +30 691 234 5678
            </a>
          </div>

          <div className='rights'>
            <p>&copy; 2024 Δαβή Σοφία - All rights reserved</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BurgerMenu;
