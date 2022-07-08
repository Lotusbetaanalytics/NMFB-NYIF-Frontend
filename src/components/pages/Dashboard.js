import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";
import Navbar from "../Navbar";
import MiniNav from "../Navbar/MiniNav";
//import { useHistory } from "react-router";
import { USER_ACCEPT_TERMS_SUCCESS } from "../../constants/bvnConstants";

const Dashboard = ({ history }) => {
  //const history = useHistory();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo } = userDetails;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
    const bank = userInfo && userInfo.otherBankName;
    if (userInfo && userInfo.offerAcceptance === "Accepted" && bank) {
      history.push("/nyif/letter");
    }
    if (userInfo && userInfo.offerAcceptance === "Rejected") {
      history.push("/nyif/letter");
    }
    if (userInfo && userInfo.offerAcceptance === "Accepted" && !bank) {
      dispatch({
        type: USER_ACCEPT_TERMS_SUCCESS,
      });
      history.push("/nyif/bank-info");
    }
  }, [history, userInfo, dispatch]);
  const fname = userInfo && userInfo.firstName;
  const mname = userInfo && userInfo.secondName;
  const lname = userInfo && userInfo.lastName;
  const username = fname + " " + mname + " " + lname;
  const [name, setName] = useState(
    userInfo && userInfo.firstName ? username : userInfo && userInfo.fullName
  );
  const [loanAmount, setLoanAmount] = useState(
    userInfo && userInfo.approvedLoanAmount
  );
  const [loanTenor, setLoanTenor] = useState(
    userInfo && userInfo.approvedLoanTenor
  );
  const [loanMoratorium, setLoanMoratorium] = useState(
    userInfo && userInfo.approvedLoanMoratorium
  );

  const submitHandler = () => {
    history.push("/nyif/offer-letter");
  };

  return (
    <div className={styles.contents}>
      <div className={styles.appGrid}>
        <Navbar />
        <div className={styles.contents}>
          <Route
            render={({ history }) => (
              <MiniNav history={history} title="Dashboard" />
            )}
          />
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
                    value={Number(loanAmount).toLocaleString("en-GB", {
                      style: "currency",
                      currency: "NGN",
                      minimumFractionDigits: 2,
                    })}
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
