'use client';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Meraki Games</h2>

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
