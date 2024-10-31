import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import BurgerMenu from '../BurgerMenu';

const DURATION = 100;
const OFFSET = -50;

const sections = [
  { id: 'arxikh', label: 'Αρχική' },
  { id: 'services', label: 'Υπηρεσίες' },
  { id: 'biography', label: 'Βιογραφικό' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Επικοινωνία' },
  { id: 'booking', label: 'Ραντεβού' },
];

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('arxikh');
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); 

  const toggleBurgerMenu = () => setIsBurgerOpen(!isBurgerOpen);

  useEffect(() => {
    const handleScroll = () => {
      const mainHeaderHeight = document.querySelector('.header').offsetHeight;
      setIsSticky(window.scrollY > mainHeaderHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to track visible section
  useEffect(() => {
    const observerOptions = { threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigateAndScroll = (sectionId) => {
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
          <li  className={`dropdown ${isSubmenuOpen ? 'active' : ''}`}
              onMouseEnter={() => setIsSubmenuOpen(true)}
              onMouseLeave={() => setIsSubmenuOpen(false)}>
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
