import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logos.png'
import { logout } from '../../actions/validationActions'

const Navbar = ({ history }) => {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout());
    };
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/" className="text-left">
                    <img src={logo} alt="NMFB Logo" />
                </Link>
                <h4 className="text-center">NYIF Portal</h4>
            </div>
            <div className={styles.url}>
                <ul>
                    <Link to="/nyif/dashboard"><li>Dashboard</li></Link>
                    <Link to="/nyif/offer-letter"><li>Offer Letter</li></Link>
                    {/* <Link to="/nyif/bank-info"><li>Bank Info</li></Link> */}
                    <Link to="/" onClick={logoutHandler}><li>Logout</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
