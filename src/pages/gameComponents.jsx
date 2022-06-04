import React, { useState } from "react";

import Frame from "../tampilanAwal/Frame";
import ModeMain from "../gameplay/ModeMain";
import DeathGameOver from "../tampilanAwal/DeathGame";
import FailedGameOver from "../tampilanAwal/FailedGame";

import "../css/tampilanAwal.css";

function MulaiMain(props) {
  const [gameMenu, setGameMenu] = useState(false);
  const [gameName, setGameName] = useState("");
  const [gameprodi, setGameprodi] = useState("");
  const [course, setCourse] = useState([]);
  const [gender, setGender] = useState(true);

  const [isDead, setIsDead] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const updateSetIsDead = () => {
    setIsDead(true);
  };
  const updateSetIsFailed = () => {
    setIsFailed(true);
  };

  const restartGame = () => {
    setIsDead(false);
    setIsFailed(false);
  };

  function changeGameMenu(e) {
    setGameMenu(e);
  }

  function changeName(e) {
    setGameName(e);
  }

  function changeprodi(e) {
    setGameprodi(e);
  }

  function changeCourse(e) {
    setCourse(e);
  }

  function switchGender(e) {
    setGender(e);
  }

  return (
    <div>
      {isDead ? (
        <DeathGameOver restartGame={restartGame} />
      ) : isFailed ? (
        <FailedGameOver restartGame={restartGame} />
      ) : gameMenu ? (
        <ModeMain
          username={gameName}
          prodi={gameprodi}
          course={course}
          gender={gender}
          updateSetIsDead={updateSetIsDead}
          updateSetIsFailed={updateSetIsFailed}
        />
      ) : (
        <Frame
          value={gameMenu}
          onclick={changeGameMenu}
          username={gameName}
          name_prodi={gameprodi}
          course={course}
          change_name={changeName}
          change_prodi={changeprodi}
          change_course={changeCourse}
          gender={gender}
          switchGender={switchGender}
        />
      )}
    </div>
  );
}

export default MulaiMain;
