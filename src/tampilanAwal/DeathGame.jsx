import React, { useState } from "react";
import "../css/DeathGame.css";

export default function DeathGame(props) {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1 id="text">R.I.P</h1>
      <button onClick={props.restartGame} className=" btn btn-danger">
        Play Again
      </button>
    </div>
  );
}
