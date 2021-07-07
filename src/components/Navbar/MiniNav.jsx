import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styles from './styles.module.css';


const MiniNav = (props) => {

    const userDetails = useSelector((state) => state.userDetails);
    const { userInfo } = userDetails;

    const history = useHistory();
    useEffect(() => {
        if (!userInfo) {
            history.push("/")
        }
    }, [userInfo, history])
    return (
        <div className={styles.miniNav}>
            <h5>{props.title}</h5>
            <p className="text-right">Welcome {userInfo.fullName}!</p>
        </div>
    )
}

export default MiniNav
