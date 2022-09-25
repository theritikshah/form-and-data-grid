import type { NextPage } from 'next'
import React  from 'react';
import styles from '../styles/Home.module.css'
import Form from '../components/Form'
import ChakraForm from '../components/ChakraForm'


const Home: NextPage = () => {
 
  return (
    <div className={styles.container}>
      {/* <Form/> */}
      <ChakraForm/>
    </div>
  )
}

export default Home
