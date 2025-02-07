import Image from "next/image";
import styles from "./page.module.css";
import MainHeader from "@/components/MainHeader/MainHeader";
import MainHero from "@/components/MainHero/MainHero";
import StarBook from "@/components/StarBook/StarBook";
import ArticleLister from "@/components/ArticleLister/ArticleLister";
import { Italiana } from "next/font/google";
import JoinTheClub from "@/components/JoinTheClub/JoinTheClub";
import AboutMarhtaSection from "@/components/AboutMarthaSection/AboutMarhtaSection";
import MainFooter from "@/components/MainFooter/MainFooter";


const italiana = Italiana({ subsets: ["latin"], weight: ["400"], display: "swap", });
export default function Home() {
  return (
   <>
    <MainHeader/>
    <main className={styles.main}>
      <MainHero/>
      <StarBook/>
      <section className={`${styles.articleSection}`}>
        <h2 className={italiana.className}>Unveil the newest literary gems</h2>
        <ArticleLister count={4}/>
      </section>
      <JoinTheClub/>
      <AboutMarhtaSection/>
    </main>
    <MainFooter/>
   </>

  );
}
