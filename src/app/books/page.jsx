'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './books.module.css';
import Image from 'next/image';
import MainHeader from '@/components/MainHeader/MainHeader';
import BookElement from '@/components/bookElement/BookElement';
import MainFooter from '@/components/MainFooter/MainFooter';

function Books() {
  const [books, setBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get('https://ivanatovillaart.com/api/martha/books')
      .then(response => {
        setBooks(response.data.reverse());
      })
      .catch(error => {
        console.error('Error fetching books data:', error);
      });
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : books.length - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < books.length - 1 ? prevIndex + 1 : 0));
  };
  console.log(books);
  return (
    <>
      <MainHeader />
      <main>
        <div className={styles.Books}>
          <div className={styles.container}>
            <div className={styles.row} onClick={handlePrevClick}>
              <Image src={"/rowl.png"} width={30} height={50} alt="Previous" />
            </div>
            {books.length > 0 ? (
              <BookElement number={currentIndex} book={books[currentIndex]} />
            ) : (
              <div>Loading...</div>
            )}
            <div className={styles.row} onClick={handleNextClick}>
              <Image src={"/rowr.png"} width={30} height={50} alt="Next" />
            </div>
          </div>
        </div>
      </main>
      <MainFooter />
    </>
  );
}

export default Books;
