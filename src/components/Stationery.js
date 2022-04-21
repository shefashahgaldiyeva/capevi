import React from 'react'
import styles from '../css/Stationery.module.css'

function Stationery() {
  return (
    <div className={styles.wrapper}>
        <div >
            <div className={styles.stationery}>
                <h3>dəftərxana ləvazimatı</h3>
            </div>
        </div>
        <div>
            <div className={styles.packaging}>
                <h3>qablaşdırma</h3>
            </div>
        </div>
        <div>
            <div className={styles.publication}>
                <h3>nəşr</h3>
            </div>
        </div>
    </div>
  )
}

export default Stationery;