import React from 'react'
import styles from './aboutMarhta.module.css'
import MainHeader from '@/components/MainHeader/MainHeader'
import MainFooter from '@/components/MainFooter/MainFooter'
import { Italiana } from 'next/font/google';
import Image from 'next/image';
import AboutMarhtaSection from '@/components/AboutMarthaSection/AboutMarhtaSection';


const italiana = Italiana({ subsets: ["latin"], weight: ["400"], display: "swap" });

function page() {
  return (
    <>
        <MainHeader/>
        <main>
            <div className={styles.MainHero}>
                <div className={`${styles.section1} ${italiana.className}`}><h1>MARTHA BATIZ</h1></div>
                <div className={styles.section2}><h2>AWARD-WINNIG AUTHOR</h2></div>
                <div className={styles.section3}><p>Celebrated as One of Canada's Most Remarkable Mexicans in 2014, and Ranked Among the Most Influential Hispanic-Canadians in 2015</p></div>
            </div>
            <div className={styles.aboutsection}>
              <h2>ABOUT HER</h2>
              <div className={styles.aboutSectionContainer}>
                <p>Born and raised in Mexico City, Martha Bátiz lives in Canada since 2003. Mexican-Canadian writer
                Martha Bátiz is the author of two short-story collections in Spanish: A todos los voy a matar (Castillo
                Press, 2000, with a prologue by Daniel Sada), and De tránsito (Terranova Editores 2014), and two in
                English: Plaza Requiem: Stories at the Edge of Ordinary Lives (Exile Editions 2017) and No Stars in the Sky
                (House of Anansi Press 2022). Her award-winning novella Boca de lobo has been translated to English
                and French as Damiana’s Reprieve (Exile Editions 2018) and La gueule du loup (Lugar Común Editorial
                2019), and No Stars in the Sky was translated into Turkish as Yıldızsız Gökyüzü in 2023 (Soysal Yayin
                Grubu 2023).</p>
                <div className={styles.maquinaEscribir}>
                  <div className={styles.imgContainer}>
                    <Image src={"/maquina.png"} width={500} height={400}/>
                  </div>
                  <p>Martha has a PhD from the University of Toronto, is the curator of four anthologies, and works as a
                sessional professor at York University. Founder and instructor of the Creative Writing in Spanish courses
                at U of T’s School of Continuing Studies, Martha is also an American Translators Association’s Certified
                Translator, and was selected by Latinos Magazine among the 10 Most Successful Mexicans in Canada
                (2014) and by the Hispanic Canadian Congress among the Top 10 Most Influential Hispanic-Canadians.
                (2015). Her work has been included in 28 anthologies and has appeared in Mexico, Spain, Puerto Rico,
                Dominican Republic, Peru, Costa Rica, Ireland, England, Canada, and Turkey.</p>
                </div>
              </div>
            </div>
            <AboutMarhtaSection/>
        </main>
        <MainFooter/>
    </>
  )
}

export default page
