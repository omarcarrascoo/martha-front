'use client'

import React, { useState } from 'react';
import styles from './shortReads.module.css';
import MainHeader from '@/components/MainHeader/MainHeader';
import MainFooter from '@/components/MainFooter/MainFooter';
import CategoryLister from '@/components/categoryLister/CategoryLister';
import ArticleLister from '@/components/ArticleLister/ArticleLister';
import ArticleListerHome from '@/components/ArticleLister/ArticleListerHome';

function Page() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <MainHeader />
      <main>
        <div className={styles.shortReads}>
          <div className={styles.container}>
            <h1 className={styles.heading}>Short Reads</h1>
            <p>
              Dive into a rich collection of short reads and articles that showcase Martha's unique voice and storytelling prowess. Each piece is a window into her vibrant mind, offering readers a glimpse of her profound insights and literary artistry. Whether you're seeking thought-provoking essays or immersive narratives, Martha's work promises to enchant and inspire. Explore, reflect, and lose yourself in the literary brilliance of Martha Batiz.
            </p>
            <CategoryLister onCategorySelect={handleCategorySelect} />
            <br />
            <br />
            <ArticleListerHome selectedCategory={selectedCategory} />
          </div>
        </div>
      </main>
      <MainFooter />
    </>
  );
}

export default Page;
