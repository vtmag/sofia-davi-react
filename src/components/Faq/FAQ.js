import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqItems = [
    { question: "Τι είναι η Ψυχοθεραπεία;", answer: "Η ψυχοθεραπεία είναι μια διαδικασία θεραπευτικών συνεδριών με ψυχολόγο ή ψυχοθεραπευτή, όπου ο πελάτης επεξεργάζεται συναισθηματικά και ψυχολογικά θέματα. Στόχος είναι η ανακούφιση από άγχος, κατάθλιψη και άλλα ψυχικά προβλήματα, καθώς και η προσωπική ανάπτυξη και βελτίωση της ψυχικής ευεξίας." },
    { question: "Τι είναι η Συστημική Ψυχοθεραπεία;", answer: "Η συστημική ψυχοθεραπεία εστιάζει στις σχέσεις και στο πώς τα άτομα αλληλεπιδρούν μέσα σε οικογενειακά και κοινωνικά συστήματα. Δεν επικεντρώνεται μόνο στο άτομο, αλλά και στις οικογενειακές και διαπροσωπικές σχέσεις, βοηθώντας τα άτομα να κατανοήσουν τους ρόλους τους και να βρουν τρόπους για πιο υγιείς και ισορροπημένες αλληλεπιδράσεις." },
    { question: "Τι είναι η Κλινική Ψυχολογία;", answer: "Η κλινική ψυχολογία αφορά την επιστημονική μελέτη, διάγνωση και θεραπεία σοβαρότερων ψυχολογικών και ψυχιατρικών προβλημάτων. Οι κλινικοί ψυχολόγοι συνδυάζουν την κλινική πρακτική με τη χρήση ερευνητικών μεθόδων και παρέχουν αξιολόγηση και θεραπεία σε άτομα με προβλήματα όπως η κατάθλιψη, η διπολική διαταραχή, και η σχιζοφρένεια." },
    { question: "Πώς θα καταλάβω ότι χρειάζομαι κάποια από αυτές τις υπηρεσίες;", answer: "Εάν αισθάνεστε ότι οι καθημερινές δυσκολίες ή συναισθηματικά προβλήματα επηρεάζουν την ποιότητα της ζωής σας, ίσως είναι χρήσιμο να συζητήσετε με έναν ψυχολόγο. Ένας ψυχολόγος μπορεί να σας καθοδηγήσει σχετικά με την καλύτερη μορφή θεραπείας, είτε πρόκειται για ψυχοθεραπεία, είτε για συστημική ή κλινική υποστήριξη. Εάν βιώνετε σοβαρά ή χρόνια συμπτώματα όπως κατάθλιψη ή έντονο άγχος, η κλινική ψυχολογία μπορεί να είναι η πιο κατάλληλη προσέγγιση." },

    { question: "Πόσο διαρκεί μια συνεδρία;", answer: "Η τυπική διάρκεια μιας ατομικής συνεδρίας είναι 50 λεπτά, αλλά μπορεί να διαφέρει ανάλογα με τις ανάγκες του πελάτη." },
    { question: "Τι πρέπει να περιμένω στην πρώτη μου συνεδρία;", answer: "Η πρώτη συνεδρία επικεντρώνεται στην κατανόηση των αναγκών σας και στη δημιουργία ενός πλάνου θεραπείας που θα ανταποκρίνεται στους στόχους σας." },
    { question: "Πώς μπορώ να κλείσω ραντεβού;", answer: <>Μπορείτε <a href="#contact">τηλεφωνικά</a> ή μπορείτε να <a href="#booking">κλείσετε το ραντεβού σας online</a>. </> },
    { question: "Ποια είναι η πολιτική ακύρωσης;", answer: "Αν χρειαστεί να ακυρώσετε το ραντεβού σας, παρακαλώ να το κάνετε τουλάχιστον 24 ώρες πριν." },
    { question: "Με ποια εφαρμογή γίνονται οι online συνεδρίες;", answer: <>
      Οι συνεδρίες γίνονται μέσω Zoom, Skype, Viber ή οποιαδήποτε άλλη πλατφόρμα κατόπιν συνεννόησης. <br />
      <a href="https://zoom.us/download?os=win" target="_blank" rel="noopener noreferrer">Οδηγός εγκατάστασης Zoom</a><br />
      <a href="https://www.skype.com/en/get-skype/" target="_blank" rel="noopener noreferrer">Οδηγός εγκατάστασης Skype</a><br />
      <a href="https://www.viber.com/en/download/" target="_blank" rel="noopener noreferrer">Οδηγός εγκατάστασης Viber</a>
    </> },
    { question: "Πώς μπορώ να πληρώσω για τις συνεδρίες;", answer: <>Δέχομαι πληρωμές μέσω τραπεζικής κατάθεσης, IRIS και μετρητών.
                                                                      <br/>ΘΕΣΗ ΛΟΓΑΡΙΑΣΜΟΥ
                                                                      <br/><img src="./test-iris.jpg" alt="My Logo" />
                                                                      <br/>Σκανάρετε για πληρωμή με IRIS
                                                                      </> },
    { question: "Πως μπορώ να καταλάβω ποια υπηρεσία πρέπει να διαλέξω;", answer: <>Για να βρείτε ποια υπηρεσία σας ταιριάζει, μπορείτε να κάνετε το quiz μας, το οποίο θα σας καθοδηγήσει στην κατάλληλη επιλογή βάσει των αναγκών και προτιμήσεών σας. Ξεκινήστε το quiz <Link to="/quiz">εδώ</Link> για να λάβετε άμεσα προτάσεις!</> },
    { question: "Οι δια ζώσης συνεδρίες που πραγματοποιούνται;", answer: "Οι δια ζώσης συνεδρίες πραγματοποιούνται μόνο κατ'οίκον μετά απο συνεννόηση." },
    
    
    // Add more FAQ items
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const faqRef = useRef(null);
  const seeMoreBtnRef = useRef(null); // Ref for the "See More" button position

  // Detect screen size to adjust "See More" functionality
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  const toggleExpand = () => {
    if (showMore && seeMoreBtnRef.current) {
      // Μόνο όταν κλείνει, επιστρέφει στο κουμπί με λίγο πιο πάνω offset
      setTimeout(() => {
        const offset = -600; // Πόσο πιο πάνω θέλεις να μετακινηθεί
        const elementPosition = seeMoreBtnRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 100); // Μικρή καθυστέρηση για να ολοκληρωθεί το animation
    }

    setShowMore(!showMore); // Εναλλαγή εμφάνισης
  };

  return (
    <section id="faq" className="faq-section" ref={faqRef}>
      <h2>Συχνές Ερωτήσεις (FAQ)</h2>
      {faqItems.slice(0, showMore || !isMobile ? faqItems.length : 4).map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <h3>{index + 1}. {item.question}</h3>
          <p style={{ maxHeight: activeIndex === index ? '200px' : '0' }}>
            {item.answer}
          </p>
        </div>
      ))}
      {isMobile && (
        <button
          className="see-more-btn"
          onClick={toggleExpand}
          ref={seeMoreBtnRef} // Reference for the button
        >
          {showMore ? 'Δείτε Λιγότερα  ' : 'Δείτε Περισσότερα  '}
          <i className={`fas fa-chevron-${showMore ? 'up' : 'down'} arrow-icon`}></i>
        </button>
      )}
    </section>
  );
};

export default FAQ;