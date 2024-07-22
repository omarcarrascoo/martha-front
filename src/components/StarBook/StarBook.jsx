'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './StarBook.module.css';

function StarBook() {
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch the data from the API
    fetch('https://ivanatovillaart.com/api/martha/books')
      .then(response => response.json())
      .then(data => {
        // Check if data is an array and has at least one item
        if (Array.isArray(data) && data.length > 0) {
          setBook(data[1]);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Render a loading state or a message if no book is found
  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.starBook}>
      <div className={styles.container}>
        <div className={styles.bookImgContainer}>
          <Image src={book.img || '/coverbook.jpg'} alt={book.title} width={300} height={450} />
          <p className={styles.bookTitle}>{book.title}</p>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.title}>{book.frase}</p>
          <p>{book.sinopsis}</p>
        </div>
      </div>
    </div>
  );
}

export default StarBook;
