import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";

import pool_img from "../assets/photos/pool.png";
import pool_2_img from "../assets/photos/pool_2.png";
import eat_img from "../assets/photos/eat.png";
import sun_Longer_img from "../assets/photos/sun_Lounger.png";
import villa_img from "../assets/photos/villa.png";
import villa_2_img from "../assets/photos/villa_2.png";
import pillow_fight_img from "../assets/photos/pillow_fight.png";
import dance_img from "../assets/photos/dance.png";
import spa_img from "../assets/photos/spa.png";
import beach_img from "../assets/photos/beach.png";
import DEN_img from "../assets/photos/DEN.png";
import snack_img from "../assets/photos/snack.png";
import beach_2_img from "../assets/photos/beach_2.png";
import bar_img from "../assets/photos/bar.png";
import bar_door_img from "../assets/photos/bar_door.png";
import beach_3_img from "../assets/photos/beach_3.png";
import pool_3_img from "../assets/photos/pool_3.png";
import sun_lounger_2_img from "../assets/photos/sun_lounger_2.png";
import garden_img from "../assets/photos/garden.png";
import villa_3_img from "../assets/photos/villa_3.png";
import portaments_img from "../assets/photos/portaments.png";
import loft_img from "../assets/photos/loft.png";
import room_img from "../assets/photos/room.png";
import floor_img from "../assets/photos/floor.png";
import balcony_img from "../assets/photos/balcony.png";
import ground_floor_img from "../assets/photos/ground_floor.png";
import first_floor_img from "../assets/photos/first_floor.png";
import standart_room_img from "../assets/photos/standart_room.png";
import family_cabins_img from "../assets/photos/family_cabins.png";
import family_cabins_2_img from "../assets/photos/family_cabins_2.png";
import table_tennis_img from "../assets/photos/tabele_tennis.png";
import play_area_img from "../assets/photos/play_area.png";
import business_retrea_img from "../assets/photos/business_retreat.png";
import bocce_img from "../assets/photos/bocce.png";
import proposals_img from "../assets/photos/proposals.png";
import proposals_2_img from "../assets/photos/proposals_2.png";
import beach_front_img from "../assets/photos/beach_front.png";
import from_the_sky_screen_img from "../assets/photos/from_the_sky_screen.png";
import villa_4_img from "../assets/photos/villa_4.png";

export default function Photos() {
  let allImg = [
    pool_img,
    pool_2_img,
    eat_img,
    sun_Longer_img,
    villa_img,
    villa_2_img,
    pillow_fight_img,
    dance_img,
    spa_img,
    beach_img,
    DEN_img,
    snack_img,
    beach_2_img,
    bar_img,
    bar_door_img,
    beach_3_img,
    pool_3_img,
    sun_lounger_2_img,
    garden_img,
    villa_3_img,
    portaments_img,
    loft_img,
    room_img,
    floor_img,
    balcony_img,
    ground_floor_img,
    first_floor_img,
    standart_room_img,
    family_cabins_img,
    family_cabins_2_img,
    table_tennis_img,
    play_area_img,
    business_retrea_img,
    bocce_img,
    proposals_img,
    proposals_2_img,
    beach_front_img,
    from_the_sky_screen_img,
    villa_4_img,
  ];
  let viewAllImg = allImg.map((img) => {
    return (
      <li>
        <img src={img} />
      </li>
    );
  });
  return (
    <>
      <div className="components_section">
        <div
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="1000"
          style={{ color: "#fff", fontSize: 40 }}
          className="hero_heading"
        >
          Photos
        </div>
      </div>
      <main className="section_content photos">
        <ul className="photos_flex" style={{ listStyleType: "none" }}>
          {viewAllImg}
        </ul>
      </main>

      <GetTouch />
      <MapView />
    </>
  );
}
