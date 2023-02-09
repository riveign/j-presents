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
          Separados pero Juntos
          </div>
        </h1>
        <div className={styles.padded}></div>
        <p className={styles.description}>
        Es increible que en la primera fiesta en la que celebramos por nosotros, nos encontremos alejados. 
        Tal vez por una organisacion anticipada debido a tristes proyecciones o simplemente una obra del destino. 
        Pero sea cual sea la razon encuentro esta forma de sentirme mas cerca tuyo que nunca.
        Han pasado casi 6 meses desde que comenzamos a caminar a la par (dependiendo de cuando leas esto).
        Y estoy extasiado por lo vivido y por el amor que nos solemos dar (espero que solo sea el comienzo).
        Dicen que las cosas no duran para siempre, aunque yo espero que si.
        Pero ganandole a la ansiedad del futuro hoy elijo festejar.
        </p>
        <Image  src="/valentines-1.jpeg" alt="Valentines" width={300} height={300} className={styles.padded} />
        <p className={styles.description}>
        Festejar por que me siento mejor persona a tu lado. Por que sonrio solo pensando en vos.
        Por con vos me conozco mas. Por que crecemos juntos.
        Por que sabemos compartir los momentos felices y los tristes.
        Por que que sabemos que estamos primero y disfrutamos del otro como un regalo.
        Por que cada plan es una aventura. Y cada aventura para nosotrs es un planazo.
        Por que me das la valentia de sentarme aca y escribirte esto.
        </p>
        <Image  src="/valentines-2.jpeg" alt="Valentines" width={300} height={300} className={styles.padded} />
        <p className={styles.description}>
        Por todas estas cosas y muchas otras que no me entran en esta pagina para mantener el estilo de la misma, es que que no dejo de pensar en vos.
        Y aunque este lejos quiero que nos sientamos cerca. Que estas fotos nos recuerden que somos mas juntos pero aunque estemos separados, no estamos tan lejos.
        Y como no vamos a estarlo si al final la J esta al lado de la I. 
        </p>
        <Image  src="/valentines-3.jpeg" alt="Valentines" width={300} height={300} className={styles.padded} />
        <p className={styles.description}>
        Shh no te lo digas a nadie pero... te amo. Ahh y tambien te dejo esta pista.
        </p>
        <Image  src="/valentines-4.png" alt="Valentines" width={150} height={150} className={styles.padded} />
      </main>
    </>
  )
}
