import React, { useState } from "react";
import NumberFormat from "react-number-format";
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
  var counter = 0;

  function callBuyItem(callback, itemName) {
    callback(itemName);
  }

  function ItemCard(properties) {
    return (
      <div className="supermarket-item-card buyfood">
        <img
          className="image-supermarket"
          src={properties.image}
          alt="GAMBAR"
        />
        <h1 className="supermarket-username-item">{properties.username}</h1>
        <h1 className="supermarket-ptice-item">
          Harga :{" "}
          <NumberFormat
            value={properties.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rp. "}
            suffix={".00"}
          />
        </h1>
        <h1 className="supermarket-stok-item fw-bold">
          Stok : {properties.stok}
        </h1>
        <button onClick={() => properties.buyItem(properties.username)}>
          Beli
        </button>
      </div>
    );
  }

  return (
    <div id="supermarket-div">
      <div id="supermarket-header" className="sp">
        <h1>Welcome to Supermarket</h1>
        <h4>List of Stuff : </h4>
        <button onClick={props.updateOpenSupermarketMenu}>X</button>
      </div>
      <div id="frame-barang">
        {props.supermarketItemList.map((obj) => (
          <ItemCard
            username={obj[0]}
            harga={obj[1]}
            stok={obj[2]}
            image={foodImage[obj[3] - 1]}
            buyItem={props.buyItem}
          />
        ))}
      </div>
    </div>
  );
}
