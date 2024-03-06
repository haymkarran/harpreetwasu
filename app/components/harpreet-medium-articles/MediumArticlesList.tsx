// pages/index.tsx
"use client"

import React, { useEffect, useState } from 'react';
import './api/medium'

interface Article {
  title: string[];
  link: string[];
  // Add more properties as needed based on the structure of your Medium RSS feed
}

const MediumArticlesList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/medium');
        const data = await response.json();
  
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.link[0]} target="_blank" rel="noopener noreferrer">
              {article.title[0]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediumArticlesList;
