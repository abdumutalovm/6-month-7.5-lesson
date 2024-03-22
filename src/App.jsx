import { useState } from 'react'
import logo from './assets/Logo.svg'
import styles from './App.module.css'
import mainImg from './assets/bgWall.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className={styles.container}>
      <header className={styles.header}>
        <div className="comp-logo">
         <a href="#"><img src={logo} alt="company-log" /></a>
        </div>
        <div className={styles.menus}>
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">How it works</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <button className={styles.button}>Try for free</button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.info}>
        <h1>Discover new currency</h1>
        <p>A cryptocurrency bank account for more trusting financial transaction & more reliable currency for better future finance</p>
        <button>Try for free</button>
        </div>
      </main>
     </div>
    </>
  )
}

export default App
