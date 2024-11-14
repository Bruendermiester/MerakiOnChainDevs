'use client';
import styles from '../page.module.css'

export default function Home() {
  return (
<>
    <header>
        <img
        className={styles.logo}
        src='/images/Logo3.png'
        alt="Logo"
        />
        
    </header>
    <main className={styles.mainPlay}>
      <h2>Meraki OnChain Devs</h2>
      <div className={styles.projects}>
        {/* <iframe
          src="/unity.html"
          width="100%"
          height="600px"
          title="Unity Game"
          frameBorder="0"
        ></iframe> */}
      </div>

      <div>
        {/* <Subscribe></Subscribe> */}
      </div>
    </main>
    </>
  )
}