import React from 'react'
import logo from '../../assets/logos.png'
import styles from './styles.module.css'
const ImgCard = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.logo}>
                <img src={logo} alt="NMFB Logo" />
            </div>
            <div className={styles.text}>
                <h2>Nigeria Youth Investment Fund</h2><br />
                <p>AN INITIATIVE OF THE FEDERAL MINISTRY OF YOUTH
                    AND SPORTS DEVELOPMENT FUNDED BY THE CENTRAL BANK OF NIGERIA</p>
            </div>
        </div>
    )
}

export default ImgCard
