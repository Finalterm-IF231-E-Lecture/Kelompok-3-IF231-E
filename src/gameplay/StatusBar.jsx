import React, { useState, useEffect } from "react";
import Belajar from "../assets/assetsIcon/study.png";
import Main from "../assets/assetsIcon/play.png";
import Makan from "../assets/assetsIcon/eating.png";
import Tidur from "../assets/assetsIcon/sleep.png";
import "../styles.css";

export default function Status(props) {
  return (
    <div
      className="p-3"
      id="right-status-frame"
      style={{
        backgroundColor: "#105378",
        borderRadius: "8px",
        boxShadow: "0px 0px 5px 2px black"
      }}
    >
      {props.progress.map((status) => (
        <div className="progress-div d-flex flex-row aktivitas">
          <button
            onClick={() => props.doAction(status[0])}
            disabled={status[status.length - 1]}
            className="player-action-button btn btn-light w-25 m-2"
          >
            <img
              className="logoStatus w-25"
              src={
                status[0] === "Makan"
                  ? Makan
                  : status[0] === "Main"
                  ? Main
                  : status[0] === "Tidur"
                  ? Tidur
                  : status[0] === "Study"
                  ? Belajar
                  : null
              }
              alt=""
            />
            {/* {status[0]} */}
          </button>
          <progress className="progress-bar" value={status[1]} max="100" />
        </div>
      ))}
    </div>
  );
}
