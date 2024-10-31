import React, { useState } from 'react';
import '../styles/quiz.css';

  const serviceLinks = {
    "Ατομική Θεραπεία": "/individual-therapy",
    "Ομαδική Θεραπεία": "/group-therapy",
    "Online Συνεδρίες": "/online-therapy",
    "Κατ'οίκον Συνεδρίες": "/home-therapy",
    "Θεραπεία Ζεύγους/Οικογενειακή Θεραπεία": "/family-therapy",
    "Ψυχολογικές Αξιολογήσεις": "/test-therapy",
    "Ψυχολογική Υποστήριξη για Ηλικιωμένους": "/old-therapy",
    "Παιδοψυχολογία και Θεραπεία Παιδιών/Εφήβων": "/child-therapy"
  };
  
const Quiz = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: ''
  });
  const [result, setResult] = useState('');


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = () => {
    const countAnswers = {
      "Ατομική Θεραπεία": 0,
      "Ομαδική Θεραπεία": 0,
      "Online Συνεδρίες": 0,
      "Κατ'οίκον Συνεδρίες": 0,
      "Θεραπεία Ζεύγους/Οικογενειακή Θεραπεία": 0,
      "Ψυχολογικές Αξιολογήσεις": 0,
      "Ψυχολογική Υποστήριξη για Ηλικιωμένους": 0,
      "Παιδοψυχολογία και Θεραπεία Παιδιών/Εφήβων": 0
    };

    const settingPreferences = {
      "Κατ'οίκον": 0,
      "Online": 0
    };

    // Καταμέτρηση των απαντήσεων
    Object.values(answers).forEach(value => {
      if (countAnswers[value] !== undefined) {
        countAnswers[value]++;
      }

      if (value === "Κατ'οίκον Συνεδρίες") {
        settingPreferences["Κατ'οίκον"]++;
      } else if (value === "Online Συνεδρίες") {
        settingPreferences["Online"]++;
      }
    });

    // Προτίμηση περιβάλλοντος
    const preferredSetting = settingPreferences["Κατ'οίκον"] > settingPreferences["Online"]
      ? "Κατ'οίκον Συνεδρίες"
      : "Online Συνεδρίες";

    // Αφαίρεση περιβάλλοντος από τις επιλογές
    delete countAnswers["Κατ'οίκον Συνεδρίες"];
    delete countAnswers["Online Συνεδρίες"];

    const maxScore = Math.max(...Object.values(countAnswers));
    const recommendedTherapies = Object.keys(countAnswers).filter(service => countAnswers[service] === maxScore);

    const settingLink = serviceLinks[preferredSetting];
    const therapyLinks = recommendedTherapies
      .map(service => `<a href="${serviceLinks[service]}" target="_blank">${service}</a>`)
      .join(', ');

    setResult(
      `<h2>Η Κατάλληλη Υπηρεσία για Εσάς:</h2> 
      <p>Προτεινόμενες Μορφές Θεραπείας: ${therapyLinks}</p>`
    );
  };

  return (
    <section className="quiz-section">
      <h1>Βρείτε την Κατάλληλη Υπηρεσία</h1>
      <form id="quizForm">
        {/* Question 1 */}
        <div className="quiz-question">
          <h3>1. Ποιο είναι το κύριο πρόβλημα ή ανησυχία σας;</h3>
          <label><input type="radio" name="question1" value="Ατομική Θεραπεία" onChange={handleInputChange} /> Αντιμετωπίζω άγχος, κατάθλιψη ή άλλα προσωπικά προβλήματα.</label>
          <label><input type="radio" name="question1" value="Ομαδική Θεραπεία" onChange={handleInputChange} /> Νιώθω μοναξιά και θέλω να μοιραστώ τις εμπειρίες μου με άλλους.</label>
          <label><input type="radio" name="question1" value="Online Συνεδρίες" onChange={handleInputChange} /> Θέλω τη δυνατότητα συνεδριών από το σπίτι μου.</label>
          <label><input type="radio" name="question1" value="Κατ'οίκον Συνεδρίες" onChange={handleInputChange} /> Έχω κινητικά προβλήματα ή προτιμώ συνεδρίες στο σπίτι μου.</label>
          <label><input type="radio" name="question1" value="Θεραπεία Ζεύγους/Οικογενειακή Θεραπεία" onChange={handleInputChange} /> Αντιμετωπίζω προβλήματα στις σχέσεις μου ή με την οικογένειά μου.</label>
          <label><input type="radio" name="question1" value="Ψυχολογικές Αξιολογήσεις" onChange={handleInputChange} /> Χρειάζομαι αξιολόγηση νοημοσύνης ή άλλες ψυχολογικές αξιολογήσεις.</label>
          <label><input type="radio" name="question1" value="Ψυχολογική Υποστήριξη για Ηλικιωμένους" onChange={handleInputChange} /> Χρειάζομαι υποστήριξη για ηλικιωμένο άτομο ή φροντιστή.</label>
          <label><input type="radio" name="question1" value="Παιδοψυχολογία και Θεραπεία Παιδιών/Εφήβων" onChange={handleInputChange} /> Χρειάζομαι υποστήριξη για παιδί ή έφηβο που αντιμετωπίζει δυσκολίες.</label>
        </div>

        {/* Question 2 */}
        <div className="quiz-question">
          <h3>2. Σε ποιο περιβάλλον νιώθετε πιο άνετα;</h3>
          <label><input type="radio" name="question2" value="Ατομική Θεραπεία" onChange={handleInputChange} /> Πρόσωπο με πρόσωπο με τον θεραπευτή.</label>
          <label><input type="radio" name="question2" value="Ομαδική Θεραπεία" onChange={handleInputChange} /> Σε ομαδικό περιβάλλον με άλλους που αντιμετωπίζουν παρόμοια προβλήματα.</label>
          <label><input type="radio" name="question2" value="Online Συνεδρίες" onChange={handleInputChange} /> Online, λόγω άνεσης ή τοποθεσίας.</label>
          <label><input type="radio" name="question2" value="Κατ'οίκον Συνεδρίες" onChange={handleInputChange} /> Στο σπίτι μου, όπου αισθάνομαι πιο άνετα και ασφαλής.</label>
          <label><input type="radio" name="question2" value="Θεραπεία Ζεύγους/Οικογενειακή Θεραπεία" onChange={handleInputChange} /> Σε συνεδρίες που περιλαμβάνουν τον σύντροφο ή μέλη της οικογένειας.</label>
        </div>

        {/* Question 3 */}
        <div className="quiz-question">
          <h3>3. Πώς προτιμάτε να αλληλεπιδράτε με τον θεραπευτή;</h3>
          <label><input type="radio" name="question3" value="Ατομική Θεραπεία" onChange={handleInputChange} /> Άμεσα, με εξατομικευμένη εστίαση στις ανάγκες μου.</label>
          <label><input type="radio" name="question3" value="Ομαδική Θεραπεία" onChange={handleInputChange} /> Αλληλεπιδρώντας με άλλους για να αποκτήσω προοπτική και υποστήριξη.</label>
          <label><input type="radio" name="question3" value="Online Συνεδρίες" onChange={handleInputChange} /> Προτιμώ ελάχιστη μετακίνηση και ευελιξία στα ραντεβού.</label>
          <label><input type="radio" name="question3" value="Κατ'οίκον Συνεδρίες" onChange={handleInputChange} /> Προτιμώ τη θεραπεία να έρχεται σε εμένα.</label>
          <label><input type="radio" name="question3" value="Θεραπεία Ζεύγους/Οικογενειακή Θεραπεία" onChange={handleInputChange} /> Κοινές συνεδρίες με εστίαση στην οικογένεια.</label>
        </div>
        {/* Question 4 */}
        <div className="quiz-question">
          <h3>4. Ζητάτε θεραπεία για τον εαυτό σας ή για κάποιον άλλον;</h3>
          <label><input type="radio" name="question4" value="Ατομική Θεραπεία" onChange={handleInputChange} /> Για εμένα ως ενήλικα.</label>
          <label><input type="radio" name="question4" value="Θεραπεία Ζεύγους/Οικογενειακή Θεραπεία" onChange={handleInputChange} /> Για τον σύντροφό μου ή την οικογένειά μου.</label>
          <label><input type="radio" name="question4" value="Ψυχολογική Υποστήριξη για Ηλικιωμένους" onChange={handleInputChange} /> Για τον ηλικιωμένο γονέα ή συγγενή μου.</label>
          <label><input type="radio" name="question4" value="Παιδοψυχολογία και Θεραπεία Παιδιών/Εφήβων" onChange={handleInputChange} /> Για το παιδί ή τον έφηβό μου.</label>
          <label><input type="radio" name="question4" value="Ψυχολογικές Αξιολογήσεις" onChange={handleInputChange} /> Για αξιολογήσεις γνωστικών ή ψυχολογικών ικανοτήτων.</label>
        </div>

        {/* Question 5 */}
        <div className="quiz-question">
          <h3>5. Ποιο αποτέλεσμα ελπίζετε να επιτύχετε;</h3>
          <label><input type="radio" name="question5" value="Ατομική Θεραπεία" onChange={handleInputChange} /> Βελτιωμένη ψυχική υγεία και στρατηγικές αντιμετώπισης.</label>
          <label><input type="radio" name="question5" value="Ομαδική Θεραπεία" onChange={handleInputChange} /> Αίσθηση κοινότητας και κοινής εμπειρίας.</label>
          <label><input type="radio" name="question5" value="Online Συνεδρίες" onChange={handleInputChange} /> Ευελιξία στην πρόσβαση στη θεραπεία.</label>
          <label><input type="radio" name="question5" value="Κατ'οίκον Συνεδρίες" onChange={handleInputChange} /> Εξατομικευμένη φροντίδα σε άνετο περιβάλλον.</label>
          <label><input type="radio" name="question5" value="Θεραπεία Ζεύγους/Οικογενειακή Θεραπεία" onChange={handleInputChange} /> Καλύτερη επικοινωνία και αρμονία στην οικογένειά μου.</label>
          <label><input type="radio" name="question5" value="Ψυχολογικές Αξιολογήσεις" onChange={handleInputChange} /> Κατανόηση των γνωστικών ή συναισθηματικών δυνατοτήτων και περιοχών για ανάπτυξη.</label>
        </div>

        <button type="button" id="submitQuiz" onClick={handleSubmit}>Δείτε την Κατάλληλη Υπηρεσία</button>
      </form>

      {/* Αποτέλεσμα */}
      <div id="quizResult" className="quiz-result" dangerouslySetInnerHTML={{ __html: result }}></div>
    </section>
  );
};

export default Quiz;
