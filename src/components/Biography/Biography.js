import React from 'react';

const Biography = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
   
  };

  return (

    <>
    <section id="biography" className="biography">
     <div className="container">
            <div className="bio-content">
                <div className="text-content">
                    <h2>Ψυχολόγος - Ψυχοθεραπεύτρια</h2>
                    <h3>MSc Κλινική Ψυχική Υγεία, ΑΠΘ</h3>
                    
                    <p>Γεννήθηκα και μεγάλωσα στη Θεσσαλονίκη, όπου και αποφοίτησα από το Τμήμα Ψυχολογίας του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης το 2021. Η διπλωματική μου εργασία,
                         εστίαζε στις διαφορές φύλου στις αναμνήσεις αναλαμπής από την πανδημία COVID-19 στην Ελλάδα.</p>

                         <p>Μετά την ολοκλήρωση των βασικών μου σπουδών, συνέχισα τις ακαδημαϊκές μου αναζητήσεις με μεταπτυχιακές σπουδές στην Κλινική Ψυχική Υγεία στο Τμήμα Ιατρικής του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης. Το μεταπτυχιακό πρόγραμμα 
                            μου επέτρεψε να αποκτήσω βαθιά γνώση στην αξιολόγηση, διάγνωση και θεραπεία ψυχικών διαταραχών, 
                            με έμφαση στην εφαρμογή ψυχοθεραπευτικών μεθόδων σε κλινικό περιβάλλον.</p>

                    <p>Έχω ειδικευτεί στη χρήση ψυχομετρικών τεστ νοημοσύνης όπως τα WISC-V (Αξιολόγηση για Παιδιά και Εφήβους),
                          WPPSI-III GR (Αξιολόγηση για Παιδιά Προσχολικής Ηλικίας) και WAIS-IV GR (Αξιολόγηση για Ενηλίκους), ενώ βρίσκομαι σε διαδικασία τετραετούς εκπαίδευσης στη Συστημική Μελέτη και Θεραπεία στο <a id='a' href='https://kesmeth.com/' target="_blank">Κέντρο Συστημικής Μελέτης και Θεραπείας Θεσσαλονίκης</a>.</p>

                    <p>Στο πλαίσιο της επαγγελματικής μου πορείας, εργάζομαι στην μοναδα φροντίδας ηλικιωμένων <a id='a' href='https://protipagirokomia.gr/' target="_blank">ΠΡΟΤΥΠΑ ΓΗΡΟΚΟΜΕΙΑ ΠΑΝΟΡΑΜΑ</a>.
                         Ξεκίνησα την επαγγελματική μου σταδιοδρομία ως εθελόντρια ψυχολόγος στην <a id='a' href='https://www.alzheimer-hellas.gr/index.php/el/' target="_blank">Ελληνική Εταιρεία Νόσου Alzheimer και Συγγενών Διαταραχών</a>.
                         </p>
                         <div className="download-cv">
                            <button className="download-button" onClick={downloadCV()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
                                </svg>
                                Κατεβάστε το CV
                            </button>
                        </div>
                        
                </div>
                <div className="image-content"><p>Η συμμετοχή μου σε σεμινάρια και ημερίδες, όπως το <a id='a' href='https://elpse.com/wp-content/uploads/2023/09/17o-Perilhpsh.pdf' target="_blank">17ο Πανελλήνιο Συνέδριο Ψυχολογικής Έρευνας</a>, με έχει βοηθήσει να ενισχύσω τις γνώσεις μου 
                        και να παραμένω ενημερωμένη για τις νέες εξελίξεις στον τομέα της ψυχολογίας. Είμαι πιστοποιημένη στη χρήση τεστ νοημοσύνης και διαθέτω άδεια ασκήσεως επαγγέλματος ψυχολόγου. 
                        Επιπλέον, μιλώ άπταιστα Αγγλικά και έχω πτυχίο Cambridge Proficiency C2.</p>
                    <img src="/profile.jpg" alt="Φωτογραφία Ψυχολόγου"/>
                </div>
            </div>
        </div>

   
</section>
</>
  );
  
};

export default Biography;
