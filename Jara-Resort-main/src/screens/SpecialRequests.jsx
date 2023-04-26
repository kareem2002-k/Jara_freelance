import React from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
//imports img
import woman_photo from "../assets/special-requests/image 49.png";
import photo_collage from "../assets/special-requests/image 50.png";

const SpecialRequests = () => {
  return (
    <>
      <div className="components_section">
        <div
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="1000"
          style={{ color: "#fff", fontSize: 60, textAlign: "center", lineHeight: 1 }}
          className="hero_heading Raleway"
        >
          Special Requests
        </div>
      </div>
      <main className="section_content special_requests">
        <div className="special_requests_flex">
          <p>
            We operate to give you the very best possible experience during your stay. If there is
            anything we can do to help make your visit even more memorable, all you need to do is
            ask. There are a number of expected extras we offer for free, including romantic room
            decoration, or happy birthday messages, simple decorations etc. There are a few services
            which are chargeable. Just let us know what you require.
            <br />
            <br />
            The floating pool breakfast and the sunset picnic experiences cost just N10,000 based on
            two people sharing. Priced at N5,000 per person thereafter. Maximum four people per
            tray. Sunset picnics can take place on the beachfront or in Horizon, subject to
            availability. Both experiences are subject to availability
            <br /> and need to be booked in advance.
            <br />
            <br />
            <a href="mailto:bookings@jarabeachresort.com">🎂</a>CAKES!{" "}
            <a href="#">Cake Price List Options</a>
            <br />
            <br />
            <a href="mailto:bookings@jarabeachresort.com">💅🏾</a>Make-Up Artist Access (2 hours, soft
            drink): N15,000
            <br />
            <br />
            <a href="mailto:bookings@jarabeachresort.com">📸</a>Photoshoot (photographer access -
            not provided by Jara): N100,000
            <br />
            <br />
            Special Decoration Access by External Vendor
            <br />
            (2 hours, soft drink): N15,000
            <br />
            CAKE PRICE LIST OPTIONS
            <br />
            <a href="mailto:bookings@jarabeachresort.com">📸</a> Photoshoot Examples, courtesy of
            the wonderfully talented
            <br />
            <a href="https://www.instagram.com/victorozor_perfection/">
              victorozor_perfection
            </a>{" "}
            <br />
            Guest Model: <a href="https://www.instagram.com/berrybee20/">berrybee20</a> and friends
          </p>
          <img src={woman_photo} />
        </div>
        <img src={photo_collage} className="special_requests_photo_collage" />
      </main>
      <GetTouch />
      <MapView />
    </>
  );
};

export default SpecialRequests;
