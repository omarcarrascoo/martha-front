import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'
import styles from "./ArticleLister.module.css"
function ArticleLister() {
  return (
    <div className={styles.container}>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
    </div>
  )
}

export default ArticleLister
