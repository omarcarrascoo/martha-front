import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './categoryLister.module.css';
import Link from 'next/link';

function CategoryLister({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('https://ivanatovillaart.com/api/martha/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the categories!', error);
      });
  }, []);

  return (
    <div className={styles.categoryContainer}>
      <div
          className={styles.categoryCard}
          onClick={() => onCategorySelect("all")}
        >
          <p>All</p>
        </div>
      {categories.map((category) => (
        <div
          key={category.id}
          className={styles.categoryCard}
          onClick={() => onCategorySelect(category.title)}
        >
          <p>{category.title}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryLister;
