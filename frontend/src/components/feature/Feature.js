import React from 'react';
import styles from './Feature.module.css';

const Feature = ({ title, text }) => (
  <div className={styles.container__feature}>
    <div className={styles.container__feature-title}>
      <div />
      <h1>{title}</h1>
    </div>
    <div className={styles.container_feature-text}>
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;