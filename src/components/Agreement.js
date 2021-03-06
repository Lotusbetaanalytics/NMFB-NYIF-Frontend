import React, { useEffect } from "react";
import img1 from "../assets/productmanager.png";
import img2 from "../assets/hoc.png";
import { useHistory } from "react-router";

const Agreement = ({ userInfo }) => {
  const history = useHistory();
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);
  var today;
  var objToday = new Date(),
    weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = (function () {
      var a = objToday;
      if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
      a = parseInt((a + "").charAt(1));
      return 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th";
    })(),
    dayOfMonth =
      today + (objToday.getDate() < 10)
        ? "0" + objToday.getDate() + domEnder
        : objToday.getDate() + domEnder,
    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear();
  today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

  let username;

  const name = userInfo && userInfo.fullName;
  if (!name) {
    const fname = userInfo && userInfo.firstName;
    const mname = userInfo && userInfo.secondName;
    const lname = userInfo && userInfo.lastName;
    username = fname + " " + mname + " " + lname;
  } else {
    username = userInfo && userInfo.fullName;
  }
  return (
    <>
      <h5 className="text-center">
        <b>NYIF LOAN AGREEMENT</b>
      </h5>
      <p>
        THIS LOAN AGREEMENT is made the <b className="text-danger">{today}</b>{" "}
        <b>BETWEEN</b> NIRSAL MICROFINANCE BANK LIMITED, a limited liability
        company incorporated in Nigeria and licensed by the Central Bank of
        Nigeria as a National Microfinance Bank to carry on the business of
        Micro financing in Nigeria, and has its registered office at Plot
        103/104,No 1, Monrovia Street, Wuse 2, Abuja Nigeria (hereinafter
        referred to as either{" "}
        <b>
          <i>???the Bank??? or ???the Lender???</i>
        </b>{" "}
        and which expression shall where the context so admits include its
        successors-in-title and assigns) of the one part, AND
      </p>
      <p>
        AND
        {userInfo && userInfo.category === "Individual"
          ? username
          : username}{" "}
        of {userInfo && userInfo.residentialAddress} (hereinafter referred to as
        ???the Borrower??? and which expression shall where the context so admits
        include his/her personal representatives, heirs and assigns) of the
        other part; (each ???a party??? and collectively ???the parties???).
      </p>
      <p>
        <b>WHEREAS:</b>
      </p>
      <p>
        a. The Borrower applied for loan facility under the NIGERIA YOUTH
        INVESTMENT FUND (NYIF), in accordance with the provisions of the Central
        Bank of Nigeria (CBN) Guidelines for the operation of NIGERIA YOUTH
        INVESTMENT FUND (NYIF) (hereafter referred to as ???the Guidelines???).
      </p>
      <p>
        Sequel to the Borrower???s aforesaid application, the Bank offered the
        Borrower a Term loan facility of{" "}
        {Number(userInfo && userInfo.approvedLoanAmount).toLocaleString(
          "en-GB",
          {
            style: "currency",
            currency: "NGN",
            minimumFractionDigits: 2,
          }
        )}{" "}
        vide a letter titled{" "}
        <b>
          ???OFFER OF{" "}
          {userInfo && userInfo.category === "Individual"
            ? "INFORMAL"
            : "FORMAL"}{" "}
          BUSINESS ENTERPRISES LOAN FACILITY (NYIF)
        </b>{" "}
        and dated {today}, on the terms and conditions specified therein.
      </p>
      <p>
        b. The Borrower has accepted the Bank???s offer of the term loan facility,
        consequent upon which the parties agreed to execute this Loan Agreement
        on the terms and conditions herein contained.{" "}
      </p>
      <p>
        <b>Now this LOAN AGREEMENT WITNESSES as follows </b>
      </p>
      <p>1. The NYIF Credit Facility</p>
      <p>
        Subject to the terms and conditions of this Loan Agreement, the Bank
        hereby agrees to make available to the Borrower a Term loan facility of{" "}
        <b className="text-danger">
          {Number(userInfo && userInfo.approvedLoanAmount).toLocaleString(
            "en-GB",
            {
              style: "currency",
              currency: "NGN",
              minimumFractionDigits: 2,
            }
          )}
        </b>
        , pursuant to the Borrower???s application for a NYIF.{" "}
      </p>
      <p>
        1. Repayment Subject to the provisions hereunder, the Borrower shall
        repay the principal of the Loan in full, plus all accrued and unpaid
        interest thereon and all other outstanding Obligations.
      </p>
      <p>
        A. All payments to be made by the Borrower as Obligations on the NYIF
        shall be made without set off, recoupment, counterclaim or any other
        reduction. Except as otherwise expressly provided herein, all payments
        of the Obligations shall be made by the Borrower to the Bank and shall
        be made in Naira. [
      </p>
      <p>
        B. Repayment shall be a fixed amount, paid every month into the
        Borrower???s account domiciled with the Bank.
      </p>
      <p>
        C. The fixed repayment amount shall be a proportion of the Principal
        Loan amount and accrued interest.
      </p>
      <p>
        D. Where the Borrower???s account is unfunded on a due repayment date, the
        loan repayment shall be tagged as ???Past Due???.
      </p>
      <p>
        E. Repayment shall commence the month after (the completion of) the
        moratorium period.
      </p>
      <p>
        <b>2. Composition of Monthly Repayment</b>
      </p>
      <p>
        All repayment, payable with respect to each Repayment Date per month,
        shall equal the sum of the product of: <br />
        a. The Interest Rate, <br />
        b. The outstanding principal amount of the Loan on such date of payment,
        and <br />
        c. Any amount accrued and payable but not paid on any prior Repayment
        Date in respect of the Loan.
      </p>
      <p>
        <b>3. Default in Repayment</b>
      </p>
      <p>
        Where the Borrower fails or neglect to pay/fully pay a repayment amount
        on the due date, a warning notification will be sent to the Borrower for
        payment within five (5) business days. Consequent on the Borrower???s
        further failure or neglect to make repayment, the Bank shall have the
        right to activate the Global Standing Instruction and debit the
        borrowers account in any financial institution to repay he due loan, and
        or seize the Borrower???s assets in pursuant of its Loan Recovery process.
      </p>
      <p>
        <b>4. Borrower???s Covenants: </b>
      </p>
      <p>The Borrower makes the following covenants:</p>
      <ul>
        <li>
          I. The borrower consents and agrees to use the loan facility strictly
          and only for the purpose for which the loan was sought. The Bank shall
          retain the right to terminate the loan facility, withdraw all assets
          and institute an action for breach of contract, if it is determined
          that the loan facility has been diverted to, and for other purposes in
          variance to the purpose for which the loan was granted.
        </li>
        <li>
          The borrower shall not, without the prior written consent of the Bank,
          sell, transfer or otherwise dispose any of his/ her assets acquired
          with the loan obtained from the Bank while the loan is still in
          effect.{" "}
        </li>
        <li>
          III. The borrower shall not enter into a single transaction or a
          series of transactions (whether related or not) and whether voluntary
          or involuntary to sell, lease, transfer or otherwise dispose of the
          assets mentioned in (II).{" "}
        </li>
        <li>
          IV. Other than pursuant to this loan Facility or with the prior
          written consent of the Bank, he shall not incur or allow any financial
          indebtedness to remain outstanding.
        </li>
        <li>
          V. The borrower shall pay and discharge all taxes imposed upon him or
          his assets within the time period allowed under applicable law without
          incurring penalties.
        </li>
        <li>
          VI. The Borrower hereby undertakes to provide and execute all
          requisite security documents in furtherance of the loan facility.
        </li>
      </ul>
      <p>
        <b>5. Representations</b>
      </p>
      <p>
        The Borrower also makes the following representations and warranties
      </p>
      <p>
        <b>a. No default</b>
      </p>
      <p>
        (a) No event of default will result or may reasonably be expected to
        result from the making of the Loan transaction.
      </p>
      <p>
        <b>(b) No misleading information</b>
      </p>
      <p>
        All written information supplied by the Borrower is true, complete and
        accurate in all material respects as at the date it was given and is not
        misleading in any respect.
      </p>
      <p>
        <b>6. (1) Events of Default</b>
      </p>
      <p>
        Each of the events or circumstances set out hereunder is an Event of
        Default.
      </p>
      <p>
        <b>a. Non-payment/Part-payment</b>
      </p>
      <p>
        The Borrower does not pay or incompletely pays on the due date any
        amount payable pursuant to this Agreement.{" "}
      </p>
      <p>
        <b>b. Other obligations</b>
      </p>
      <p>
        The Borrower does not comply with any provision of this Agreement (other
        than those referred to in Clause a (Non-payment)).{" "}
      </p>
      <p>
        <b>c. Unlawfulness</b>
      </p>
      <p>
        It is or becomes unlawful for the Borrower not to perform any of his/her
        obligations under this Agreement.
      </p>
      <p>
        <b>d. Repudiation</b>
      </p>
      <p>
        The Borrower repudiates this Agreement or evidences an intention to
        repudiate this Agreement.
      </p>
      <p>
        <b>e. Material adverse change</b>
      </p>
      <p>
        Any event or circumstance occurs which the Bank reasonably believes may
        have a Material Adverse Effect on the repayment of the NYIF.
      </p>

      <p>
        <b>(2) Default Remedies </b>
      </p>
      <p>
        Following the notice of default, the borrower is expected to make
        complete payment, failure to do so, the bank will immediately initiate
        loan recovery process, which shall include but not limited to,
        confiscating the Borrower???s personal properties, taking ownership of the
        collateral(s) pledged, instituting an action for breach of contract,
        exercising lien over the Borrower???s assets with the Bank, among others.
        <br />
        The Borrower shall indemnify the Bank against all losses and expenses,
        which may be sustained or incurred as a consequence of the occurrence of
        an Event of Default. For this purpose, a certificate from the Bank as to
        the amount of any such loss or expense shall be final and conclusive,
        save in the case of a manifest error.
      </p>
      <p>
        <b>Waiver</b>
      </p>
      <p>
        To the extent that the Borrower may, in any suit, action or proceeding
        brought in connection with the exercise of the Default Remedies, be
        entitled to the benefit of any provision of law invalidating the
        exercise of the Default Remedies for any reason whatsoever, the Borrower
        hereby waives such benefit to the fullest extent permitted by law.{" "}
      </p>
      <p>
        <b>7. Set-off</b>
      </p>
      <p>
        (a) The Borrower consents and agrees that the Bank shall, without notice
        or demand, apply any credit balance (whether then due), to which the
        borrower is at the time beneficially entitled to in any account with the
        Bank and/or with any other bank/other financial institutions, in (or
        towards satisfaction of any sum then due and payable (but unpaid) by the
        Borrower to the Bank under this Agreement.
      </p>
      <p>
        <b>(b) No set-off by the Borrower </b>
      </p>
      <p>
        All payments to be made by the Borrower under this Agreement shall be
        calculated and be made without (and free and clear of any deduction for)
        set-off or counterclaim.
      </p>
      <p>
        <b>8. Limitation of Liability </b>
      </p>
      <p>
        The Borrower hereby exonerates the Bank from any liability that may
        arise as a result of the Bank complying with the Borrower???s instructions
        given over any form of electronic channel. The electronic channel shall
        include, but not limited to, emails, phone calls, facsimile, SMS.
      </p>
      <p>
        <b>9. Severance Clause</b>
      </p>
      <p>
        If, at any time, any term or provision of this Agreement shall in whole
        or in part be held to any extent to be illegal, invalid or unenforceable
        under any enactment or rule of law, that term or provision or part shall
        to that extent be deemed not to form part of this Agreement, and the
        enforceability of the remainder of this Agreement shall not in any way
        be affected or impaired.
      </p>
      <p>
        <b>10. Waivers</b>
      </p>
      <p>
        No failure to exercise, or any delay in exercising, on the part of the
        Bank, any right, power or remedy under this Agreement shall operate as a
        waiver of it, nor shall any single or partial exercise of any right,
        power or remedy preclude any further or other exercise or the exercise
        of any other right, power or remedy. The rights, powers and remedies
        provided in this Agreement are cumulative and not exclusive of any
        rights, powers or remedies provided by law.
      </p>
      <p>
        <b>11. Amendments </b>
      </p>
      <p>
        No amendment or variation of this agreement shall take effect unless it
        is in writing, signed by both parties.{" "}
        <u>
          However, the Bank reserves the right to review the rate charged on the
          loan amount as interest by issuing the Borrower not less five (5)
          Business Day notice.
        </u>
      </p>
      <p>
        <b>12. Counterparts</b>
      </p>
      <p>
        This Agreement may be executed in any number of counterparts, and this
        has the same effect as if the signatures on the counterparts were on a
        single copy of the Agreement.
      </p>
      <p>
        <b>13. Arbitration and dispute resolution</b>
      </p>

      <ul>
        <li>
          1. In the case of any dispute or disputes (a ???Dispute???) between the
          parties arising out of or relating to the construction, validity,
          performance or interpretation of this Agreement or the breach thereof,
          either party shall refer the Dispute to arbitration in accordance with
          the arbitral rules contained in the Arbitration & Conciliation Act,
          LFN 2004.{" "}
        </li>
        <li>
          Each party shall appoint an arbitrator and the two arbitrators so
          appointed shall request an independent third arbitrator.
        </li>
        <li>
          . If either party fails to appoint an arbitrator within five (5) days
          of receiving notice of the appointment of an arbitrator by the other
          party, such arbitrator shall at the request of that party be appointed
          by the President of the Nigerian Institute of Chartered Arbitrators;{" "}
        </li>
        <li>
          4. Each party shall bear its own costs and expenses (including
          attorneys' fees and disbursements) incurred in connection with the
          arbitration. All other costs and expenses attributable to the
          arbitration (including the fees of the third arbitrator) shall be
          allocated equally between the parties.{" "}
        </li>
        <li>
          5. There shall be no right of appeal or application to court, (save
          for the purposes of enforcement of any award of the arbitral panel),
          from the decision of the arbitration panel, as any award made by the
          arbitration panel shall be final, conclusive and binding upon the
          parties.{" "}
        </li>
      </ul>

      <p>
        <b>14. Insurance Cover</b>
      </p>
      <p>
        The Borrower shall adequately insure the loan amount with a reputable
        insurance company endorsed by the Banker???s nominated Insurance Broker.
        The Borrower shall retain an equivalent of 1% of the loan value towards{" "}
        <b>Insurance Premium payments </b> to satisfy the requirement for Credit
        Life Insurance.
      </p>
      <p>
        <b>15. Governing law</b>
      </p>
      <p>
        This loan Agreement shall be governed by and shall be construed in
        accordance with applicable laws of Nigeria.
      </p>
      <p>
        <b>16. Disclosure of Information</b>
      </p>
      <p>The Borrower hereby grants his/her consent to the Bank to</p>
      <ul>
        <li>
          I. Disclose information relating to his/her account and this loan
          transaction to authorized persons, including but not limited to Credit
          Bureaus, Regulatory Authorities, Law Enforcement Agencies, among
          others, and to cause to be publish and retain on the Credit Risk
          Management System of the Central Bank of Nigeria and Credit Bureaus
          all information relating to the Borrower???s status of indebtedness.
        </li>
        <li>
          II. Use acquired information to validate/advertise the Banks loan
          products and services.
        </li>
      </ul>
      <p>
        <b>IN WITNESS</b>
        <br /> whereof the Parties have executed this document on the date first
        above written.
      </p>
      <p>
        <b>SIGN AND DELIVERED</b>
        <br /> For and On Behalf of the within- named Bank
      </p>
      <div className="row">
        <div className="col-md-6">
          <img src={img1} alt="Signature" width="100" />
          <p>
            <b>PRODUCT MANAGER</b>
          </p>
        </div>
        <div className="col-md-6">
          <img src={img2} alt="Signature" width="100" />
          <p>
            <b>HEAD, CREDIT / MARKETING MANAGER</b>
          </p>
        </div>
      </div>
      <p>
        <b>SIGNED AND DELIVERED</b>
        &nbsp;by the Within named Borrower
      </p>
      {userInfo && userInfo.category === "Individual" ? username : username}
    </>
  );
};

export default Agreement;
