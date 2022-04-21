import React from 'react'
import styles from '../css/ProductsInJumbotron.module.css'
import Card from './Card'
import {BsSearch} from 'react-icons/bs'

function ProductsInJumbotron() {
  return (
	<div className={styles.jumboRight}>
		<div className={styles.search}>
			<input placeholder='Bura yazın...' className={styles.searchInp}/>
			<a className={styles.button}>
				<span><BsSearch/> Axtar</span>
				<span><BsSearch/> Axtar</span>
			</a>
		</div>
		<div className={styles.productsWrapper}>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
	</div>
  )
}

export default ProductsInJumbotron;