import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Navbar from "../Navbar";
import MiniNav from "../Navbar/MiniNav";
import { useSelector } from "react-redux";
import PrintButton from "../PrintButton";
import { Route } from "react-router-dom";
import Letter from "./Letter";

const Print = ({ history }) => {
  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo } = userDetails;

  useEffect(() => {}, [userInfo]);

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
          <div>
            <PrintButton id={"multiPage"} label={"Print multiplate pages"} />
            <Letter id={"multiPage"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Print;
