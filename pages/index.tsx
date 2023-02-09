import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Countdown } from '@/components/countdown'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>J</title>
        <meta name="description" content="J" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          J
        </h1>
        <Countdown targetDate={new Date('02/14/2023 00:00:00')} pagePath="/valentines" linkText="Capitulo 1" />
        <Countdown targetDate={new Date('03/06/2023 00:00:00')} pagePath="/birthday" linkText="-"/>
        <p className={styles.description}>
          Coming Soon
        </p>
      </main>
    </>
  )
}
