import React, { useState } from "react";
import "../styles.css";

export default function Goto(props) {
  const [button1, setButton1] = useState("Campus");
  const [button2, setButton2] = useState("Cafe");
  const [button3, setButton3] = useState("Supermarket");

  function changeLocation(e) {
    if (e.target.value == 1) {
      props.onclick(button1);
      // props.updateGoToSupermarket();;
      if (
        button1 !== "Supermarket" &&
        button2 !== "Supermarket" &&
        button3 !== "Supermarket"
      )
        props.updateGoToSupermarket_OUT();
      else {
        if (button1 === "Supermarket") props.updateGoToSupermarket_IN();
      }

      // Cafe
      if (button1 !== "Cafe" && button2 !== "Cafe" && button3 !== "Cafe")
        props.updateOpenCafe_OUT();
      else {
        if (button1 === "Cafe") props.updateOpenCafe_IN();
      }

      setButton1(props.studentLocation);
    } else if (e.target.value == 2) {
      props.onclick(button2);
      if (
        button1 !== "Supermarket" &&
        button2 !== "Supermarket" &&
        button3 !== "Supermarket"
      )
        props.updateGoToSupermarket_OUT();
      else {
        if (button2 === "Supermarket") props.updateGoToSupermarket_IN();
      }

      if (button1 !== "Cafe" && button2 !== "Cafe" && button3 !== "Cafe")
        props.updateOpenCafe_OUT();
      else {
        if (button2 === "Cafe") props.updateOpenCafe_IN();
      }

      setButton2(button1);
      setButton1(props.studentLocation);
    } else if (e.target.value == 3) {
      props.onclick(button3);
      if (
        button1 !== "Supermarket" &&
        button2 !== "Supermarket" &&
        button3 !== "Supermarket"
      )
        props.updateGoToSupermarket_OUT();
      else {
        if (button3 === "Supermarket") props.updateGoToSupermarket_IN();
      }

      if (button1 !== "Cafe" && button2 !== "Cafe" && button3 !== "Cafe")
        props.updateOpenCafe_OUT();
      else {
        if (button3 === "Cafe") props.updateOpenCafe_IN();
      }

      setButton3(button2);
      setButton2(button1);
      setButton1(props.studentLocation);
    }
  }

  return (
    <div
      id="left-goto"
      className="d-flex flex-column justify-content-center text-goto"
    >
      <div>
        <h3 id="left-judul1" className="ms-3 mt-5 judul">
          Lokasi saat ini : {props.studentLocation}
        </h3>
        <h3 id="left-judul2" className="ms-3 judul">
          Go To :{" "}
        </h3>
      </div>
      <div
        id="left-button"
        className="d-flex flex-column justify-content-center"
      >
        <button
          className="btn-secondary left-goto-button left-btnzoom button-place m-3 mb-0"
          onClick={changeLocation}
          value={1}
        >
          {button1}
        </button>
        <button
          className="btn-secondary left-goto-button left-btnzoom button-place m-3 mb-0"
          onClick={changeLocation}
          value={2}
        >
          {button2}
        </button>
        <button
          className="btn-secondary left-goto-button left-btnzoom button-place m-3 mb-4"
          onClick={changeLocation}
          value={3}
        >
          {button3}
        </button>
      </div>
    </div>
  );
}
