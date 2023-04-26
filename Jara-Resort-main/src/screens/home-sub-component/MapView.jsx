import React from "react";
import room1 from "../../assets/rooms/Loft.png";
import room2 from "../../assets/rooms/Family.png";
import room3 from "../../assets/rooms/Standard.png";
import room4 from "../../assets/rooms/Villa.png";

export default function MapView() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6522962005283!2d3.8622011146363553!3d6.438681125930187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10395386ee8e6d23%3A0x147765e9e6c5dbea!2sJara%20Beach%20Resort!5e0!3m2!1sen!2s!4v1678134759300!5m2!1sen!2s"
        width="100%"
        height="750"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
