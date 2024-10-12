import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Meraki OnChain Devs</h2>
      <h3>Playground</h3>

      <div className={styles.projects}>
        <iframe
          src="/unity.html"
          width="100%"
          height="600px"
          title="Unity Game"
          frameBorder="0"
        ></iframe>
      </div>
    </main>
  )
}
