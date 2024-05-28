import React from 'react'
import styles from './MainHero.module.css'
import { Italiana } from 'next/font/google';

const italiana = Italiana({ subsets: ["latin"], weight: ["400"], display: "swap", });

function MainHero() {
  return (
    <div className={styles.MainHero}>
        <div className={`${styles.section1} ${italiana.className}`}><h1>MARTHA BÁTIZ</h1></div>
        <div className={styles.section2}><h2>AWARD-WINNIG AUTHOR</h2></div>
        <div className={styles.section3}><p>Celebrated as One of Canada's Most Remarkable Mexicans in 2014, and Ranked Among the Most Influential Hispanic-Canadians in 2015</p></div>
    </div>
  )
}

export default MainHero
