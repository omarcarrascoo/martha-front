import React from 'react'
import styles from './ArticleCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
function ArticleCard({article, widthreduse}) {
  console.log(article);
  return (
    // <div className={styles.cardContainer}>
    //     <div className={styles.imgContainer}>
    //         <Image src={"/write.png"} fill/>
    //     </div>
    //     <div className={styles.textContainer}>
    //         <h3>{article.title}</h3>
    //         <p>{article.frase}</p>
    //        {
    //         article.link&& <Link href={article.link?article.link:"/"}>Read More</Link>
    //        } 
    //        {/* <Link href={article.link?article.link:"/"}>Read More</Link> */}
    //     </div>
    // </div>
    <div className={styles.cardContainer2}>
           <div className={styles.textContainer}>
           <h3>{article.title}</h3>
          <p>{article.frase}</p>
           {
           article.author&& <Link href={article.author?article.author[0]:"/"}>Read More</Link>
          } 
          {/* <Link href={article.link?article.link:"/"}>Read More</Link> */}
       </div>
    </div>
  )
}

export default ArticleCard
