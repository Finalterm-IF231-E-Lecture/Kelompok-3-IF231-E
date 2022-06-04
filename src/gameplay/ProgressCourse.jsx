import React, { useState, useEffect } from "react";
import Warning from "../assets/assetsIcon/warning.png";
import "../styles.css";

export default function ProgressCourse(props) {
  const [course, setCourse] = useState(props.course);
  const [major, setMajor] = useState(props.major);

  function ProgressBarCourse(props) {
    return (
      <div className="progress-widget">
        <h1 style={{ color: "black" }}>
          {props.name[0]}{" "}
          <span
            style={{
              fontWeight: "bold"
            }}
          >
            (Week {props.val} / 14)
          </span>
        </h1>
        <progress className="progress-bar" value={props.val} max="14" />
      </div>
    );
  }

  return (
    <div
      id="progress-matkul-div "
      className="text-course"
      onClick={props.updatePM}
    >
      <h1 style={{ fontSize: "2rem" }}>Program Studi</h1>
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}
      >
        {major}
      </h1>
      <div id="progress-bar-wrapper">
        {props.course.map((courseName) => (
          <ProgressBarCourse name={courseName[0]} val={courseName[1]} />
        ))}
      </div>
      <div id="warning-absensi">
        <img
          src={Warning}
          style={{
            height: "70px",
            width: "70px"
          }}
          alt=""
        />
        <h1 style={{ fontSize: "25px" }}>REMINDER</h1>
        <h1 style={{ fontSize: "16px" }}>
          Graduation requirements are attendance above 85%
        </h1>
      </div>
    </div>
  );
}
