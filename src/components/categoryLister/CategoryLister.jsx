import React from 'react'
import styles from './categoryLister.module.css'
import Link from 'next/link'

function CategoryLister() {
  return (
    <div className={styles.categoryContainer}>
        <div className={styles.categoryCard}>
            <Link href={"/"}>Categoria1</Link>
        </div>
        <div className={styles.categoryCard}>
            <Link href={"/"}>Categoria1</Link>
        </div>
        <div className={styles.categoryCard}>
            <Link href={"/"}>Categoria1</Link>
        </div>
        <div className={styles.categoryCard}>
            <Link href={"/"}>Categoria1</Link>
        </div>
        <div className={styles.categoryCard}>
            <Link href={"/"}>Categoria1</Link>
        </div>
    </div>
  )
}

export default CategoryLister
