import React, { useState, useEffect } from 'react';
import './styles/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Biography from './components/Biography/Biography'
import FAQ from './components/Faq/FAQ'
import Contact from './components/Contact/Contact';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import BackToTopButton from './components/BackToTop';
import CookiesPolicy from './components/CookiesPolicy';
import Quiz from './components/Quiz';
// import ServicesList from './components/ServicesList';
import IndividualTherapy from './pages/IndividualTherapy';
import OnlineTherapy from './pages/OnlineTherapy';
import GroupTherapy from './pages/GroupTherapy';
import HomeTherapy from './pages/HomeTherapy';
import FamilyTherapy  from './pages/FamilyTherapy'
import TestTherapy from './pages/TestTherapy';
import OldTherapy from './pages/OldTherapy';
import ChildTherapy from './pages/ChildTherapy';
import AccessibilityButton from './components/Accesibility/AccessibilityButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import ServicesList from './components/ServiceList';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BurgerMenu from './components/BurgerMenu';
import ServicePage from './components/ServicePage';
import CookieConsent from './components/CookieConsent';
import ArticlePage from './components/ArticlePage';
import ArticlesList from './components/ArticlesList';
import ArticleAnxiety from './components/ArticleAnxiety';
import ArticleDepression from './components/ArticleDepression';
// import GroupTherapy from './pages/GroupTherapy';
// import FamilyTherapy from './pages/FamilyTherapy';
// import OnlineTherapy from './pages/OnlineTherapy';
// import TestTherapy from './pages/TestTherapy';
// import HomeTherapy from './pages/HomeTherapy';
// import BackToTopButton from './components/BackToTopButton';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <BurgerMenu />

        <Routes>
          {/* Αρχική σελίδα */}
          <Route 
            path="/" 
            element={
              <>
                <About />
                <ServicesList />
                <Biography />
                <FAQ />
                <Contact />
                <Booking />
              </>
            } 
          />

          {/* Σελίδες για τις υπηρεσίες */}
          <Route path="/individual-therapy" element={<IndividualTherapy />} />
          <Route path="/group-therapy" element={<GroupTherapy />} />
          <Route path="/online-therapy" element={<OnlineTherapy />} />
          <Route path="/home-therapy" element={<HomeTherapy />} />
          <Route path="/family-therapy" element={<FamilyTherapy />} />
          <Route path="/test-therapy" element={<TestTherapy />} />
          <Route path="/old-therapy" element={<OldTherapy />} />
          <Route path="/child-therapy" element={<ChildTherapy />} />

          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/quiz" element={<Quiz />} />
          
          {/* Προσθέστε εδώ τις υπόλοιπες υπηρεσίες */}
        </Routes>
        <CookieConsent />
        <BackToTopButton />
        <AccessibilityButton />
        {/* <h2>Instagram Reels</h2>
        <div class="instagram-grid">
          
          <iframe src="https://www.instagram.com/p/C-muaH2J0HJ/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
          <iframe src="https://www.instagram.com/p/DBYuYwFsv9g/embed" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
          <iframe src="https://www.instagram.com/p/C9ukpmRIE68/embed" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
          <iframe src="https://www.instagram.com/p/C-XslYbojGf/embed" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
        </div> */}

<Routes>
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
      </Routes>

        <Footer />

      
      </div>
    </Router>
  );
}

export default App;
