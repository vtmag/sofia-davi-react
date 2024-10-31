import React, { useState, useEffect } from 'react';
import '../styles/CookieConsent.css'; // Εισαγωγή του CSS

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false); // Αν το banner είναι ορατό
  const [hideBanner, setHideBanner] = useState(false); // Αν το banner εξαφανίζεται

  // Έλεγχος για το cookie όταν φορτώνει η σελίδα
  useEffect(() => {
    const cookiesAccepted = false;
    if (!cookiesAccepted) {
      setTimeout(() => {
        console.log("No cookies found. Showing banner.");
        setShowBanner(true); // Αν δεν υπάρχει cookie, εμφανίζουμε το banner
      }, 100);
    }
  }, []);

  // Συνάρτηση όταν ο χρήστης πατήσει "Συμφωνώ"
  const acceptCookies = () => {
    console.log("Cookies accepted. Hiding banner...");
    document.cookie = "cookies_accepted=true; max-age=31536000; path=/"; // Αποθηκεύουμε τη συγκατάθεση για 1 χρόνο
    setHideBanner(true); // Ενεργοποιούμε το animation με την κλάση "hide"
    setTimeout(() => {
      setShowBanner(false); // Κρύβουμε τελείως το banner μετά το animation
    }, 700); // Η διάρκεια πρέπει να ταιριάζει με το CSS transition
  };

  // Αν το banner δεν πρέπει να εμφανιστεί, επιστρέφουμε null
  if (!showBanner && !hideBanner) {
    return null;
  }

  // Επιστρέφουμε το banner με τις κλάσεις "show" και "hide" όταν χρειάζεται
  return (
    <div className={`cookie-consent-banner ${showBanner && !hideBanner ? 'show' : ''} ${hideBanner ? 'hide' : ''}`}>
      <div className="cookie-content">
        <p>
          Χρησιμοποιούμε cookies για να διασφαλίσουμε την καλύτερη εμπειρία στο site μας. <a href="/cookies-policy">Μάθετε περισσότερα</a>
        </p>
        <button className="accept-btn" onClick={acceptCookies}>
          Συμφωνώ
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
