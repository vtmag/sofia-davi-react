// src/components/ArticlesList.js
import { Link } from 'react-router-dom';
import articlesData from '../data/articlesData';
import '../styles/article.css';

const ArticlesList = () => {
  return (
    <div className="articles-list">
      <h2 id="hh1">Όλα τα άρθρα</h2>
      {articlesData.map((article) => (
        <div className="article-preview" key={article.slug}>
          <h2>{article.title}</h2> {/* Article title on top */}
          <div className="flex-container">
            <div className="article-text">
              <p>{article.excerpt}</p>
              <p>{article.date}</p>
              <Link to={`/article/${article.slug}`} className="read-more">
                Μάθετε Περισσότερα
              </Link>
            </div>
            <div className="article-image">
              <img src={`/images/${article.image}`} alt={article.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
