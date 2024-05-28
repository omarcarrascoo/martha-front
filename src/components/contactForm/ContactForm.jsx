import React from 'react'
import styles from './contactForm.module.css'
import Image from 'next/image'
import { Italiana } from 'next/font/google';

const italiana = Italiana({ subsets: ["latin"], weight: ["400"], display: "swap", });

function ContactForm() {
  return (
    <section className={styles.ContactSection}>
        <div className={styles.imgContainer}>
            <Image src={"/marthaface.png"} fill/>
        </div>
        <div className={styles.formContainer}>
            <h1 className={`${styles.formTitle} ${italiana.className}`}>Contact Martha</h1>
            <form action="">
                <label htmlFor="name">Full Name</label>
                <input type="text" name='name'/>
                <label htmlFor="email">Email</label>
                <input type="mail" name='email' />
                <label htmlFor="subject">Subject</label>
                <input type="text" name='subject' />
                <label htmlFor="message">Message</label>
                <textarea name="message" id=""></textarea>
                <button>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default ContactForm
