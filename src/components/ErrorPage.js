import React from 'react'
import styles from '../css/ErrorPage.module.css'

function ErrorPage() {
  return (
    <div className={styles.errorWrapper}>
        <div className={styles.error}>
            <h1>404</h1> 
            <h3>SƏHİFƏ TAPILMADI</h3>
            <p>Axtardığınız səhifə mövcud deyil. O, köçürülmüş yaxud tamamilə silinmiş ola bilər. Ana səhifəyə qayıdıb yenidən axtarış edə bilərsiniz.</p>
            <a href='/' className={styles.button}>
                <span>Ana səhifəyə qayıt</span>
                <span>Ana səhifəyə qayıt</span>
            </a>
        </div>
    </div>
  )
}

export default ErrorPage