import React from 'react'
import styles from "@/styles/Home.module.css";
import Head from 'next/head';

const cartpage = () => {
  return (
    <div>
      <Head>
        <title>cartpage</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1> this is cart paege</h1>
        </div>
      </main>
    </div>
  )
}

export default cartpage
