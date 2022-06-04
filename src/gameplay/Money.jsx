import React, { useState } from "react";
import NumberFormat from "react-number-format";
import "../styles.css";

export default function Money(props) {
  return (
    <div id="money" className="fw-bold fs-3 mb-3">
      Sisa Uang :{" "}
      <NumberFormat
        value={props.money}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rp. "}
        suffix={".00"}
      />
    </div>
  );
}
