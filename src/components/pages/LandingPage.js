import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import ImgCard from "../UI/ImgCard";
import { Link } from "react-router-dom";
import img from "../../assets/logo.png";

const LandingPage = ({ history }) => {
  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo } = userDetails;

  useEffect(() => {
    if (userInfo) {
      history.push("/nyif/dashboard");
    }
  }, [userInfo, history]);
  return (
    <div className={styles.contents}>
      <div className={styles.grid}>
        <ImgCard />
        <div className={`${styles.content} text-center`}>
          <img src={img} alt="NYIF" width="100" />
          <br />
          <small className="text-success">
            Nigeria Youth Investment Fund [NYIF]
          </small>
          <div className={styles.forms}>
            <div className={`${styles.padding} col-md-12 form-group`}>
              <Link
                className={`btn ${styles.btns}  form-control`}
                to="/nyif/validatebvn"
              >
                Accept Offer Letter
              </Link>
            </div>
            <div className={`${styles.padding} col-md-12 form-group`}>
              <Link
                className={`btn ${styles.btns}  form-control`}
                to="/nyif/updatebank"
              >
                Update Bank Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
