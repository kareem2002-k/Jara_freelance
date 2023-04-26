import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import Resort from "../assets/Jara Beach Resort - History .png";
import Img from "../assets/rooms/Loft.png";

export default function EventsBooking() {
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
          A Brief History
        </div>
      </div>
      <div className="components_section_content">
        <div
          style={{
            color: "#787878",
            width: "100%",
            maxWidth: "1300px",
            margin: "0px auto",
            padding: "2em 0em",
          }}
          className="para"
        >
          <img
            src={Resort}
            alt="Resort"
            style={{ width: "100%", height: "100" }}
          />
        </div>
      </div>

      <div className="resort_history_row">
        <div className="resort_history_row_img">
          <img src={Img} alt="Img" />
        </div>
        <div className="resort_history_row_content">
          <div className="para">
            Jara Beach Resort is co-founded and managed by husband-and-wife team
            Mark and Millie Slade. With a combined 30+ years in the hospitality
            industry, you can be sure every element has been considered to
            ensure the very best experience at Jara. The Slades came to the area
            in 2016 and leased a beach hut which became known as Lil Zanzibar,
            just five minutes walk from the Jara you know today. Little Zanzibar
            became a rustic home away from home - with many amazing beach days
            spent with family and friends. It was even the location where Millie
            said ‘yes!’. Beach days were always too short and the need to sleep
            comfortably was a problem that the couple wanted to solve. In 2019,
            a walk along the beach and ‘Chakaville’ was discovered - the annex
            extension of neighbouring hotel Chaka. <br />
            The vision was created and Jara was born. After 12 weeks of
            renovation, construction and general preparation, Jara welcomed its
            first guests on November 8th, 2019. Initially opening with six
            rooms, Jara operated for only 12 weeks before closing due to
            COVID-19. In June 2020 Jara reopened, later launching its three
            spacious family cabins in October, 2020. In December 2021 our villas
            opened. In April 2022 our 12th room - the Loft’ welcomed its first
            guests.
            <br />
            Jara’s mission remains; to provide the very best, safe and secure
            overnight, indulgent beach experience, responsibly ​
            <br />
            Jara Beach Resort is committed to being a responsible hospitality
            establishment. We operate fully 'off' the national grid and are
            working our way towards full sustainability. From solar technology
            to limited generator running time, Jara continues to balance
            environmentally-friendly best practice with providing the very best
            beach experience in Nigeria. We welcome all guests to help be a part
            of the solution! Find out more here.
          </div>
        </div>
      </div>

      <GetTouch />
      <MapView />
    </>
  );
}
