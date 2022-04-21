import React from 'react'
import styles from '../css/Discount.module.css'

function Discount() {
  return (
    <div className={styles.discount}>
        <div className={styles.discountInner}>
            <div className={styles.left}>
                <h2>Məhdud zamanlı təklif<br/>
                    TƏLƏS!</h2>
                <a className={styles.button}>
                    <span>Ətraflı</span>
                    <span>Ətraflı</span>
                </a>
            </div>
            <div className={styles.right}>
                <div className={styles.circle}>
                    <div className={styles.rotateCircle}>
                        <span>E</span>
                        <span>N</span>
                        <span>D</span>
                        <span>I</span>
                        <span>R</span>
                        <span>I</span>
                        <span>M</span>
                        <span>E</span>
                        <span>N</span>
                        <span>D</span>
                        <span>I</span>
                        <span>R</span>
                        <span>I</span>
                        <span>M</span>
                        <span>E</span>
                        <span>N</span>
                        <span>D</span>
                        <span>I</span>
                        <span>R</span>
                        <span>I</span>
                        <span>M</span>
                        {/* <span>E</span>
                        <span>N</span>
                        <span>D</span>
                        <span>I</span>
                        <span>R</span>
                        <span>I</span>
                        <span>M</span> */}
             
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discount;