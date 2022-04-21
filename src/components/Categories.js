import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../css/Categories.module.css'
import businessCard from '../img/business_card.png';
import booklet from '../img/booklet.png'
import flyers from '../img/flyers.png'
import catalog from '../img/catalog.png'
import notebook from '../img/notebook.png'
import menu from '../img/menu.png'
import calendar from '../img/calendar.png'
import folder from '../img/folder.png'
import blank from '../img/blank.png'
import cardboard from '../img/package.png'
import packaging from '../img/packaging.png'
import package_bag from '../img/package_bag.png'

function Categories() {

    const [active,setActive] = useState(false)
    const handleClick = () => {
        setActive(!active)
    }

  return (
    <div className={styles.categories} id='cate'>
        <div className={styles.products}>
            <h2>Məhsullar</h2>
            <ul>
                <li>
                    <Link to='#'>
                        <img src={businessCard}/>
                        <p>Vizit kartlar</p>    
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <img src={booklet}/>
                        <p>Bukletlər</p>
                    </Link>
                    
                </li>
                <li>
                    <Link to='#'>
                        <img src={flyers}/>
                        <p>Flayerlər</p>
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <img src={catalog}/>
                        <p>Kataloqlar</p>
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <img src={notebook}/>
                        <p>Bloknotlar</p>
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <img src={menu}/>
                        <p>Menyular</p>
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <img src={calendar}/>
                        <p>Təqvimlər</p>
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <img src={folder}/>
                        <p>Qovluqlar</p>
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <img src={blank}/>
                        <p>Blanklar</p>
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <img src={cardboard}/>
                        <p>Qofro karton</p> 
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <img src={package_bag}/>
                        <p>Paketlər</p>
                    </Link>
                </li>
                <li>
                    <Link onClick={()=>handleClick()} to='#'>
                        <img src={packaging}/>
                        <p>Promo məhsullar</p>
                    </Link>
                    <div className={!active ? styles.promoProductsPassive : styles.promoProductsWrapper}>
                        <ul className={!active ? styles.promoProducts : styles.active}>
                            <li>-<Link to='#'>Açarlıq</Link></li>
                            <li>-<Link to='#'>Çanta</Link></li>
                            <li>-<Link to='#'>Fənər</Link></li>
                            <li>-<Link to='#'>Fincan</Link></li>
                            <li>-<Link to='#'>Çətir</Link></li>
                            <li>-<Link to='#'>Saat</Link></li>
                            <li>-<Link to='#'>Qələm</Link></li>
                            <li>-<Link to='#'>Stolüstü Promosiyalar</Link></li>
                            <li>-<Link to='#'>USB</Link></li>
                            <li>-<Link to='#'>Qələm</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to='#'>
                        <img src={packaging}/>
                        <p>Promo məhsullar</p>
                    </Link>
                </li>
            </ul>
        </div>
        {/* <div>
            <h2>Xidmətlər</h2>
        </div> */}
    </div>
  )
}

export default Categories;