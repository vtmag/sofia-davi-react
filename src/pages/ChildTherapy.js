import React from 'react';
import ServicePage from '../components/ServicePage';

const ChildTherapy = () => {
  return (
    <ServicePage
      title="Παιδοψυχολογία και Θεραπεία Παιδιών/Εφήβων"
      description="Η υπηρεσία παιδοψυχολογίας και θεραπείας παιδιών/εφήβων επικεντρώνεται στη συναισθηματική, κοινωνική και συμπεριφορική ανάπτυξη των νεαρών ατόμων. Οι συνεδρίες στοχεύουν στην αντιμετώπιση προβλημάτων όπως άγχος, κατάθλιψη, διαταραχές συμπεριφοράς, και δυσκολίες στη μάθηση, παρέχοντας υποστήριξη σε περιόδους αλλαγών και προκλήσεων, όπως το διαζύγιο των γονέων ή η απώλεια αγαπημένου προσώπου."
      benefits={[
        { title: "Ανάπτυξη Συναισθηματικής Ευημερίας", description: "Η θεραπεία βοηθά τα παιδιά και τους εφήβους να αναγνωρίζουν και να διαχειρίζονται τα συναισθήματά τους, προάγοντας την ψυχική τους υγεία." },
        { title: "Βελτίωση Κοινωνικών Δεξιοτήτων", description: "Μέσω της θεραπευτικής διαδικασίας, τα παιδιά αναπτύσσουν δεξιότητες επικοινωνίας, ενσυναίσθησης και συνεργασίας, που είναι απαραίτητες για τη θετική αλληλεπίδραση με τους συνομηλίκους τους." },
        { title: "Αντιμετώπιση Προκλήσεων Σχολικής Επίδοσης", description: "Η υποστήριξη παρέχει στους νέους στρατηγικές για τη διαχείριση του άγχους που σχετίζεται με το σχολείο και ενισχύει τις ικανότητες μάθησης και συγκέντρωσης." },
        { title: "Ενίσχυση Αυτοπεποίθησης και Αυτοεκτίμησης", description: "Η θεραπεία συμβάλλει στην ενίσχυση της αυτοεικόνας των παιδιών, βοηθώντας τα να αντιμετωπίζουν προκλήσεις με μεγαλύτερη αυτοπεποίθηση." },
        { title: "Ασφάλεια και Υποστήριξη σε Δύσκολες Καταστάσεις", description: "Παρέχει έναν ασφαλή χώρο για την αντιμετώπιση τραυματικών εμπειριών, όπως το διαζύγιο των γονέων ή άλλες σημαντικές αλλαγές στη ζωή τους." }
      ]}
      targetGroup="Η υπηρεσία απευθύνεται σε παιδιά και εφήβους που αντιμετωπίζουν ψυχολογικές προκλήσεις, συναισθηματικές δυσκολίες, ή προβλήματα συμπεριφοράς. Είναι επίσης κατάλληλη για οικογένειες που επιθυμούν να υποστηρίξουν τα παιδιά τους κατά τη διάρκεια δύσκολων μεταβάσεων ή γεγονότων ζωής."
      sessionStructure="Οι συνεδρίες πραγματοποιούνται σε εβδομαδιαία βάση και διαρκούν περίπου 50 λεπτά. Χρησιμοποιούνται διάφορες θεραπευτικές προσεγγίσεις, όπως η γνωστική συμπεριφορική θεραπεία, η θεραπεία μέσω παιχνιδιού, και άλλες μέθοδοι προσαρμοσμένες στις ανάγκες κάθε παιδιού ή εφήβου."
      confidentiality="Όλες οι συνεδρίες διεξάγονται σε ένα ασφαλές και εχέμυθο περιβάλλον, εξασφαλίζοντας την ιδιωτικότητα του παιδιού και της οικογένειας."
      startInfo="Για να ξεκινήσετε με τη θεραπεία παιδιών/εφήβων, επικοινωνήστε για να προγραμματίσετε μια αρχική συνεδρία. Κατά τη διάρκεια αυτής της συνεδρίας, θα γίνει μια πρώτη εκτίμηση των αναγκών του παιδιού και θα συζητηθεί το κατάλληλο πλάνο θεραπείας για να υποστηριχθεί η ανάπτυξή του με τον καλύτερο δυνατό τρόπο."
      prevService={{ title: "Ατομική Θεραπεία", link: "/individual-therapy" }}
      nextService={{ title: "Ψυχολογική Υποστήριξη για Ηλικιωμένους", link: "/old-therapy" }}
    />
  );
};

export default ChildTherapy;