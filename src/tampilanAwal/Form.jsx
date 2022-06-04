import React, { useState } from "react";

export default function Form(props) {
  const [username, setUsername] = useState("");
  const [prodi, setprodi] = useState("");

  const pilihprodi = [
    {
      id: 0,
      prodi: "Program Studi"
    },
    {
      id: 1,
      prodi: "Informatika",
      course: [
        ["Sistem Digital", "SENIN", 8, 12],
        ["Matematika Diskrit", "SELASA", 13, 17],
        ["Programming Fundamental", "KAMIS", 13, 17]
      ]
    },
    {
      id: 2,
      prodi: "Desain Komunikasi Visual",
      course: [
        ["Drawing Principles", "SENIN", 8, 12],
        ["History of Art and Design", "SELASA", 13, 17],
        ["Typhography Principles", "KAMIS", 13, 17]
      ]
    },
    {
      id: 3,
      prodi: "Komunikasi Strategis",
      course: [
        ["Introduction to Communication Science", "SENIN", 8, 12],
        ["Communication & Technology", "SELASA", 13, 17],
        ["Business Principle", "KAMIS", 13, 15]
      ]
    },
    {
      id: 4,
      prodi: "Manajemen",
      course: [
        ["Fundamental of Business", "SENIN", 8, 12],
        ["Microeconomics", "SELASA", 13, 17],
        ["Mathematic for Business", "KAMIS", 13, 17]
      ]
    },
    {
      id: 5,
      prodi: "Akuntansi",
      course: [
        ["English 1", "SENIN", 8, 12],
        ["Accounting Principles 1", "SELASA", 13, 17],
        ["Financial Mathematics", "KAMIS", 13, 17]
      ]
    },
    {
      id: 6,
      prodi: "Film dan Animasi",
      course: [
        ["Story Development", "SENIN", 8, 12],
        ["Creative Production", "SELASA", 13, 17],
        ["Visual Development", "KAMIS", 13, 17]
      ]
    }
  ];

  function changeState(e) {
    if (username === "" || prodi === "" || prodi === "Program Studi") {
      if (username !== "" && prodi === "Program Studi") {
        alert("Please enter your study program!");
        return;
      } else if (username === "" && prodi !== "Program Studi" && prodi !== "") {
        alert("Please enter your name!");
        return;
      } else {
        alert("Please enter your name and course of study!");
        return;
      }
    }
    e.target.value = true;
    props.change_name(username);
    props.change_prodi(prodi);

    for (let i of pilihprodi) {
      if (i.prodi === prodi) {
        props.change_course(i.course);
        break;
      }
    }

    props.onclick(e.target.value);
  }

  const handleInputName = (event) => setUsername(event.target.value);
  const handleInputprodi = (event) => setprodi(event.target.value);
  function submitForm(e) {
    e.preventDefault();
  }

  return (
    <div className="mt-2" id="login-form">
      <div className="d-flex flex-row justify-content-center">
        <form
          onSubmit={submitForm}
          className="d-flex flex-column justify-content-center"
        >
          <input
            className="form-control text-center w-auto customStyleBox mb-3"
            type="text"
            placeholder="Enter your Username"
            value={username}
            onChange={handleInputName}
            minLength={6}
            maxLength={15}
            required
          />

          <select
            username={prodi}
            id="choose-prodi"
            value={prodi}
            onChange={handleInputprodi}
            className="btn btn-outline-secondary mx-auto mt-3 mb-4 text-center w-auto customStyleBox"
          >
            {pilihprodi.map((j) => (
              <option
                id={j.id}
                key={j.id}
                value={j.prodi}
                onClick={handleInputprodi}
              >
                {j.prodi}
              </option>
            ))}
          </select>
          <button
            className="mx-auto mt-3 mb-4 btn btn-outline-primary btnHover w-auto customStyleBox"
            type="submit"
            value={props.value}
            onClick={changeState}
          >
            Game Start !
          </button>
        </form>
      </div>
    </div>
  );
}
