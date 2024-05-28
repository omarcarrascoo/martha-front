import React from 'react'
import styles from './BookElement.module.css'
import Image from 'next/image'

function BookElement() {
  return (
<div className={styles.container2}>
    <div className={styles.bookImg}>
        <Image src={"/book.png"} width={400} height={500}/>
    </div>
    <div className={styles.textContainer}>
        <h2>Plaza Requiem</h2>
        <p>2017</p>
        <p>"Profoundly moving and beautifully written, each story unfolds as its own universe, effortlessly transporting the reader through the characters' moments of joy and pain." — Amy Stuart</p>
        <p>The nineteen stories in No Stars in the Sky feature strong but damaged female characters in crisis. Tormented by personal conflicts and oppressive regimes that treat the female body like a trophy of war, the women in No Stars in the Sky face life-altering circumstances that either shatter or make them stronger, albeit at a very high price. True to her Latin American roots, ...</p>
        <button>Get the book</button>
    </div>
</div>
  )
}

export default BookElement
