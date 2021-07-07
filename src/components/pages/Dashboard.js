import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import Navbar from "../Navbar";
import MiniNav from "../Navbar/MiniNav";
import { useHistory } from "react-router";

const Dashboard = () => {
  const history = useHistory();
  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo } = userDetails;

  const [name, setName] = useState(userInfo.fullName);
  const [loanAmount, setLoanAmount] = useState(userInfo.approvedLoanAmount);
  const [loanTenor, setLoanTenor] = useState(userInfo.approvedLoanTenor);
  const [loanMoratorium, setLoanMoratorium] = useState(
    userInfo.approvedLoanMoratorium
  );

  const submitHandler = () => {
    history.push("/nyif/offer-letter");
  };
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);
  return (
    <div className={styles.contents}>
      <div className={styles.appGrid}>
        <Navbar />
        <div className={styles.contents}>
          <MiniNav title="Dashboard" />
          <div className={`${styles.forms} ${styles.formPadding}`}>
            <form>
              <div className="row">
                <div className={`${styles.padding} col-md-4 form-group`}>
                  <label>Applicant's Name</label>
                  <input
                    type="text"
                    className={`form-control`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    readOnly
                  />
                </div>

                <div className={`${styles.padding} col-md-4 form-group`}>
                  <label>Approved Loan Amount</label>
                  <input
                    type="text"
                    className={`form-control`}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    readOnly
                  />
                </div>
                <div className={`${styles.padding} col-md-4 form-group`}>
                  <label>Loan Tenor</label>
                  <input
                    type="text"
                    className={`form-control`}
                    value={loanTenor}
                    onChange={(e) => setLoanTenor(e.target.value)}
                    readOnly
                  />
                </div>
                <div className={`${styles.padding} col-md-4 form-group`}>
                  <label>Loan Moratorium</label>
                  <input
                    type="text"
                    className={`form-control`}
                    value={loanMoratorium}
                    onChange={(e) => setLoanMoratorium(e.target.value)}
                    readOnly
                  />
                </div>
                <div className={`${styles.padding} col-md-4 form-group`}>
                  <label style={{ visibility: "hidden" }}>Proceed</label>
                  <input
                    type="button"
                    className={`btn ${styles.btns}  form-control`}
                    value="Proceed"
                    onClick={submitHandler}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
