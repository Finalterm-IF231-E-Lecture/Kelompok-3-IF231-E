import React, { useState, useEffect } from "react";
import "../styles.css";

export default function Waktu(props) {
  return (
    <div
      className="container-jam"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "4px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth > 1040 ? "row" : "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1
          style={{
            fontSize: window.innerWidth > 1040 ? "2.0rem" : "1.5rem",
            marginRight: "10px",
            color:
              props.listHari[props.currentHari] === "MINGGU" ? "red" : "black"
          }}
        >
          {props.listHari[props.currentHari]}
        </h1>
        <div className="flex-item jam-waktu p-2">
          <h3
            style={{
              fontSize: window.innerWidth >= 1100 ? "25px" : "18px",
              marginBottom: "10px"
            }}
          >
            {props.hour < 10 ? "0" + props.hour : props.hour} :{" "}
            {props.minute < 10 ? "0" + props.minute : props.minute}
          </h3>
        </div>
      </div>
    </div>
  );
}
