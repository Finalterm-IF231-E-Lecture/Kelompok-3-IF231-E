import React, { useState } from "react";
import Character from "./Character";
import Form from "./Form";

export default function Frame(props) {
  return (
    <div id="login-frame">
      <Character gender={props.gender} switchGender={props.switchGender} />
      <Form
        value={props.value}
        onclick={props.onclick}
        username={props.username}
        prodi={props.name_prodi}
        course={props.course}
        change_name={props.change_name}
        change_prodi={props.change_prodi}
        change_course={props.change_course}
        changeApprove={props.changeApprove}
      />
    </div>
  );
}
