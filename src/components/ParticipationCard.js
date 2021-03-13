import React from "react";
import "../styles/Home.css";

const PaymentWaysCard = ({ participatedata }) => {
  return (
    <div className="text-center">
      <div className="mb-3">{participatedata.participationImg}</div>
      <h6 className="purple participationHeader mb-3">
        {participatedata.header}
      </h6>
      <p className="participationExplanation">{participatedata.explanation}</p>
    </div>
  );
};

export default PaymentWaysCard;
