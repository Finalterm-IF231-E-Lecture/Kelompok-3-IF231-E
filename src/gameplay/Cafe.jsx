import React, { useState } from "react";
import MilkShake from "../assets/other/croissant.png";
import HotCoffee from "../assets/other/hotcoffee.png";
import "../styles.css";

export default function Cafe(props) {
  const [imageDrinks, setImageDrinks] = useState([MilkShake, HotCoffee]);

  return (
    <div id="cafe-div">
      <h1 className="fw-bold text-cafe">Items</h1>
      <div id="cafe-subdiv">
        <img
          src={imageDrinks[props.indexItemCafe]}
          style={{ borderRadius: "50%" }}
          alt="DRINKS"
        />
        <div id="cafe-choose-widget">
          <h1 className="info-barang-cafe">
            {props.cafeItemList[props.indexItemCafe][0]}
          </h1>
          <h1 className="info-barang-cafe">
            Rp. {props.cafeItemList[props.indexItemCafe][1]}
          </h1>
          <div id="cafe-carousel">
            <button
              className="button-geser-cafe buttonL"
              onClick={props.switchLeft_Cafe}
            >
              &lt;
            </button>
            <button onClick={props.buyDrinks} className="button-buy-drinks buy">
              BUY
            </button>
            <button
              className="button-geser-cafe buttonR"
              onClick={props.switchLeft_Cafe}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      {/* <div id="kafe-carousel">
        <button className="button-geser-kafe" onClick={props.geserKiri_Kafe}>
          left
        </button>
        <div id="kafe-menu">
          <img src="" alt="GAMBAR" />
          <h1 className="info-barang-kafe">
            {props.daftarBarangKafe[props.indexItemCafe][0]}
          </h1>
          <h1 className="info-barang-kafe">
            {props.daftarBarangKafe[props.indexItemCafe][1]}
          </h1>
        </div>
        <button className="button-geser-kafe" onClick={props.geserKanan_Kafe}>
          right
        </button>
      </div> */}
    </div>
  );
}
