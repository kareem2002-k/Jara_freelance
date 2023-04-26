import React from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
//imports img
import men_1_photo from "../assets/photoshoots/Screenshot 2023-04-06 at 3.41.png";
import men_2_photo from "../assets/photoshoots/Screenshot 2023-04-06 at 3.41 (1).png";
import men_3_photo from "../assets/photoshoots/Screenshot 2023-04-06 at 3.40.png";
import men_4_photo from "../assets/photoshoots/Screenshot 2023-04-06 at 3.40 (1).png";

const Photoshoots = () => {
  return (
    <>
      <div className="components_section">
        <div
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="1000"
          style={{ color: "#fff", fontSize: 50, textAlign: "center", lineHeight: 1 }}
          className="hero_heading Raleway"
        >
          Photoshoots
        </div>
      </div>
      <main className="section_content photoshoots">
        <div className="photoshoots_flex">
          <div className="photoshoots_text">
            <p>
              We welcome pre-wedding/ celebration, tourism and commercial guests to shoot
              <br /> content at Jara. Every request is different so is treated accordingly.
              <br />
              <br />
              We need to start with your requirements sent via email,
              <br /> (<a href="mailto:bookings@jarabeachresort.com">bookings@jarabeachresort.com</a>
              ) including the following;
            </p>
            <ol>
              <li>1 - How many people (guests) will be on site?</li>
              <li>2 - Whether you'll require food and drinks.</li>
              <li>3 - Timings of the day.</li>
              <li>4 - Your preferred date(s).</li>
              <li>
                5 - If relevant; the artist/ details of the song / actors/ nature of the video
                (whether lyrics or storyboard etc) - for us to align our brand with.
              </li>
            </ol>
            <p>We will then get back to you promptly.</p>
            <p>As an indication:</p>
            <ul>
              <li>
                personal photoshoots or video coverage (no food or drink), for up to four people
                (creative + assistants), for three hours: N100,000
              </li>
              <li>brand photoshoots start from. N500,000</li>
              <li>music videos start from N1,000,000.</li>
            </ul>
            <p>
              Should you wish to tour/inspect Jara ahead of your visit, you may do so for up to 30
              minutes, for N10,000 - covers two people (priced at N5,000 per person thereafter) and
              a welcome soft drink. Must be booked/ arranged in advance. We look forward to hearing
              from you.
            </p>
          </div>
          <img src={men_1_photo} alt="Men" />
        </div>
        <div className="photoshoots_flex_img">
          <img src={men_2_photo} alt="Men" />
          <img src={men_3_photo} alt="Men" />
          <img src={men_4_photo} alt="Men" />
        </div>
      </main>
      <GetTouch />
      <MapView />
    </>
  );
};

export default Photoshoots;
