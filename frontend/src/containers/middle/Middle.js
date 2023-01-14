import React from 'react'
import styles from './Middle.module.css'
import walletLogo from '../../assets/images/swapLogo.png'
import Button from '../../components/Button/Button'
import SendCard from '../../components/sendCard/SendCard'
import SwapCard from '../../components/swapCard/SwapCard'

const Middle = () => {
  return (
    <div className={styles.exchange}>
      <div className={styles.exchangeLogo}>
        <img src={walletLogo} alt="walletLogo" />
      </div>
      <div className={styles.exchangeContainer}>
        <div><SendCard /></div>
        <div><SwapCard /></div>
        
      </div>
    </div>
  )
}

export default Middle
