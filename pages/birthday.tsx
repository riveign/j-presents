import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Valentines.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Valentines() {
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
          <div className={styles.padded}>
          Feliz cumpleaños!
          </div>
        </h1>
        <div className={styles.padded}></div>
        <h2 className={styles.title}>
            <div className={styles.padded}>
            Tenia una obra planeada donde te contaba sobre todas las Joanas
            </div>
        </h2>
        <h2 className={styles.title}>
            <div className={styles.padded}>
            Te describia todo lo que me encanta de ellas y que las quiero a todas para mi
            </div>
        </h2>
        <h2 className={styles.title}>
            <div className={styles.padded}>
            Pero como me ganaste de manos, no me queda mas que decirte que te amo
            </div>
        </h2>
        <h2 className={styles.title}>
            <div className={styles.padded}>
            Por que no hay nada mas lindo que cuando las cosas las haces con amor.
            </div>
        </h2>
        <h2 className={styles.title}>
            <div className={styles.padded}>
            Que hoy en tu cumpleaños, te miro del otro lado de la pantalla y te veo sonreir.
            </div>
        </h2>
        <h2 className={styles.title}>
            <div className={styles.padded}>
            Por que dar es dar y no hay nada mas lindo que ir juntos a la par.
            </div>
        </h2>
        <h2 className={styles.title}>
            <div className={styles.padded}>
            Esto no es una cancion sino una mera representacion de lo que siente mi corazon.
            </div>
        </h2>
        <h2 className={styles.title}>
            <div className={styles.padded}>
            Una oportunidad de decirte que mi motivacion es hacerte feliz y verte reir.
            </div>
        </h2>
        <h2 className={styles.title}>
            <div className={styles.padded}>
            Pero no te pienses que este es tu unico regalo y eso me llena de orgullo.
            </div>
        </h2>
        <h2 className={styles.title}>
            <div className={styles.padded}>
            Solo te pido que elijas el finde semana para que juntos nos embarquemos en una nueva expedicion.
            </div>
        </h2>
        <h2 className={styles.title}>
            <div className={styles.padded}>
            Y como dice la hermosa cancion, veni subite a mi avion que de la nafta me encargo yo.
            </div>
        </h2>
        <Image  src="/birthday.jpeg" alt="birthday" height={450} width={400} className={styles.padded} />
      </main>
    </>
  )
}
