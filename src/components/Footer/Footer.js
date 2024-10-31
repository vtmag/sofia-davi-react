
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Χρήση useNavigate και useLocation
import { scroller } from 'react-scroll';

// Ορισμός σταθερών για duration και offset
const DURATION = 100; // σε milliseconds, για τη διάρκεια του scroll
const OFFSET = -50; // σε pixels, για το offset από την κορυφή της σελίδας

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  

  const handleNavigateAndScroll = (sectionId) => {
    // Βεβαιωνόμαστε ότι είμαστε στην αρχική σελίδα πριν κάνουμε scroll
    if (location.pathname !== '/') {
      // Αν δεν είμαστε στην αρχική, πηγαίνουμε εκεί πρώτα
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          duration: DURATION,
          delay: 0,
          smooth: true,
          offset: OFFSET,  // Χρησιμοποίησε μεγαλύτερο offset αν είναι απαραίτητο
        });
      }, 500); // Μικρή καθυστέρηση ώστε να φορτώσει η αρχική σελίδα
    } else {
      // Αν είμαστε ήδη στην αρχική σελίδα, απλά κάνουμε scroll στο συγκεκριμένο section
      scroller.scrollTo(sectionId, {
        duration: DURATION,
        delay: 0,
        smooth: true,
        offset: OFFSET,
      });
    }
  };

  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/sofia-davi-255784248/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="social-icon linkedin-icon">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.228c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.228h-3v-5.5c0-1.518-3-1.399-3 0v5.5h-3v-10h3v1.22c1.396-2.586 6-2.777 6 2.476v6.304z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/sofia.davi.9" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="social-icon facebook-icon">
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.129V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.621h-3.12V24h6.116c.73 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
          </svg>
        </a>
      </div>

      <p>Design and Development by <a href="https://magdavitsioti.com" className="hover-animate">Magda Vitsioti</a></p>
      <p>&copy; 2024 Δαβή Σοφία - Όλα τα δικαιώματα κατοχυρωμένα</p>

      <nav>
            <ul>
                <li><a href="/cookies-policy">Πολιτική Cookies</a></li>
                <li><a href="/privacy-policy">Πολιτική Απορρήτου</a></li>
            </ul>
        </nav>
      <nav className="footer-menu">
        <ul>
          <li><a onClick={() => handleNavigateAndScroll('arxikh')}>Αρχική</a></li>
          <li><a onClick={() => handleNavigateAndScroll('services')}>Υπηρεσίες</a></li>
          <li><a onClick={() => handleNavigateAndScroll('biography')}>Βιογραφικό</a></li>
          <li><a onClick={() => handleNavigateAndScroll('faq')}>FAQ</a></li>
          <li><a onClick={() => handleNavigateAndScroll('contact')}>Επικοινωνία</a></li>
          <li><a onClick={() => handleNavigateAndScroll('booking')}>Ραντεβού</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
