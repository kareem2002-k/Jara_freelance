import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import Staff from "../assets/activities/Rectangle 293.png";
import Img1 from "../assets/activities/Rectangle 292.png";
import Img2 from "../assets/activities/image 18.png";
import Img3 from "../assets/activities/image 19.png";
import Img4 from "../assets/activities/image 20.png";
import GroupBooking from "./home-sub-component/GroupBooking";

export default function Activities() {
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
          Activities
        </div>
      </div>
      <div className="moments_jara_pic_show">
        {data.map((index) => {
          return (
            <div
              style={{ height: 400 }}
              key={index}
              className="moments_jara_pic_show_entry"
            >
              <img src={Staff} alt="Staff" style={{ objectFit: "contain" }} />
            </div>
          );
        })}
      </div>
      <div className="resort_history_row">
        <div className="resort_history_row_img">
          <img src={Img1} alt="Img" />
        </div>
        <div className="resort_history_row_content">
          <div className="para">
            Bathe in the swimming pool surrounded by palm trees, or relax in a
            private cabana on the sand of JARA’s own private beach. There’s so
            much to do. Feeling active? The table tennis, pool table, massive
            6-foot screen (for sports and movies) and leisure games in the
            shaded games area are all yours. Volleyball and a children's
            playground await in the park. With plenty of books, board games and
            latest magazines, it’s also the perfect location for those wanting
            to do very little too! ​
            <li style={{ marginTop: ".5em" }}>Volleyball</li>
            <li style={{ marginTop: ".5em" }}>Badminton</li>
            <li style={{ marginTop: ".5em" }}>Basketball</li>
            <li style={{ marginTop: ".5em" }}>Pitch and putt golf</li>
            <li style={{ marginTop: ".5em" }}>Football (on sand)</li>
            <li style={{ marginTop: ".5em" }}>Ring toss</li>
            <li style={{ marginTop: ".5em" }}>Hoop toss</li>
            <li style={{ marginTop: ".5em" }}>French boule (Pétanque)</li>
            <li style={{ marginTop: ".5em" }}>Table tennis</li>
            <li style={{ marginTop: ".5em" }}>
              Horse riding - beach provider (signed disclaimer required)
            </li>
          </div>
        </div>
      </div>

      <div
        style={{ flexDirection: "row-reverse" }}
        className="resort_history_row"
      >
        <div className="resort_history_row_img">
          <img src={Img2} alt="Img" />
        </div>
        <div
          style={{ marginTop: "10em" }}
          className="resort_history_row_content"
        >
          <div className="para">
            <b>
              Sunrise Stroll - Watch the sun come up walking along the beach
            </b>
            <div className="para">
              Four days a week, Jara offers a complimentary early morning guided
              walk along the beach. A magical 30 minute walk towards Eleko and
              back again in time for breakfast. Attendance requires prior
              sign-up (can be done the day before on site) and is a fantastic
              way to start the day. The walk starts at 6:30am, meeting your Jara
              guide at the beachfront on the following days: Friday, Sunday,
              Tuesday and Thursday.
            </div>
          </div>
        </div>
      </div>

      <div className="resort_history_row">
        <div className="resort_history_row_img">
          <img src={Img3} alt="Img" />
        </div>
        <div
          style={{ marginTop: "10em" }}
          className="resort_history_row_content"
        >
          <div className="para">
            <b>Movie Night</b>
            <div className="para">
              Jara offers guests the chance to watch a movie on our big screen
              in the gazebo, most nights around 9pm - subject to Football, or
              Karaoke. A great chance to unwind and enjoy, with drinks and
              snacks served.
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ flexDirection: "row-reverse" }}
        className="resort_history_row"
      >
        <div className="resort_history_row_img">
          <img src={Img4} alt="Img" />
        </div>
        <div
          style={{ marginTop: "10em" }}
          className="resort_history_row_content"
        >
          <div className="para">
            <b>
              Sunrise Stroll - Watch the sun come up walking along the beach
            </b>
            <div className="para">
              Four days a week, Jara offers a complimentary early morning guided
              walk along the beach. A magical 30 minute walk towards Eleko and
              back again in time for breakfast. Attendance requires prior
              sign-up (can be done the day before on site) and is a fantastic
              way to start the day. The walk starts at 6:30am, meeting your Jara
              guide at the beachfront on the following days: Friday, Sunday,
              Tuesday and Thursday.
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
