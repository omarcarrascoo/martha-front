import Image from 'next/image'
import React from 'react'
import styles from './StarBook.module.css'

function StarBook() {
  return (
    <div className={styles.starBook}>
        <div className={styles.container}>
            <div className={styles.bookImgContainer}>
                <Image src={"/book.png"} width={300} height={450}/>
                <p className={styles.bookTitle}>No Stars in the Sky</p>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.title}>"Profoundly moving and beautifully written, each story unfolds as its own universe, effortlessly transporting the reader through the characters' moments of joy and pain." — Amy Stuart</p>
                <p>The nineteen stories in No Stars in the Sky feature strong but damaged female characters in crisis. Tormented by personal conflicts and oppressive regimes that treat the female body like a trophy of war, the women in No Stars in the Sky face life-altering circumstances that either shatter or make them stronger, albeit at a very high price. True to her Latin American roots, Bátiz shines a light on the crises that concern her most: the plight of migrant children along the Mexico–U.S. border, the tragedy of the disappeared in Mexico and Argentina, and the generalized racial and domestic violence that has turned life into a constant struggle for survival. With an unflinching hand, Bátiz explores the breadth of the human condition to expose silent tragedies too often ignored.</p>
            </div>
        </div>
    </div>
  )
}

export default StarBook
