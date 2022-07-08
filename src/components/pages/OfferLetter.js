import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";
import Navbar from "../Navbar";
import MiniNav from "../Navbar/MiniNav";
import Offer from "../Offer";
import Agreement from "../Agreement";
import { Route } from "react-router-dom";

import {
  acceptTerms,
  rejectTerms,
  logout,
} from "../../actions/validationActions";
import Loading from "../Loading";
import swal from "sweetalert";
import { useHistory } from "react-router";

const OfferLetter = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo } = userDetails;
  const fname = userInfo && userInfo.firstName;
  const mname = userInfo && userInfo.secondName;
  const lname = userInfo && userInfo.lastName;
  const name = fname + " " + mname + " " + lname;

  const userAccept = useSelector((state) => state.userAccept);
  const { loading, success, error } = userAccept;

  const userReject = useSelector((state) => state.userReject);
  const { loading: loadingReject, error: errorReject } = userReject;

  const submitHandler = () => {
    const offeracceptance = "Accepted";
    const bvn = userInfo.bvn;
    dispatch(acceptTerms(bvn, name, offeracceptance));
  };
  const rejectHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once you reject, you no longer have access to this portal!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const offeracceptance = "Rejected";
        const bvn = userInfo.bvn;
        dispatch(rejectTerms(bvn, name, offeracceptance));
        dispatch(logout());
        history.push("/");
      } else {
      }
    });
  };

  useEffect(() => {
    if (success) {
      history.push("/nyif/bank-info");
    }
    if (!userInfo) {
      history.push("/");
    }
  }, [success, userInfo, history]);

  const ref = React.createRef();
  return (
    <div className={styles.contents}>
      <div className={styles.appGrid}>
        <Navbar />
        <div className={styles.contents}>
          <Route
            render={({ history }) => (
              <MiniNav history={history} title="Offer Letter" />
            )}
          />
          {/* <ReactToPdf targetRef={ref} filename="div-blue.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
          </ReactToPdf> */}
          <div className={`${styles.offer}`} ref={ref}>
            <Offer userInfo={userInfo} />
            <Agreement userInfo={userInfo} />
            <br />
            <br />

            <p>
              I have read and agree to the Terms and Conditions, Acceptance of
              this offer and agreement is subject to the Guarantor’s consent.
            </p>
            {loading && <Loading />}
            {loadingReject && <Loading />}
            {error && <div className="alert alert-danger">{error}</div>}
            {errorReject && (
              <div className="alert alert-danger">{errorReject}</div>
            )}
            <div className="row">
              <div className="col-md-4 d-grid gap-2">
                <button
                  type="button"
                  onClick={submitHandler}
                  className="btn btn-success"
                >
                  Accept
                </button>
              </div>
              <div className="col-md-4 d-grid gap-2">
                <button
                  type="button"
                  onClick={rejectHandler}
                  className="btn btn-danger"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferLetter;
