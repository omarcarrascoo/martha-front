import React from 'react'
import styles from './ArticleCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
function ArticleCard() {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.imgContainer}>
            <Image src={"/test.png"} fill/>
        </div>
        <div className={styles.textContainer}>
            <h3>Social and Politic Criticism </h3>
            <p>The Reformulation of the Myth of Antigone in Franklin Domínguez’ Antígona-humor, The Reformulation of the Myth of Antigone in Franklin Domínguez’ Antígona-humor,
                The Reformulation of the Myth of Antigone in Franklin Domínguez’ Antígona-humor,</p>
            <Link href={"/"}>Read More</Link>
        </div>
    </div>
  )
}

export default ArticleCard
