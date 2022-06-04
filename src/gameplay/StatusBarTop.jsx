import React, { useState, useEffect } from "react";
import Belajar from "../assets/assetsIcon/study.png";
import Main from "../assets/assetsIcon/play.png";
import Makan from "../assets/assetsIcon/eating.png";
import Tidur from "../assets/assetsIcon/sleep.png";
import "../App.css";

export default function StatusBarTop(props) {
  return (
    <div
      className="d-inline-flex p-3"
      id=""
      style={{
        backgroundColor: "#2e6566",
        borderRadius: "8px",
        boxShadow: "0px 0px 5px 2px black"
      }}
    >
      {props.progress.map((status) => (
        <div>
          <p className="">{status[0]}</p>
          <div className="m-0">
            <progress
              className="progress-bar m-1"
              value={status[1]}
              max="100"
              min="0"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
