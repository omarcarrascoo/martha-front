import React from 'react'
import styles from './AboutMarthaSection.module.css'
import { Italiana } from 'next/font/google';
import Image from 'next/image';

const italiana = Italiana({ subsets: ["latin"], weight: ["400"] });


function AboutMarhtaSection() {
  return (
    <section className={styles.MarthaSection}>
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={"/marthaface.png"} fill/>
            </div>
                <div className={styles.textContainer}>
                <h2 className={`${styles.title} ${italiana.className}`} >Meet Martha: Unveiling the Extraordinary Life and Stories Behind the Name</h2>
                <p>Top 10 Most Successful Mexicans in Canada is a special annual edition of Latinos Magazine, which was originally inserted in The Globe & Mail. Batiz was acknowledged by a group of experts deserving the acknowledgement of being listed among the Top 10 Most Successful Mexicans in Canada – 2014.</p>
                <button>GET TO KNOW MARTHA</button>
                <div className={styles.actionContainer}>
                    <div className={styles.icon}>
                        <Image src={"/arrow.png"} width={20} height={50}/>
                        <p>NEWEST BOOK</p>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default AboutMarhtaSection
