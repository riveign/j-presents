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
        <Countdown targetDate={new Date('2023-2-14 00:00:00')} />
        <Countdown targetDate={new Date('2023-3-6 00:00:00')} />
        <p className={styles.description}>
          Coming Soon
        </p>
      </main>
    </>
  )
}
