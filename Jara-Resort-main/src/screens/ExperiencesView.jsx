import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import activities from "../assets/experiences/Activities.png";
import inclusive from "../assets/experiences/all-inclusive.png";
import children from "../assets/experiences/Children.png";
import boat from "../assets/experiences/transport.png";
import request from "../assets/experiences/special-request.png";
import premium from "../assets/experiences/premium-collection.png";
import menu from "../assets/experiences/Menus.png";
import club from "../assets/experiences/club-jara.png";
import photoshoot from "../assets/experiences/villa_4.png";
import content_creators from "../assets/experiences/photo2.png";
import { Link } from "react-router-dom";

export default function ExperiencesView() {
  return (
    <>
      <div className="components_section">
        <div
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="1000"
          style={{ color: "#fff", fontSize: 60, textAlign: "center" }}
          className="hero_heading"
        >
          Experiences
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
          Today's moments are tomorrow's memories. Want to make your stay at Jara even more
          memorable? You've come to the right page. Our massage services and unique beachside dining
          experiences are shared here.
        </div>
      </div>

      <div className="experience_flex section_content">
        <Link to="/activities" className="experience_flex_item">
          <img src={activities} alt="activities" />
          <h5>Activities</h5>
        </Link>
        <Link to="/all-inclusive" className="experience_flex_item">
          <img src={inclusive} alt="activities" />
          <h5>All-Inclusive</h5>
        </Link>
        <Link to="/children" className="experience_flex_item">
          <img src={children} alt="activities" />
          <h5>Children</h5>
        </Link>
        <Link to="/boat-transport" className="experience_flex_item">
          <img src={boat} alt="activities" />
          <h5>Boat Transport</h5>
        </Link>
        <Link to="/special-requests" className="experience_flex_item">
          <img src={request} alt="activities" />
          <h5>Special Request</h5>
        </Link>

        <Link to="/premium-collection" className="experience_flex_item">
          <img src={premium} alt="activities" />
          <h5>Premium Collection</h5>
        </Link>

        <Link to="/menus" className="experience_flex_item">
          <img src={menu} alt="activities" />
          <h5>Menus ( Overnight Guest )</h5>
        </Link>

        <Link to="/photoshoots" className="experience_flex_item">
          <img src={photoshoot} alt="activities" />
          <h5>Photoshoots</h5>
        </Link>

        <Link to="/content-creators" className="experience_flex_item">
          <img src={content_creators} alt="activities" />
          <h5>Content Creators</h5>
        </Link>

        <div className="experience_flex_item">
          <img src={club} alt="activities" />
          <h5>Club Jara</h5>
        </div>
      </div>

      <GetTouch />
      <MapView />
    </>
  );
}
