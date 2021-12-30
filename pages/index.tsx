import type { NextPage } from 'next'
import Head from 'next/head'
import tw from 'twin.macro'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
       <Head>
        <title>Simplecyto.com</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
    </div>
  )
}

export default Home