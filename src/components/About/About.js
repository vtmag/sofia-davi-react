import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {

  useEffect(() => {
    document.title = "Σοφία Δαβή | Ψυχολογική Υποστήριξη Θεσσαλονίκη | Συστημική Ψυχοθεραπεύτρια | Κλινική Ψυχολόγος | Online Ψυχοθεραπεία | Εξ' αποστάσεως Ψυχοθεραπεία";
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }

    
  };

  return (
    <>
    <section id="about" className="about-section">
      {/* <Helmet>
        <title>Σοφία Δαβή - Ψυχολόγος στη Θεσσαλονίκη | Υπηρεσίες Ψυχοθεραπείας</title>
        <meta name="description" content="Ψυχολόγος στη Θεσσαλονίκη με εξειδίκευση στην Ατομική Θεραπεία, Ομαδική Θεραπεία, και Θεραπεία Ζεύγους. Μάθετε περισσότερα." />
      </Helmet> */}
      <div className="about-content">
        <div className="about-text">
          <h1 className="main-heading">Σοφία Δαβή</h1>
          <p className="title title-to-hide">Ψυχολόγος-Ψυχοθεραπεύτρια</p>
          
          <p className='ab-txt'>
            Είμαι η Σοφία, απόφοιτη του Τμήματος Ψυχολογίας του
            Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης (ΑΠΘ). Μετά την ολοκλήρωση
            των προπτυχιακών μου σπουδών, συνέχισα με μεταπτυχιακές σπουδές
            στην Κλινική Ψυχική Υγεία στο τμήμα Ιατρικής του ΑΠΘ, εμβαθύνοντας
            στις σύγχρονες μεθόδους διάγνωσης και θεραπείας ψυχικών
            διαταραχών. Παράλληλα, εκπαιδεύομαι στη Συστημική Ψυχοθεραπεία, εστιάζοντας στην κατανόηση
            και αντιμετώπιση των ψυχικών διαταραχών μέσα από τη δυναμική των συστημάτων.  
            Η εμπειρία μου περιλαμβάνει την παροχή ψυχολογικής
            υποστήριξης τόσο σε ατομικές όσο και σε ομαδικές συνεδρίες, με
            έμφαση στη δημιουργία ενός ασφαλούς και υποστηρικτικού
            περιβάλλοντος για κάθε άτομο.
          </p>
          <div className="social-icons1">
      <a id='fb' href="https://www.facebook.com/sofia.davi.9" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a id='lnkdn' href="https://www.linkedin.com/in/sofia-davi-255784248/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
      
    </div>
          <button className="cta1-button" onClick={scrollToServices}>
            Δείτε τις Υπηρεσίες μου
          </button>
        </div>
        <div className="about-photo">
          <img src="/profile.jpg" alt="Ψυχολόγος Σοφία Δαβή" />
        </div>
      </div>
      
    </section>
    
    </>);
  
};

export default About;
