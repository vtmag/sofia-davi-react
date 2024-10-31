import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleNavigation from './ArticleNavigation';
import articlesData from '../data/articlesData';
import ArticleDepression from './ArticleDepression';
import ArticleAnxiety from './ArticleAnxiety';
import { Helmet } from 'react-helmet-async';
import metaData from '../data/metaData';

const componentMapping = {
  ArticleDepression,
  ArticleAnxiety,
};

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articlesData.find((a) => a.slug === slug);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Ψυχολογική Υποστήριξη Θεσσαλονίκη`;
    }
  }, [article]);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!article) {
    return <p>Article not found</p>;
  }

   // Fetch SEO metadata for the current article
   const meta = metaData[`article_${slug}`] || {
    title: 'Default Article Title',
    description: 'Default article description',
    keywords: 'article, mental health, psychology',
  };


  const ArticleComponent = componentMapping[article.component];
  return (
    <>
    {/* <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet> */}
    <div>

      

      
      {ArticleComponent ? <ArticleComponent /> : <p>Content not available</p>}
      <p className="publication-date">Published on: {article.date}</p>

      <div className="sources">
        <h3>Πηγές:</h3>
        <ul>
          {article.sources.map((source, index) => (
            <li key={index}>
              <a href={source.link} target="_blank" rel="noopener noreferrer">{source.title}</a>
            </li>
          ))}
        </ul>
      </div>

       {/* Include the ArticleNavigation component */}
       <ArticleNavigation currentSlug={slug} />
    </div>
    </>
  );
};

export default ArticlePage;
