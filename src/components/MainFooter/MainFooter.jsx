import React from 'react'
import styles from './MainFooter.module.css'
import Link from 'next/link'
function MainFooter() {
  return (
    <footer className={styles.MainFooter}>
        <div className={styles.container}>
            <p>Term & Conditions | Privacy Policy | ©MathaBatiz 2023</p>

            <nav>
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/"}>Books</Link></li>
                    <li><Link href={"/"}>Short Reads</Link></li>
                    <li><Link href={"/"}>About Martha</Link></li>
                    <li><Link href={"/"}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}

export default MainFooter
