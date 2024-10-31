import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);

  // Διαχείριση αλλαγών στα πεδία
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Αποστολή email με χρήση EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Στοιχεία για αποστολή
    const serviceID = 'service_4lvvbg5';
    const templateID = 'template_up722rf';
    const publicKey = 'xkUMDag9VFsECCbtP';  // Χρησιμοποιείς το Public Key σου εδώ

    // Αποστολή email με χρήση EmailJS
    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSent(true); // Ενημέρωση ότι το email στάλθηκε
      }, (error) => {
        console.log('FAILED...', error);
      });

    // Καθαρισμός φόρμας μετά την αποστολή
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-section" id='contact'>
      <h2>Επικοινωνία</h2>

      {/* Εμφάνιση τηλεφώνου και email της ψυχολόγου */}
      <div className="contact-info">
        <p> <a href="tel:+30123456789">+30 690 691 2321</a></p>
        <p> <a href="mailto:sofiadavh@gmail.com">sofiadavh@gmail.com</a></p>
      </div>

      {/* Φόρμα επικοινωνίας */}
      {isSent ? <p>Το μήνυμά σας στάλθηκε επιτυχώς!</p> : null}
      <form onSubmit={handleSubmit} className='minimal-form'>
        <div>
          <label>Όνομα:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Τηλέφωνο:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Θέμα:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Μήνυμα:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Αποστολή</button>
      </form>
    </div>
  );
};


export default Contact;
