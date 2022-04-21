import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/Header.module.css'
import Logo from './Logo'

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.headerInner}>
            {/* <img/> */}
            {/* <div className={styles.logo}>ÇapEvi.</div> */}
            <div className={styles.logo}><Logo/></div>
            <ul>
                <li><Link to='#'>Ana səhifə</Link></li>
                <li><Link to='#'>Qalereya</Link></li>
                <li><Link to='#'>Haqqımızda</Link></li>
                <li><Link to='#'>Əlaqə</Link></li>
            </ul>
            {/* <div className={styles.cart}>
                <Link to='#'>Səbət(0)</Link>
            </div> */}
        </div>
        <div className={styles.colors}>
            <div className={styles.blue}></div>
            <div className={styles.red}></div>
            <div className={styles.black}></div>
            <div className={styles.yellow}></div>
        </div>
    </header>
  )
}

export default Header