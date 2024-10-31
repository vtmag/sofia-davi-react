import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer); // Clean up the timer
  }, []);

  // Format date and time to Greek format
  const formatDateTime = (date) => {
    const days = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];
    const months = [
      'Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου',
      'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'
    ];
    
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const isPM = hours >= 12;

    // Convert to 12-hour format
    hours = hours % 12 || 12;
    
    // Set AM/PM in Greek
    const amPm = isPM ? 'ΜΜ' : 'ΠΜ';
    
    const time = `${hours}:${minutes}:${seconds} ${amPm}`;

    return `${dayName}, ${day} ${month} ${year} - ${time}`;
  };

  return (
    <div className="clock">
      {formatDateTime(dateTime)}
    </div>
  );
};

export default Clock;
