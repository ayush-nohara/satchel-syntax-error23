import React from 'react';
import Card from '../Card/Card';
import eth from './assets/ethereum.svg';
import polygon from './assets/polygon.svg';
import avax from './assets/avax.svg';
import styles from './Dashboard.module.css';

const Dashboard = (props) => {

    return (
        <>
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1 className="gradient_text">Your Holdings</h1>
            </div>
            <div className={styles.cards}>
                <Card index={1} image={polygon} name={"Mumbai"} balance={"10.00 MATIC"}/>
                <Card index={2} image={avax} name={"Fuji"} balance={"1.00 AVAX"}/>
                <Card index={0} image={eth} name={"GoerliETH"} balance={"5.00 ETH"}/>
            </div>
            
            
        </div>
        </>
    );
};

export default Dashboard;