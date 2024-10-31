import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Χρήση useNavigate και useLocation
import { scroller } from 'react-scroll';
import BurgerMenu from '../BurgerMenu';

// Ορισμός σταθερών για duration και offset
const DURATION = 100; // σε milliseconds, για τη διάρκεια του scroll
const OFFSET = -50; // σε pixels, για το offset από την κορυφή της σελίδας

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [targetSection, setTargetSection] = useState(null); // Στοχευμένο section
  const navigate = useNavigate();
  const location = useLocation();
  

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const mainHeaderHeight = document.querySelector('.header').offsetHeight;
      if (window.scrollY > mainHeaderHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Παρακολούθηση για αλλαγές στο pathname και scroll στο στόχο
  useEffect(() => {
    if (location.pathname === '/' && targetSection) {
      scroller.scrollTo(targetSection, {
        duration: DURATION,
        delay: 0,
        smooth: true,
        offset: OFFSET,
      });
      setTargetSection(null); // Καθαρισμός του στόχου
    }
  }, [location, targetSection]);

  // Συνάρτηση για να πλοηγηθεί στην αρχική σελίδα και να κάνει scroll στο συγκεκριμένο section
  const handleNavigateAndScroll = (sectionId) => {
    if (location.pathname !== '/') {
      setTargetSection(sectionId); // Ορισμός του section ως στόχος
      navigate('/'); // Πλοήγηση στην αρχική σελίδα
    } else {
      // Αν βρισκόμαστε ήδη στην αρχική σελίδα
      scroller.scrollTo(sectionId, {
        duration: DURATION,
        delay: 0,
        smooth: true,
        offset: OFFSET,
      });
    }
  };

  return (
    <>
      <header className="header" id="arxikh">
      
          
        <nav className="navbar">
          <div className="logo">
            <a onClick={() => handleNavigateAndScroll('arxikh')}>
              <img src="/logo-final-removebg-preview.png" alt="Logo" />
            </a>
          </div>

          <ul className={`nav-links ${isBurgerOpen ? 'open' : ''}`}>
            <li>
              <a onClick={() => handleNavigateAndScroll('arxikh')}>
                Αρχική
              </a>
            </li>
            <li className="dropdown">
              <a onClick={() => handleNavigateAndScroll('services')}>
                Υπηρεσίες +
              </a>
              <div className="dropdown-buffer"></div>
              <ul className="dropdown-content">
                <li><a href="/individual-therapy">Ατομική Θεραπεία</a></li><hr />
                <li><a href="/group-therapy">Ομαδική Θεραπεία</a></li><hr />
                <li><a href="/online-therapy">Online συνεδρίες</a></li><hr />
                <li><a href="/home-therapy">Κατ'οίκον συνεδρίες</a></li><hr />
                <li><a href="/family-therapy">Θεραπεία Ζεύγους/Οικογενειακή Θεραπεία</a></li><hr />
                <li><a href="/test-therapy">Ψυχολογικές Αξιολογήσεις</a></li><hr />
                <li><a href="/old-therapy">Ψυχολογική Υποστήριξη για Ηλικιωμένους</a></li><hr />
                <li><a href="/child-therapy">Παιδοψυχολογία και Θεραπεία Παιδιών/Εφήβων</a></li>
              </ul>
            </li>
            <li><a onClick={() => handleNavigateAndScroll('biography')}>Βιογραφικό</a></li>
            <li><a href='/articles'>Άρθρα</a></li>

            <li><a onClick={() => handleNavigateAndScroll('faq')}>FAQ</a></li>
            <li><a onClick={() => handleNavigateAndScroll('contact')}>Επικοινωνία</a></li>
            <li>
              <a onClick={() => handleNavigateAndScroll('booking')}>
                Ραντεβού
              </a>
            </li>
          </ul>
        
        
        </nav>
        
      </header>


      <header className={`sticky-header ${isSticky ? 'active' : ''}`}>
        <div className="sticky-navbar">
          <div className="logo2">
            <a onClick={() => handleNavigateAndScroll('arxikh')}>
              <img src="/logo-final-removebg-preview.png" alt="Logo" />
            </a>
          </div>
          <ul className="nav-links">
            <li><a onClick={() => handleNavigateAndScroll('arxikh')}>ΑΡΧΙΚΗ</a></li>
            <li><a onClick={() => handleNavigateAndScroll('services')}>ΥΠΗΡΕΣΙΕΣ</a></li>
            <li><a onClick={() => handleNavigateAndScroll('biography')}>ΒΙΟΓΡΑΦΙΚΟ</a></li>
            <li><a href='/articles'>ΑΡΘΡΑ</a></li>

            <li><a onClick={() => handleNavigateAndScroll('faq')}>FAQ</a></li>
            <li><a onClick={() => handleNavigateAndScroll('contact')}>ΕΠΙΚΟΙΝΩΝΙΑ</a></li>

            <li>
              <div className="appointment-button">
                <a onClick={() => handleNavigateAndScroll('booking')}>
                  ΡΑΝΤΕΒΟΥ
                </a>
              </div>
            </li>
          </ul>
          
          
        </div>        
      </header>
    </>
  );
};

export default Header;
