import React, { useState } from "react";
import "../css/Failed.css";

export default function FailedGame(props) {
  return (
    <div
      style={{
        backgroundColor: "",
        height: "70vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1 className="mb-3 fw-bold h1do">YOU GOT DROP OUT!</h1>
      <h1>Kamu kurang belajar, Semoga sukses di lain waktu.</h1>
      <img src="#" alt="" />
      <button onClick={props.restartGame} className="mt-5 btn btn-danger">
        Play Again
      </button>
    </div>
  );
}
