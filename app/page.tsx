import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Meraki OnChain Devss</h2>
      <h3>Playground</h3>

      <div className={styles.projects}>
        <a className={styles.project} href="/onchaintest">
            On Chain Test
        </a>
      </div>
    </main>
  )
}
