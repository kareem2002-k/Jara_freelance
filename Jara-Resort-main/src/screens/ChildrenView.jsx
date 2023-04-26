import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import children from "../assets/children.png";
import childrenContent from "../assets/childrenContent.png";
import Img3 from "../assets/activities/image 19.png";
import childrenParties from "../assets/childrenParties.png";
import GroupBooking from "./home-sub-component/GroupBooking";

export default function ChildrenView() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
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
          Children
        </div>
      </div>
      <div
        style={{ justifyContent: "center", alignItems: "center" }}
        className="moments_jara_pic_show"
      >
        <img src={children} alt="children" />
      </div>
      <div
        style={{ flexDirection: "row-reverse" }}
        className="resort_history_row"
      >
        <div className="resort_history_row_img">
          <img
            style={{ objectFit: "contain" }}
            src={childrenContent}
            alt="Img"
          />
        </div>
        <div
          style={{ flexDirection: "column" }}
          className="resort_history_row_content"
        >
          <div className="para">
            Jara Beach Resort is child-friendly - we love to create memorable
            experiences for the little ones. In order to be fully prepared ahead
            of your visit, please do note the following:
          </div>
          <b style={{ margin: "1em 0" }}>POWER GUIDELINES</b>
          <li className="para">
            Museyo has no grid power. We run on a mix of ‘big gen’, ‘small gen’,
            solar, wind turbine and inverter batteries. All lights and plugs for
            small devices will run around the clock.
          </li>
          <li className="para">
            Air-Conditioners and Water Heaters will operate between the
            following times for your comfort:5pm-7pm and 9pm – 10am
          </li>
          <b style={{ margin: "1em 0" }}>EQUIPMENT​</b>
          <li className="para">
            We provide children's cots / travel beds and bath tubs for use for
            little ones up to five years old. These must be requested in advance
            and are subject to availability.
          </li>
          <li className="para">
            We provide highchairs for meal times. These must be requested in
            advance and are subject to availability.
          </li>
          <li className="para">
            Mosquito nets are provided for cot/ bed use. These are allocated per
            room, and may be used outdoors also, but must be left on departure.
          </li>
          <b style={{ margin: "1em 0" }}>FOOD</b>
          <li className="para">
            For liability reasons, we do not provide food for children under two
            years old. Refrigeration is provided in the kitchen, please give all
            baby food/ milk to your host on arrival.
          </li>
          <li className="para">
            For youngsters between two and five years old, food is provided for
            free in line with our booking information.
          </li>
          <li className="para">
            Mosquito nets are provided for cot/ bed use. These are allocated per
            room, and may be used outdoors also, but must be left on departure.
          </li>
          <b style={{ margin: "1em 0" }}>SWIMMING POOL / GAMES</b>
          <li className="para">
            We provide a limited number of outdoor and pool games for children's
            use. Children must be supervised at all times while playing and when
            using the swimming pool.
          </li>
          <li className="para">
            A sandpit is provided with clean/ sieved Museyo sand.
          </li>
        </div>
      </div>

      <div className="resort_history_row">
        <div className="resort_history_row_img">
          <img src={childrenParties} alt="Img" />
        </div>
        <div
          style={{ marginTop: "10em" }}
          className="resort_history_row_content"
        >
          <div className="para">
            <b>Children’s Parties</b>
            <div className="para">
              Jara Beach Resort provides the PERFECT premium children's party
              experience. Ideal for up to 70 guests (including families and
              nannies), with options for day visits, overnight. External
              services such as cakes and bouncy castles can be organised on
              request. Contact our bookings team to discuss your requirements.
            </div>
          </div>
        </div>
      </div>

      <GroupBooking />
      <GetTouch />
      <MapView />
    </>
  );
}
