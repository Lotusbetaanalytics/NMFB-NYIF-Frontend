import React, { useEffect } from 'react'
import img1 from '../assets/productmanager.png'
import img2 from '../assets/hoc.png'
import { useHistory } from 'react-router';

const Offer = ({ userInfo }) => {
    const history = useHistory();
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    date = mm + dd + yyyy;
    var today
    var objToday = new Date(),
        weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayOfWeek = weekday[objToday.getDay()],
        domEnder = function () { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th" }(),
        dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear();
    today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

    useEffect(() => {
        if (!userInfo) {
            history.push("/")
        }
    }, [userInfo, history])

    let username;
    const name = userInfo && userInfo.fullName
    if (!name) {
        const fname = userInfo && userInfo.firstName;
        const mname = userInfo && userInfo.secondName;
        const lname = userInfo && userInfo.lastName;
        username = fname + " " + mname + " " + lname;

    } else {
        username = userInfo && userInfo.fullName
    }


    return (
        <div>
            <h5>NIGERIA YOUTH INVESTMENT FUND (NYIF) - LOAN OFFER LETTER</h5>
            <h6>
                <b className="text-danger">REFERENCE NO: NMFB/NYIF/{date}/{userInfo && userInfo.id}           &nbsp;&nbsp;&nbsp; DATE: {today}</b>
            </h6>
            <p>Customer Name : {userInfo && userInfo.category === "Individual" ? username : username}</p>
            <p>Address : {userInfo && userInfo.address}</p> <br />
            <p>Dear Sir/Ma,</p>
            <h6>
                <b>OFFER OF {userInfo && userInfo.category === "Individual" ? "INFORMAL" : "FORMAL"} BUSINESS ENTERPRISES LOAN FACILITY (NYIF)</b>
            </h6>
            <p>
                We refer to your application for a Formal Business Enterprises
                Loan facility under the NIGERIA YOUTH INVESTMENT FUND (NYIF)
                Intervention Scheme and are pleased to inform you that the
                Management of NIRSAL Microfinance Bank Ltd (hereinafter referred
                to as ‘the bank’) has approved the sum of{" "}
                <b className="text-danger">{Number(userInfo && userInfo.approvedLoanAmount).toLocaleString("en-GB", { style: "currency", currency: "NGN", minimumFractionDigits: 2 })}</b>,
                subject to the following terms and conditions:
            </p>
            <h6>
                <b>BORROWERS NAME:</b> {userInfo && userInfo.category === "Individual" ? username : username}
            </h6>
            <h6>
                <b>LENDER:</b> NIRSAL Microfinance Bank Ltd
            </h6>
            <h6>
                <b>FACILITY TYPE:</b> Nigerian Youth Investment Fund
            </h6>
            <h6>
                <b>PURPOSE:</b> To Finance Working Capital Requirements
            </h6>
            <h6>
                <b>APPROVED LOAN AMOUNT:</b>{" "}
                <b className="text-danger">{Number(userInfo && userInfo.approvedLoanAmount).toLocaleString("en-GB", { style: "currency", currency: "NGN", minimumFractionDigits: 2 })}</b>
            </h6>
            <h6>
                <b>INTEREST RATE AND OTHER CHARGES:</b> 4% one off facility
                approval fee (will be deducted on disbursement)
                <br />
                1% interest per annum to be charged in the first year
                <br />
                5% interest per annum to be charged 1 (one) year after
                disbursement till maturity (subject to money market condition)
            </h6>
            <h6>
                <b>REPAYMENT STRUCTURE:</b> Fixed amount per month (covering both
                principal and interest)
            </h6>
            <h6>
                <b>TENOR:</b> 60 months from Disbursement Date.
            </h6>
            <h6>
                <b>MORATORIUM:</b> 12 months moratorium on both principal &
                interest
            </h6>
            <h6>
                <b>COLLATERAL: </b>
                1. Global Standing Instruction (GSI)
                <br />
                2. Moveable Assets where applicable
            </h6>
            <p>
                <b>Set-off Clause:</b>
            </p>
            <p>
                The Borrower consents that the Bank shall, without notice or
                demand, apply any credit balance (whether then due), to which the
                borrower is at the time beneficially entitled to in any account
                with the Bank and/or with any other bank/other financial
                institutions, in (or towards satisfaction of any sum then due and
                payable (but unpaid) by the Borrower to the Bank under this
                Agreement.
            </p>
            <p>
                <b>Global Standing Instruction </b>
            </p>
            <p>
                The Bank shall have the right to activate the Global Standing
                Instruction and debit the Borrower’s account in any financial
                institution where the Borrower fails or neglects to repay on the
                due date.
            </p>
            <p>
                <b>
                    <u>II. CONDITION PRECEDENT FOR DRAWDOWN ON LOAN FACILITY</u>
                </b>
            </p>
            <ul>
                <li>
                    Indication of your acceptance of this offer Letter and Loan
                    agreement alongside the stated terms and conditions by clicking
                    the accept button.{" "}
                </li>
                <li>
                    Evidence of Insurance over the loan facility, provided by an
                    Insurance company approved by the bank, with NIRSAL Microfinance
                    bank noted as first loss payee. The insurance premium shall be
                    renewed annually throughout the life span of the facility.
                </li>
                <li>Receipt of signed guarantor form where applicable</li>
                <li>
                    Receipt of executed and confirmation of collateral document{" "}
                </li>
                <li>Clean Credit Bureau report</li>
                <li>Domiciliation of sales Proceeds</li>
            </ul>
            <p>We look forward to a mutually beneficial relationship.</p>
            <p>Yours Faithfully,</p>
            <p>
                <b>For: NIRSAL MICROFINANCE BANK</b>
            </p>
            <div className="row">
                <div className="col-md-6">
                    <img src={img1} alt="Signature" width="100" />
                    <p><b>PRODUCT MANAGER</b></p>
                </div>
                <div className="col-md-6">
                    <img src={img2} alt="Signature" width="100" />
                    <p><b>HEAD, CREDIT / MARKETING MANAGER</b></p>
                </div>
            </div>
            <h6><b><u>MEMORANDUM OF ACCEPTANCE</u></b></h6>
            <p>I, <b>{userInfo && userInfo.Name}</b> have read this Offer Letter and the loan agreement and fully understand it.
                I am pleased to willingly accept the Offer of {Number(userInfo && userInfo.approvedLoanAmount).toLocaleString("en-GB", { style: "currency", currency: "NGN", minimumFractionDigits: 2 })} Nigerian Youth Investment Fund (NYIF),
                along with the Terms and Conditions contained, herein, in the offer letter and the loan agreement dated <b>{today} </b>and signed by me.
            </p>
            <p><b>NAME:</b> {userInfo && userInfo.category === "Individual" ? username : username}</p>
            <p><b>SIGNATURE/DATE:</b> {today}</p>

        </div>
    )
}

export default Offer
