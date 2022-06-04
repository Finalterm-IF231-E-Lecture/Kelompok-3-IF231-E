import React, { useEffect, useState } from "react";
import "../styles.css";
import Cafe from "./Cafe";

import BoyEat from "../assets/assetsChar/boyeating.png";
import GirlEat from "../assets/assetsChar/girleating.png";

import BoyPlay from "../assets/assetsChar/boyplaying.png";
import GirlPlay from "../assets/assetsChar/girlplaying.png";

import BoySleep from "../assets/assetsChar/boysleeping.png";
import GirlSleep from "../assets/assetsChar/girlsleeping.png";

import BoyStudy from "../assets/assetsChar/boystudying.png";
import GirlStudy from "../assets/assetsChar/girlstudying.png";

import BoyNormal from "../assets/assetsChar/boy.png";
import GirlNormal from "../assets/assetsChar/girl.png";

export default function Student(props) {
  function studentRegards() {
    if (props.hour >= 0 && props.hour <= 10)
      return `Good Morning, ${props.username}`;
    if (props.hour >= 11 && props.hour <= 15)
      return `Good Afternoon, ${props.username}`;
    if (props.hour >= 16 && props.hour <= 18)
      return `Good Evening, ${props.username}`;
    if (props.hour >= 19 && props.hour <= 24)
      return `Good Night, ${props.username}`;
  }

  useEffect(() => {
    setAnimasiStudent(props.statusStudent);
  }, [props.statusStudent]);

  const [animasiStudent, setAnimasiStudent] = useState(props.statusStudent);

  function changeAnimasi() {
    if (props.gender) {
      if (animasiStudent === "normal") {
        return BoyNormal;
      } else if (animasiStudent === "belajar") {
        return BoyStudy;
      } else if (animasiStudent === "makan") {
        return BoyEat;
      } else if (animasiStudent === "tidur") {
        return BoySleep;
      } else if (animasiStudent === "main") {
        return BoyPlay;
      }
    } else {
      if (animasiStudent === "normal") {
        return GirlNormal;
      } else if (animasiStudent === "belajar") {
        return GirlStudy;
      } else if (animasiStudent === "makan") {
        return GirlEat;
      } else if (animasiStudent === "tidur") {
        return GirlSleep;
      } else if (animasiStudent === "main") {
        return GirlPlay;
      }
    }
  }

  return (
    <div>
      <div className="text-regards">
        <h1 id="center-nama-pemain ">{studentRegards()}</h1>
        <div id="center-notifikasi">
          <h1>{props.status}</h1>
        </div>
      </div>
      <img id="center-gambar-pemain" src={changeAnimasi()} alt="" />
      {props.inCafe ? (
        <Cafe
          updateOpenCafe={props.updateOpenCafe}
          switchLeft_Cafe={props.switchLeft_Cafe}
          switchRight_Cafe={props.switchRight_Cafe}
          cafeItemList={props.cafeItemList}
          indexItemCafe={props.indexItemCafe}
          buyDrinks={props.buyDrinks}
        />
      ) : null}
    </div>
  );
}
