import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import transports from "../assets/transports.png";
import childrenContent from "../assets/childrenContent.png";
import Img3 from "../assets/activities/image 19.png";
import childrenParties from "../assets/childrenParties.png";
import GroupBooking from "./home-sub-component/GroupBooking";

export default function BoatTransport() {
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
          Boat Transport
        </div>
      </div>
      <div
        style={{ justifyContent: "center", alignItems: "center" }}
        className="moments_jara_pic_show"
      >
        <img src={transports} alt="transports" />
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
          We receive the occasional enquiry from guests concerning arriving by
          Jara via boat. Unfortunately due to the nature of the surrounding
          lagoon landscape, there currently is no nearby and suitable jetty for
          boat riders to disembark close to Jara's location - rather needing to
          journey beyond in order to step foot on ground at Epe (an approx 90
          minute journey by water). Passengers then require picking up by road
          and driving to the resort (30 minutes). As a result the minimum two
          hour journey is no quicker than the road and significantly more
          expensive. Should this be preferable, guests can connect in a
          pre-arranged Jara speed/cruiser boat at Law School Under Bridge, by
          Falomo. ​The boat is suitable for up to six passengers with luggage
          and boasts comfortable seats, drinking water, life vests and bluetooth
          speaker system. A one-way journey, including vehicle pick up at Epe is
          N350,000 exc taxes. Please discuss with the bookings team should you
          wish to book.
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6522962005283!2d3.8622011146363553!3d6.438681125930187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10395386ee8e6d23%3A0x147765e9e6c5dbea!2sJara%20Beach%20Resort!5e0!3m2!1sen!2s!4v1678134759300!5m2!1sen!2s"
            width="100%"
            height="550"
            style={{ border: 0, marginTop: "2em" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <GetTouch />
      <MapView />
    </>
  );
}
