import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './MainHeader.module.css'
function MainHeader() {
  return (
    <header className={styles.MainHeader}>
        <div className={styles.header__container}>
            <div className={styles.header__logo}>
                    <Image src="/logo.png" alt="" width={400} height={64} ></Image>
                </div>
            <nav className={styles.web}>
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/books"}>Books</Link></li>
                    <li><Link href={"/short-reads"}>Short Reads</Link></li>
                    <li><Link href={"/about-martha-batiz"}>About Martha</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                </ul>
            </nav>
            <nav className={styles.mobile}>
                
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/"}>Books</Link></li>
                    <li><Link href={"/"}>Short Reads</Link></li>
                    <li><Link href={"/"}>About Martha</Link></li>
                    <li><Link href={"/"}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default MainHeader
