'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleCard from '../ArticleCard/ArticleCard';
import styles from './ArticleLister.module.css';

function ArticleLister({ selectedCategory, count }) {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://ivanatovillaart.com/api/martha/articles';
    
    axios
      .get(apiUrl)
      .then((response) => {
        if (count>0) {
          let limitArray = response.data.slice(0,count)
          setArticles(limitArray)
        }else(
          setArticles(response.data)
        )
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });

  }, []);

  useEffect(() => {
    if (!selectedCategory || selectedCategory === "all") {
      // If "All Categories" is selected or no category is selected, show all articles
      setFilteredArticles(articles);
    } else {
      // Otherwise, filter by the selected category
      setFilteredArticles(articles.filter(article => article.category === selectedCategory));
    }
  }, [articles, selectedCategory]);

  return (
    <div className={styles.container}>
      {filteredArticles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticleLister;