// src/components/ArticleNavigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import articlesData from '../data/articlesData';

const ArticleNavigation = ({ currentSlug }) => {
  const currentIndex = articlesData.findIndex(article => article.slug === currentSlug);
  
  const previousArticle = currentIndex > 0 ? articlesData[currentIndex - 1] : null;
  const nextArticle = currentIndex < articlesData.length - 1 ? articlesData[currentIndex + 1] : null;

  return (
    <div className="article-navigation">
      {previousArticle ? (
        <Link to={`/article/${previousArticle.slug}`} className="nav-button prev">
          ← {previousArticle.title}
        </Link>
      ) : (
        <div className="nav-placeholder"></div> // Placeholder div for alignment
      )}
      {nextArticle ? (
        <Link to={`/article/${nextArticle.slug}`} className="nav-button next">
          {nextArticle.title} →
        </Link>
      ) : (
        <div className="nav-placeholder"></div> // Placeholder div for alignment
      )}
    </div>
  );
};

export default ArticleNavigation;
