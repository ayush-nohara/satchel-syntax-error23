import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <div className={styles.button}>
      <button className={styles.click}>
        {props.title}
      </button>
    </div>
  )
}

export default Button
