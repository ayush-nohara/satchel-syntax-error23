import React from 'react'
import styles from './Middle.module.css'
import walletLogo from './assets/walletImg.png'
import Button from '../../components/Button/Button'

const Middle = () => {
  return (
    <div className={styles.exchange}>
      <div className={styles.exchangeLogo}>
        <img src={walletLogo} alt="walletLogo" />
      </div>
      <div className={styles.exchangeContainer}>
        <Button title="Send"/>
        <Button title="Create a swap"/>
      </div>
    </div>
  )
}

export default Middle
