import React from 'react'
import styles from './shortReads.module.css'
import MainHeader from '@/components/MainHeader/MainHeader'
import MainFooter from '@/components/MainFooter/MainFooter'
import { Italiana } from 'next/font/google';
import CategoryLister from '@/components/categoryLister/CategoryLister';
import ArticleLister from '@/components/ArticleLister/ArticleLister';

const italiana = Italiana({ subsets: ["latin"], weight: ["400"] });
function page() {
  return (
    <>
        <MainHeader/>
        <main>
            <div className={styles.shortReads}>
                <div className={styles.container}>
                    <h1 className={`${styles.heading} ${italiana.className}`}>Short Reads</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Neque egestas netus mi at dolor. Feugiat mauris cum porttitor nam. Tortor vitae lacinia morbi pharetra id non. Dui nisi condimentum vitae sit nulla facilisi in sagittis eleifend. Maecenas mi venenatis nunc lorem fermentum. Cursus viverra id condimentum sed in est et. Tellus amet ultrices neque ac nam tincidunt. Nunc non tellus mauris ultricies tellus. Volutpat tempus quis morbi pellentesque.</p>
                    <CategoryLister/>
                    <br />
                    <br />
                    <ArticleLister/>
                </div>
                
            </div>
        </main>
        <MainFooter/>
    </>
  )
}

export default page
