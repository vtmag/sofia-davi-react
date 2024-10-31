// src/data/articlesData.js

const articlesData = [
  {
    slug: 'katathlipsi-symptomata',
    title: 'Κατάθλιψη: Αναγνώριση, Αιτίες και Σύγχρονες Προσεγγίσεις Θεραπείας',
    component: 'ArticleDepression',
    excerpt: 'Μάθετε πώς να αναγνωρίσετε τα βασικά συμπτώματα της κατάθλιψης...',
    image: 'depression.jpg', // Ονοματοδοσία εικόνας
    date: '25-10-2024',
    sources: [
      { title: 'World Health Organization: Depression', link: 'https://www.who.int/mental_health/management/depression/en/' },
      { title: 'National Institute of Mental Health: Depression Overview', link: 'https://www.nimh.nih.gov/health/topics/depression' },
      { title: 'American Psychiatric Association: Understanding Depression', link: 'https://www.psychiatry.org/patients-families/depression/what-is-depression' },
      { title: 'Mayo Clinic: Symptoms and Causes of Depression', link: 'https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007' },
    ]
  },
  {
    slug: 'angchos-antimetopisi',
    title: 'Πώς η Άγχος Επηρεάζει την Υγεία σας και Πώς να το Αντιμετωπίσετε',
    component: 'ArticleAnxiety',
    excerpt: 'Το άγχος, όταν παραμένει σε υψηλά επίπεδα για μεγάλα χρονικά διαστήματα, μπορεί να έχει σοβαρές επιπτώσεις στην υγεία σας...',
    image: 'anxiety.jpg',
    date: '18-09-2024',
    sources:  [
      { title: 'American Psychological Association - Effects of Anxiety', link: 'https://www.apa.org/topics/anxiety' },
      { title: 'Harvard Health - Managing Anxiety', link: 'https://www.health.harvard.edu/mind-and-mood/anxiety_and_physical_illness' },
      { title: 'Anxiety & Depression Association of America - Coping Strategies', link: 'https://adaa.org/tips' }
    ]
  }
];

export default articlesData;
