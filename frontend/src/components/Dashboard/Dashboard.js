import React from 'react';
import Card from '../Card/Card';
import eth from './assets/ethereum.svg';
import styles from './Dashboard.module.css';

const Dashboard = (props) => {

    return (
        <div className={styles.container}>
            <Card image={eth}/>
            <Card image={eth}/>
            <Card image={eth}/>
        </div>
    );
};

export default Dashboard;