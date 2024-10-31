import React, { useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Ατομική Θεραπεία',
    description: 'Εξατομικευμένη προσέγγιση για την αντιμετώπιση ψυχολογικών προκλήσεων.',
    link: '/individual-therapy',
  },
  {
    title: 'Ομαδική Θεραπεία',
    description: 'Ομαδικές συνεδρίες που ενισχύουν την αλληλεπίδραση και την υποστήριξη μεταξύ των μελών.',
    link: '/group-therapy',
  },
  {
    title: 'Online Συνεδρίες',
    description: 'Πραγματοποιήστε τις συνεδρίες σας από την άνεση του σπιτιού σας μέσω ασφαλών διαδικτυακών πλατφορμών',
    link: '/online-therapy',
  },
  {
    title: 'Κατ\' οίκον συνεδρία',
    description: 'Απολαύστε τις θεραπευτικές υπηρεσίες στον δικό σας χώρο με κατ\' οίκον συνεδρίες.',
    link: '/home-therapy',
  },
  {
    title: 'Θεραπεία Ζεύγους/Οικογενειακή Θεραπεία',
    description: 'Βοήθεια σε ζευγάρια και οικογένειες που αντιμετωπίζουν δυσκολίες στις σχέσεις τους, βελτίωση της επικοινωνίας, επίλυση συγκρούσεων κ.λπ.',
    link: '/family-therapy',
  },
  {
    title: 'Ψυχολογικές Αξιολογήσεις',
    description: 'Χρήση τεστ και άλλων διαγνωστικών εργαλείων για την αξιολόγηση της ψυχικής υγείας και των δυνατοτήτων του ατόμου.',
    link: '/test-therapy',
  },
  {
    title: 'Ψυχολογική Υποστήριξη για Ηλικιωμένους',
    description: 'Εξειδικευμένες υπηρεσίες ψυχολογικής υποστήριξης για ηλικιωμένα άτομα ή φροντιστές, με στόχο την αντιμετώπιση θεμάτων που αφορούν την τρίτη ηλικία.',
    link: '/old-therapy',
  },
  {
    title: 'Παιδοψυχολογία και Θεραπεία Παιδιών/Εφήβων',
    description: 'Υπηρεσίες για παιδιά και εφήβους που αντιμετωπίζουν προβλήματα όπως άγχος, διαταραχές συμπεριφοράς, δυσκολίες στη μάθηση, και άλλα αναπτυξιακά ζητήματα.',
    link: '/child-therapy',
  },
];

const ServicesList = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const servicesRef = useRef(null);

  // Detect screen size to adjust "See More" functionality
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);


  }, []);
  const toggleExpand = () => {
    if (showMore && servicesRef.current) {
      // Μόνο όταν κλείνει, επιστρέφει στο κουμπί με λίγο πιο πάνω offset
      setTimeout(() => {
        const offset = -600; // Πόσο πιο πάνω θέλεις να μετακινηθεί
        const elementPosition = servicesRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 100); // Μικρή καθυστέρηση για να ολοκληρωθεί το animation
    }

    setShowMore(!showMore); // Εναλλαγή εμφάνισης
  };
  
  // const toggleExpand = () => {
  //   if (showMore && servicesRef.current) {
      
  //     setTimeout(() => {
  //       const offset = -600;
  //       const elementPosition = servicesRef.current.getBoundingClientRect().top;
  //       const offsetPosition = elementPosition + window.pageYOffset + offset;
  
        
  //       let start = window.pageYOffset;
  //       let distance = offsetPosition - start;
  //       let duration = 1500; 
  //       let startTime = null;
  
  //       function animation(currentTime) {
  //         if (startTime === null) startTime = currentTime;
  //         let timeElapsed = currentTime - startTime;
  //         let run = ease(timeElapsed, start, distance, duration);
  //         window.scrollTo(0, run);
  //         if (timeElapsed < duration) requestAnimationFrame(animation);
  //       }
  
  //       function ease(t, b, c, d) {
  //         t /= d / 2;
  //         if (t < 1) return c / 2 * t * t + b;
  //         t--;
  //         return -c / 2 * (t * (t - 2) - 1) + b;
  //       }
  
  //       requestAnimationFrame(animation);
  
  //     }, 300); 
  //   }
  
  //   setShowMore(!showMore); 
  // };
  

  
  return (
    <div className="services-section section" id="services">
      <h2>Υπηρεσίες</h2>
      <div className={`services-grid ${showMore || !isMobile ? 'show-all' : ''}`}>
        {services.slice(0, showMore || !isMobile ? services.length : 3).map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link to={service.link} className="learn-more-btn">
              Μάθετε Περισσότερα
            </Link>
          </div>
        ))}
      </div>
      {/* Show the button only on mobile */}
      {isMobile && (
        <button className="see-more-btn" onClick={toggleExpand} ref={servicesRef}>
          {showMore ? 'Δείτε Λιγότερα  ' : 'Δείτε Περισσότερα  '}
          <i className={`fas fa-chevron-${showMore ? 'up' : 'down'} arrow-icon`}></i>
        </button>
      )}
      <div className="therapy-finder">
        <a href="/quiz" className="therapy-link">Βρείτε την Κατάλληλη Θεραπεία για Εσάς</a>
      </div>
    </div>
  );
};

export default ServicesList;
