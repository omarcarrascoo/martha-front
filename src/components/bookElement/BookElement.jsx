'use client'
import React from 'react';
import styles from './BookElement.module.css';
import Image from 'next/image';
import Link from 'next/link';

function BookElement({ book, number }) {
  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container2}>
      <div className={styles.bookImg}>
        <Image src={book.img} alt={book.title} width={400} height={500} />
      </div>
      <div className={styles.textContainer}>
        <h2>{book.title}</h2>
        <p>{book.year}</p>
        <p>{book.frase}</p>
        <p>{book.sinopsis}</p>
        <button><Link className={styles.linkbook} href={book.link}>Get the book</Link></button>
        
      </div>
    </div>
  );
}

export default BookElement;
