import React from "react";
import room1 from "../../assets/rooms/Loft.png";
import room2 from "../../assets/rooms/Family.png";
import room3 from "../../assets/rooms/Standard.png";
import room4 from "../../assets/rooms/Villa.png";
import { Link } from "react-router-dom";

export default function Rooms() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="room_container"
      >
        <div style={{ marginTop: 50 }} className="hero_heading">
          Our Rooms
        </div>
        <div className="room_container_content">
          <Link
            to="/rooms"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="room_container_content_img"
          >
            <img src={room1} alt="room1" />
          </Link>
          <Link
            to="/rooms"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="room_container_content_img"
          >
            <img src={room2} alt="room1" />
          </Link>
          <Link
            to="/rooms"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="room_container_content_img"
          >
            <img src={room3} alt="room1" />
          </Link>
          <Link
            to="/rooms"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="room_container_content_img"
          >
            <img src={room4} alt="room1" />
          </Link>
        </div>
      </div>
    </>
  );
}
