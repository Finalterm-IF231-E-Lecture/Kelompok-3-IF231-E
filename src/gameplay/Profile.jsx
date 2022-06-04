import React, { useState } from "react";
import BGprofile from "../assets/assetsGame/background_profile.png";
import BoyProfile from "../assets/assetsGame/profile_boy.png";
import GirlProfile from "../assets/assetsGame/profile_girl.png";
import "../styles.css";

export default function Profile(props) {
  return (
    <div className="profile">
      <div
        id="profile-div"
        onClick={props.updateProfile}
        style={{
          backgroundImage: `url(${BGprofile})`,
          backgroundRepeat: "norepeat"
        }}
      >
        <img
          id="profile-foto"
          src={props.gender ? BoyProfile : GirlProfile}
          alt=""
        />
        <p id="profile-nim">00000060123</p>
        <h2 id="profile-username">{props.username}</h2>
        <p id="profile-jurusan">{props.prodi}</p>
        <p id="profile-tanggal">Angkatan 2021</p>
      </div>
    </div>
  );
}
