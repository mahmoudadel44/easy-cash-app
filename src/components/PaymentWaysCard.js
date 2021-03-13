import React from "react";
import "../styles/Home.css";

const PaymentWaysCard = ({ data }) => {
  return (
    <div class="media flex-row-reverse">
      <div className="">{data.paymentImg}</div>
      <div class="media-body text-right mr-3 transferways">
        <h6 className="purple">{data.header}</h6>
        <p className="">{data.explanation}</p>
      </div>
    </div>
  );
};

export default PaymentWaysCard;
