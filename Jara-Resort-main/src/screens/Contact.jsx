import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import Staff from "../assets/Staff.png";
import Img from "../assets/Frame 98.png";
import GroupBooking from "./home-sub-component/GroupBooking";

export default function Contact() {
  return (
    <>
      <GetTouch />
      <MapView />
    </>
  );
}
