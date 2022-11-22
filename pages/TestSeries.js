import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Herobox from '../components/Herobox'
import Footer from '../components/Footer'
import Proccesbox from '../components/Proccesbox'
import Navbar from '../components/Navbar'
import TestHomelist from '../components/TestHomelist'
import Categorieshome from '../components/Categorieshome'
import Websitemenu from '../components/Websitemenu'
import WhyChoose from '../components/WhyChoose'
import PassHeroBox from '../components/PassHeroBox'
import { useState, useEffect } from 'react';
export default function TestSeries() {

  return (
    <><Navbar />
      <Head>
        <title>Test Series :Board Exam Official Website</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      
      <div className={styles.container} >
        <TestHomelist />
        <Categorieshome />
      </div>
      <div style={{ height: '50px' }}> </div>
      <div className={styles.container_full} style={{ backgroundColor: '#efecff' }}>
        <div className={styles.container} >
          <WhyChoose />
        </div>
      </div>

      
      <div className={styles.container_full} style={{ backgroundColor: '#232323' }} >
        <Footer />
      </div>
    </>

  )
}
