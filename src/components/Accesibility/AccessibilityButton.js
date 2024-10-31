import React, { useState } from 'react';

const AccessibilityButton = () => {
  const [fontSize, setFontSize] = useState(16);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isUnderlineLinks, setIsUnderlineLinks] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2);
    document.body.style.fontSize = `${fontSize + 2}px`;
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize((prevSize) => prevSize - 2);
      document.body.style.fontSize = `${fontSize - 2}px`;
    }
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    
    if (!isHighContrast) {
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        if (el.tagName !== 'IMG' && el.id !== 'accessibility-btn') {
          el.style.backgroundColor = '#1a1a1a';
          el.style.color = '#ffffff';
          el.style.borderColor = '#ffffff';
        }
      });
      document.body.style.filter = 'contrast(1.2)';
    } else {
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        if (el.tagName !== 'IMG' && el.id !== 'accessibility-btn') {
          el.style.backgroundColor = '';
          el.style.color = '';
          el.style.borderColor = '';
        }
      });
      document.body.style.filter = '';
    }
  };

  const toggleUnderlineLinks = () => {
    setIsUnderlineLinks(!isUnderlineLinks);
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.style.textDecoration = isUnderlineLinks ? 'none' : 'underline';
    });
  };

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div>
      {/* Κουμπί για εμφάνιση του panel προσβασιμότητας */}
      <button id="accessibility-btn" onClick={togglePanel}>
        <i className="fas fa-universal-access"></i>
      </button>

      {/* Panel με τις επιλογές */}
      <div id="accessibility-panel" className={isPanelOpen ? 'active' : ''}>
        <button className="accessibility-option" onClick={increaseFontSize}>
          + Μεγέθυνση Γραμματοσειράς
        </button>
        <button className="accessibility-option" onClick={decreaseFontSize}>
          - Μείωση Γραμματοσειράς
        </button>
        {/* <button className="accessibility-option" onClick={toggleHighContrast}>
          Υψηλή Αντίθεση
        </button> */}
        <button className="accessibility-option" onClick={toggleUnderlineLinks}>
          Υπογράμμιση Συνδέσμων
        </button>
      </div>
    </div>
  );
};

export default AccessibilityButton;
