import React from 'react'
import styles from '../css/Jumbotron.module.css'
import Categories from './Categories';
import ProductsInJumbotron from './ProductsInJumbotron';

function Jumbotron() {
  return (
    <div className={styles.jumbotronWrapper}>
        <div className={styles.jumbotron}>
            <Categories/>
            <ProductsInJumbotron/>
        </div>
    </div>
  )
}

export default Jumbotron;