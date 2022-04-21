import React from 'react'
import styles from '../css/Arrow.module.css'
import {IoIosArrowUp} from 'react-icons/io'


function Arrow() {
    return (
        // <div>
        //     <a className={styles.arrow} href='#'><IoIosArrowUp/></a>
        // </div>
        <a className={styles.container} href='#'>
            <div className={styles.arrow}></div>
            <div className={styles.arrow}></div>
            <div className={styles.arrow}></div>
        </a>
    )
}

export default Arrow;
