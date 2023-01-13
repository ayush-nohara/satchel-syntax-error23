import React from 'react';
import Card from '../Card/Card';
import eth from './assets/ethereum.svg';
import polygon from './assets/polygon.svg';
import avax from './assets/avax.svg';
import styles from './Dashboard.module.css';

const Dashboard = (props) => {

    return (
        <div className={styles.container}>
            <Card image={eth} name={"GoerliETH"} balance={"5.00 ETH"}/>
            <Card image={polygon} name={"Mumbai"} balance={"10.00 MATIC"}/>
            <Card image={avax} name={"Fuji"} balance={"1.00 AVAX"}/>
        </div>
    );
};

export default Dashboard;