import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import styles from './styles.module.css';


const MiniNav = ({ title, history }) => {

    const userDetails = useSelector((state) => state.userDetails);
    const { userInfo } = userDetails;

    useEffect(() => {
        if (!userInfo) {
            history.push("/")
        }
    }, [userInfo, history])
    return (
        <div className={styles.miniNav}>
            <h5>{title}</h5>
            <p className="text-right">Welcome {userInfo && userInfo.firstName}!</p>
        </div>
    )
}

export default MiniNav
