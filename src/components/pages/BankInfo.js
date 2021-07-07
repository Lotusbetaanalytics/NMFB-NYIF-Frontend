import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Navbar from "../Navbar";
import MiniNav from "../Navbar/MiniNav";
import { useDispatch, useSelector } from "react-redux";
import { updateBank, logout } from "../../actions/validationActions";
import Loading from "../Loading";

const BankInfo = ({ history }) => {
  const dispatch = useDispatch();
  const [bank, setBankName] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [message, setMessage] = useState();

  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo } = userDetails;

  const userAccept = useSelector((state) => state.userAccept);
  const { success } = userAccept;

  const userBank = useSelector((state) => state.userBank);
  const { loading, error, success: successBank } = userBank;

  const submitHandler = (e) => {
    e.preventDefault();
    if (bank === undefined) {
      setMessage("Please Select a Bank");
    } else {
      const Id = userInfo.userId;
      const UpdatedBankName = bank;
      const UpdatedAccountNumber = accountNumber;
      dispatch(updateBank(Id, UpdatedBankName, UpdatedAccountNumber));
    }
  };
  useEffect(() => {
    if (!userInfo || !success) {
      history.push("/nyif/offer-letter");
    }
  }, [userInfo, history, success]);

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <div className={styles.contents}>
      <div className={styles.appGrid}>
        <Navbar />
        <div className={styles.contents}>
          <MiniNav title="Bank Info" />
          <div className={`${styles.forms} ${styles.formPadding}`}>
            {loading && <Loading />}
            {error && <div className="alert alert-danger">{error}</div>}
            {successBank && (
              <div className="alert alert-success">
                Bank details has been uploaded successfully!
              </div>
            )}

            <form onSubmit={submitHandler}>
              <div className="row">
                {message && <div className="alert alert-info">{message}</div>}
                {successBank ? (
                  <div className={`${styles.padding} col-md-4 form-group`}>
                    <button
                      type="button"
                      onClick={logoutHandler}
                      className={`btn ${styles.btns}  form-control`}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <>
                    <p>Enter your Bank Information</p>
                    <div className={`${styles.padding} col-md-4 form-group`}>
                      <label>Bank Name</label>
                      <select
                        type="text"
                        className={`form-control ${message && "border-danger"}`}
                        onChange={(e) => setBankName(e.target.value)}
                      >
                        <option>Select Bank</option>
                        <option value="FIRST BANK PLC">FIRST BANK PLC</option>
                        <option value="CITIBANK NIGERIA LIMITED">
                          CITIBANK NIGERIA LIMITED
                        </option>
                        <option value="HERITAGE BANK">HERITAGE BANK</option>
                        <option value="UNION BANK OF NIGERIA">
                          UNION BANK OF NIGERIA
                        </option>
                        <option value="UNITED BANK OF AFRICA PLC (UBA)">
                          UNITED BANK OF AFRICA PLC (UBA)
                        </option>
                        <option value="WEMA BANK PLC">WEMA BANK PLC</option>
                        <option value="ACCESS BANK PLC">ACCESS BANK PLC</option>
                        <option value="ECOBANK NIGERIA PLC">
                          ECOBANK NIGERIA PLC
                        </option>
                        <option value="ZENITH BANK PLC">ZENITH BANK PLC</option>
                        <option value="GUARANTY TRUST BANK PLC">
                          GUARANTY TRUST BANK PLC
                        </option>
                        <option value="DIAMOND (ACCESS) BANK PLC">
                          DIAMOND (ACCESS) BANK PLC
                        </option>
                        <option value="STANDARD CHARTERED BANK NIGERIA LIMITED">
                          STANDARD CHARTERED BANK NIGERIA LIMITED
                        </option>
                        <option value="FIDELITY BANK">FIDELITY BANK</option>
                        <option value="POLARIS BANK LIMITED">
                          POLARIS BANK LIMITED
                        </option>
                        <option value="KEYSTONE BANK LIMITED">
                          KEYSTONE BANK LIMITED
                        </option>
                        <option value="SUNTRUST BANK NIGERIA LTD">
                          SUNTRUST BANK NIGERIA LTD
                        </option>
                        <option value="PROVIDUS BANK PLC">
                          PROVIDUS BANK PLC
                        </option>
                        <option value="TITAN TRUST BANK LIMITED">
                          TITAN TRUST BANK LIMITED
                        </option>
                        <option value="GLOBUS BANK LIMITED">
                          GLOBUS BANK LIMITED
                        </option>
                        <option value="FIRST CITY MONUMENT BANK PLC">
                          FIRST CITY MONUMENT BANK PLC
                        </option>
                        <option value="UNITY BANK PLC">UNITY BANK PLC</option>
                        <option value="STANBIC IBTC BANK PLC">
                          STANBIC IBTC BANK PLC
                        </option>
                        <option value="STERLING BANK PLC">
                          STERLING BANK PLC
                        </option>
                        <option value="JAIZ BANK PLC">JAIZ BANK PLC</option>
                        <option value="TAJ BANK LIMITED">
                          TAJ BANK LIMITED
                        </option>
                        <option value="FSDH MERCHANT BANK LIMITED">
                          FSDH MERCHANT BANK LIMITED
                        </option>
                        <option value="RAND MERCHANT BANK">
                          RAND MERCHANT BANK
                        </option>
                        <option value="CORONATION MERCHANT BANK">
                          CORONATION MERCHANT BANK
                        </option>
                        <option value="FBN MERCHANT BANK">
                          FBN MERCHANT BANK
                        </option>
                        <option value="NOVA MERCHANT BANK LIMITED">
                          NOVA MERCHANT BANK LIMITED
                        </option>
                      </select>
                    </div>
                    <div className={`${styles.padding} col-md-4 form-group`}>
                      <label>Account Number</label>
                      <input
                        type="text"
                        className={`form-control`}
                        onChange={(e) => setAccountNumber(e.target.value)}
                      />
                    </div>

                    <div className={`${styles.padding} col-md-4 form-group`}>
                      <label style={{ visibility: "hidden" }}>
                        Submit Bank Info
                      </label>
                      <input
                        type="submit"
                        className={`btn ${styles.btns}  form-control`}
                        value="Submit"
                      />
                    </div>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankInfo;
