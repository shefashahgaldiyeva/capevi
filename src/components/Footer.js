import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../css/Footer.module.css'
import {FaFacebook, FaRegPaperPlane} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'
import fb from '../img/fb.png'
import ins from '../img/instagram.png'
import tw from '../img/twitter.png'

function Footer() {
  return (
    <footer className={styles.footer}>  
        <div className={styles.colors}>
            <div className={styles.blue}></div>
            <div className={styles.red}></div>
            <div className={styles.black}></div>
            <div className={styles.yellow}></div>
        </div>
        <div className={styles.footerInner}>
            <div>
                <div className={styles.logo}>ÇapEvi.</div>
                <p>Müasir şəkildə dizayn edilmiş məhsullar və çap xidmətləri əldə edin! ÇapEvi ilə buna asanlıqla nail ola bilərsiniz.</p>
            </div>
            <div className={styles.links}>
                <h3>Faydalı Keçidlər</h3>
                <ul>
                    <li><Link to='/'>Haqqımızda</Link></li>
                    <li><Link to='/'>Məhsullar</Link></li>
                    <li><Link to='/'>Xidmətlər</Link></li>
                    <li><Link to='/'>Qiymət planı</Link></li>
                    <li><Link to='/'>Əlaqə</Link></li>
                </ul>
            </div>
            <div>
                <h3>Bizimlə Əlaqə</h3>
                <ul>
                    <li><a href='/'>Cəfər Xandan, 3203</a></li>
                    <li><a href='tel:+994777777777'>+994(77)-777-77-77</a></li>
                    <li><a href="mailto:info@capevi.com">info@capevi.com</a></li>
                    <li>
                        <div className={styles.inp}>
                            <input name='plane' placeholder='Həftəlik xəbərləri alın..'/>
                            <label htmlFor='plane'><FaRegPaperPlane/></label>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Sosial Şəbəkələr</h3>
                <div className={styles.social}>
                    <a href='https://www.facebook.com/'>
                        <FaFacebook/>
                        <img src={fb}/>
                    </a>
                    <a href='https://www.instagram.com/'>
                        <SiInstagram/>
                        <img src={ins}/>
                    </a>
                    <a href='https://twitter.com/'>
                        <BsTwitter/>
                        <img src={tw}/>
                    </a>
                </div>
            </div>
        </div>
        <div className={styles.author}>
            <div>© 2022 ÇapEvi. Bütün hüquqlar qorunur.</div>
        </div>
        
        
    </footer>
  )
}

export default Footer;