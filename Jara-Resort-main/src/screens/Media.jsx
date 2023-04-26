import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import RoomPic from "../assets/rooms/Villa.png";

const HotelIframe = ({ style }) => {
  return (
    <iframe
      width="560"
      height="315"
      style={{ height: "100%", width: "100%" }}
      src="https://www.youtube.com/embed/PIEtOBJd5R8"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};
export default function Media() {
  return (
    <>
      <div className="components_section">
        <div
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="1000"
          style={{ color: "#fff", fontSize: 40, textAlign: "center" }}
          className="hero_heading"
        >
          Media <br />
          (Videos & Articles)
        </div>
      </div>
      <div className="components_section_content">
        <div
          style={{
            color: "#787878",
            width: "100%",
            maxWidth: "800px",
            margin: "0px auto",
            padding: "2em 0em",
          }}
          className="para"
        >
          JARA BEACH RESORT is proud to have gained some great online exposure
          since opening in November 2019. Find some links below:
        </div>
      </div>

      <div
        style={{ justifyContent: "space-between" }}
        className="hotel_view_video_container"
      >
        <div className="experience_vide">
          <HotelIframe />
        </div>
        <div className="experience_vide">
          <HotelIframe />
        </div>
        <div className="experience_vide">
          <HotelIframe />
        </div>
        <div className="experience_vide">
          <HotelIframe />
        </div>
        <div className="experience_vide">
          <HotelIframe />
        </div>
        <div className="experience_vide">
          <HotelIframe />
        </div>
        <div className="experience_vide">
          <HotelIframe />
        </div>
      </div>

      <GetTouch />
      <MapView />
    </>
  );
}
