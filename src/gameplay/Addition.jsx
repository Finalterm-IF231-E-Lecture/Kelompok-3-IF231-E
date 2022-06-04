import React, { useState } from "react";
import "../styles.css";

export default function Tambahan(props) {
  return (
    <div className="row right-bottom-menu">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-secondary tombol-menu-tambahan tombol-supermarket btnHover mt-4"
            onClick={props.updateOpenSupermarketMenu}
          >
            Buy Stuff on Super Market
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button
            className="btn btn-secondary tombol-menu-tambahan btnHover"
            onClick={props.updateProfile}
          >
            Profile
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button
            className="btn btn-secondary tombol-menu-tambahan btnHover"
            onClick={props.updatePM}
          >
            Course
          </button>
        </div>
      </div>
    </div>
  );
}
