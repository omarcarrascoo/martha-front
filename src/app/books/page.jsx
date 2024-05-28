import React from 'react'
import styles from './books.module.css'
import Image from 'next/image'
import MainHeader from '@/components/MainHeader/MainHeader'
import BookElement from '@/components/bookElement/BookElement'
import MainFooter from '@/components/MainFooter/MainFooter'

function Books() {
  return (
    <>
    <MainHeader/>
    <main>
        <div className={styles.Books}>
            <div className={styles.container}>
                <div className={styles.row}>
                <Image src={"/rowl.png"} width={30} height={50}/>
                </div>
                <BookElement/>
                <div className={styles.row}>
                <Image src={"/rowr.png"} width={30} height={50}/>
                </div>
            </div>
        </div>
    </main>
    <MainFooter/>
    </>
  )
}

export default Books
