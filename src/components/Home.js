import React from 'react'
import styles from '../css/Home.module.css'
import Discount from './Discount';
import Jumbotron from './Jumbotron';
import Stationery from './Stationery';

function Home() {
  return (
    <div className={styles.homeWrapper}>
        <Jumbotron/>
        <Discount/>
        <Stationery/>
    </div>
  )
}

export default Home;