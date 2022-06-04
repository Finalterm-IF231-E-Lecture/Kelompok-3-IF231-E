import React, { useState } from "react";
import Susu from "../assets/other/susu.png";
import SnekBar from "../assets/other/snekbar.png";
import MineralWater from "../assets/other/mineralwater.png";
import Marjan from "../assets/other/marjan.png";
import Chips from "../assets/other/chips.png";
import Cola from "../assets/other/cola.png";
import BubbleGum from "../assets/other/bubblegum.png";
import Proman from "../assets/other/proman.png";
import "../styles.css";

export default function Supermarket(props) {
  const [foodImage, setFoodImage] = useState([
    Susu,
    SnekBar,
    MineralWater,
    Marjan,
    Chips,
    Cola,
    BubbleGum,
    Proman
  ]);

  function InventoryItemCard(properties) {
    return (
      <div className="inventory-card-div">
        <img
          className="gambar-supermarket"
          src={foodImage[properties.image - 1]}
          alt="GAMBAR"
        />
        <h1>{properties.username}</h1>
        <h1>{properties.stok}</h1>
      </div>
    );
  }

  return (
    <div id="inventory-div">
      <div id="inventory-header">
        <h1>List of items I have</h1>
        <button onClick={props.updateOpenInventory_OUT}>X</button>
      </div>
      <div id="inventory-content">
        {props.userInventory.map((elements) => (
          <InventoryItemCard
            username={elements[0]}
            stok={elements[1]}
            image={elements[2]}
          />
        ))}
      </div>
    </div>
  );
}
