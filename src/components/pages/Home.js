import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";
import ImgCard from "../UI/ImgCard";
import { validateBvn } from "../../actions/validationActions";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import img from "../../assets/logo.png";

const Validation = ({ history }) => {
  const dispatch = useDispatch();

  const [bvn, setBVN] = useState("");

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, userInfo } = userDetails;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(validateBvn(bvn));
  };

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
            {loading && <Loading />}
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={submitHandler}>
              <div className={`${styles.padding} col-md-12 form-group`}>
                <input
                  type="tel"
                  className={`form-control`}
                  name="bvn"
                  placeholder="Enter Your BVN"
                  onChange={(e) => setBVN(e.target.value)}
                  maxLength="11"
                />
              </div>
              <div className={`${styles.padding} col-md-12 form-group`}>
                <input
                  type="submit"
                  className={`btn ${styles.btns}  form-control`}
                  value="Validate BVN"
                />
              </div>
            </form>
            <Link className={`btn btn-warning`} to="/">
              GO TO HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validation;
