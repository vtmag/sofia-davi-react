import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Χρησιμοποιούμε το Link από react-router-dom
import { useNavigate, useLocation } from 'react-router-dom'; // Χρήση useNavigate και useLocation
import { scroller } from 'react-scroll';
import Helmet from 'react-helmet';
import metadata from '../data/metaData';

// Ορισμός σταθερών για duration και offset
const DURATION = 100; // σε milliseconds, για τη διάρκεια του scroll
const OFFSET = -20; // σε pixels, για το offset από την κορυφή της σελίδας


const ServicePage = ({
  title,
  description,
  benefits,
  targetGroup,
  sessionStructure,
  confidentiality,
  startInfo,
  prevService,
  nextService,
}) => {


  

  

  useEffect(() => {
    // Set the document title dynamically
    document.title = `${title} | Ψυχολογική Υποστήριξη Θεσσαλονίκη | Σοφία Δαβή`;
  }, [title]);

  useEffect(() => {
    window.scrollTo(0, 0); // Μετακινεί στην κορυφή όταν φορτώνει η σελίδα
  }, []);
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
      }, 100); // Μικρή καθυστέρηση ώστε να φορτώσει η αρχική σελίδα
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
    <div className="service-page">
      <div className="service-header">
        <h1 id='h1'>{title}</h1>
        <p className='pi'>{description}</p>
      </div>
      <div className="benefits-container">
        <h2 id='h2'>Οφέλη της Υπηρεσίας</h2>
        <ul className='animated-list'>
          {benefits.map((benefit, index) => (
            <li key={index}>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </li>
          ))}
        </ul>
        <h2 id='h2'>Για Ποιον Είναι Κατάλληλη η Υπηρεσία</h2>
        <p>{targetGroup}</p>
        <h2 id='h2'>Δομή Συνεδριών</h2>
        <p>{sessionStructure}</p>
        <h2 id='h2'>Εμπιστευτικότητα</h2>
        <p>{confidentiality}</p>
        <h2 id='h2'>Πώς να Ξεκινήσετε</h2>
        <p>{startInfo}</p>
        <div className="call-to-action">
          <p>
            Μη διστάσετε να κάνετε το πρώτο βήμα προς μια πιο υγιή και ισορροπημένη ζωή.
            Κλείστε τώρα την πρώτη σας συνεδρία και ξεκινήστε το ταξίδι της αυτογνωσίας και προσωπικής ανάπτυξης.
          </p>
          {/* Χρησιμοποιούμε το Link για να πλοηγηθεί σωστά στην αρχική σελίδα στο #booking */}
          <a className='cta-button' onClick={() => handleNavigateAndScroll('booking')}>Κλείστε Ραντεβού</a>
        </div>
      </div>
      <div className="service-navigation">
        {prevService && (
          <a className="prev-service" href={prevService.link}>
            {`⟵ ${prevService.title}`}
          </a>
        )}
        {nextService && (
          <a className="next-service" href={nextService.link}>
            {`${nextService.title} ⟶`}
          </a>
        )}
      </div>
    </div>
  );
};

export default ServicePage;
