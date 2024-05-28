import React from 'react'
import styles from './JoinTheClub.module.css'
import Image from 'next/image'
function JoinTheClub() {
  return (
    <section className={styles.JoinTheClub}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2>JOIN THE READING CLUB</h2>
          <p>Get alerts of book realizes and exclusive content of Martha Batiz!</p>
          <form action="POST">
            <input type="text" placeholder='Write your email..'/>
            <button>Join the readers</button>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <Image src={"/books.png"} fill/>
        </div>
      </div>
    </section>
  )
}

export default JoinTheClub
