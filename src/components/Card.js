import React from 'react'
import styles from '../css/Card.module.css'
import print_img from '../img/print_img.jpg'

function Card() {
  return (
    <div className={styles.cardWrapper}>
        <div className={styles.card}>
            <div className={styles.cardIn}>
                <div className={styles.imageWrapper}>
                    <img src={print_img}/>
                </div>
                <a className={styles.button}>
                    <span>Səbətə əlavə et</span>
                    <span>Səbətə əlavə et</span>
                </a>
            </div>
            <div>
                <h6 className={styles.h6}>Product Name</h6>
            </div>
        </div>
    </div>
  )
}

export default Card;