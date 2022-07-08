import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";
import ImgCard from "../UI/ImgCard";
import { updateDetails } from "../../actions/validationActions";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import img from "../../assets/logo.png";

const BankUpdateScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [bvn, setBVN] = useState("");

  const status = useSelector((state) => state.status);
  const { loading, error, userUpdate } = status;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateDetails(bvn));
  };

  useEffect(() => {
    if (userUpdate) {
      history.push("/nyif/update/bankinfo");
    }
  }, [userUpdate, history]);
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

export default BankUpdateScreen;
