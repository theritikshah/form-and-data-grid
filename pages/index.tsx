import type { NextPage } from 'next'
import React  from 'react';
import styles from '../styles/Home.module.css'
import FormUi from  '../components/FormUi'


const Home: NextPage = () => {
 
  return (
    <div className={styles.container}>
     
      <FormUi/>
    </div>
  )
}

export default Home
