import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";
import Navbar from "../Navbar";
import MiniNav from "../Navbar/MiniNav";
import Offer from "../Offer";
import Agreement from "../Agreement";
import { useHistory } from "react-router";
import { logout } from "../../actions/validationActions";
import accept from "../../assets/accept.jpg";
import reject from "../../assets/reject.jpg";
//import ReactToPdf from "react-to-pdf";
import Page from "../Page";

const Letter = ({ id }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo } = userDetails;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  const printHandler = () => {
    window.print();
    dispatch(logout());
    history.push("/");
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4 form-group">
          <button
            type="button"
            onClick={printHandler}
            className={`btn ${styles.btns}`}
          >
            Print Letter
          </button>
        </div>
      </div>

      <div className={`${styles.offerx}`}>
        <Offer userInfo={userInfo} />
        <Agreement userInfo={userInfo} />
        <br />
        <br />

        <p>
          I have read and agree to the Terms and Conditions, Acceptance of this
          offer and agreement is subject to the Guarantor’s consent.
        </p>
        {userInfo.offerAcceptance === "Accepted" ? (
          <img src={accept} alt="I Accepted" />
        ) : (
          <img src={reject} alt="I Rejected" />
        )}
        <button
          type="button"
          onClick={logoutHandler}
          className={`btn ${styles.btns}  form-control`}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Letter;
