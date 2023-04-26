import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import RoomPic from "../assets/rooms/Villa.png";
import standardImg from "../assets/rooms/standard.webp";
import familyImg from "../assets/rooms/family.webp";
import villaImg from "../assets/rooms/villa.webp";
import loftImg from "../assets/rooms/loft.webp";

import { Link } from "react-router-dom";

const data = [1, 2, 3, 4, 5, 6, 7, 78, 8, 9];

export default function RoomsView() {
  const rooms = [
    {
      img: standardImg,
      title: "ocean-front balcony standard room",
      desc: "",
      size: "2 x Adults ",
      price: "200,000",
    },
    {
      img: familyImg,
      title: "family room & cabins, ocean-front balcony",
      desc: "",
      size: " 3 x Adults or 2 x Adults + 1 Infant",
      price: "250,000",
    },
    {
      img: villaImg,
      title: "the villas provide an immersive ocean-front view",
      desc: "",
      size: "2 x Adults ",
      price: "375,000",
    },
    {
      img: loftImg,
      title: "family deluxe room, with ocean-facing balcony",
      desc: "",
      size: "3 x Adults or 2 x Adults + 1 Infant ",
      price: "300,000",
    },
  ];
  return (
    <>
      <div className="components_section">
        <div
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="1000"
          style={{ color: "#fff", fontSize: 40 }}
          className="hero_heading"
        >
          Rooms
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
          className="para rooms_heading_details"
        >
          Jara has 12 exquisite, ocean-facing rooms:5 x standard (with queen bed ideal for couples
          or young small families with an infant only) - Rooms 1-55 x family rooms (queen or king
          bed with 2 x 4foot mattress bunk bed) - Rooms 6-9 + Family Deluxe Room 12 (The Loft) 2 x
          stunning, two-floor oceanfront villas (with king four-poster bed with pull-out / sofa bed)
          - Rooms 11 and 12
        </div>
      </div>

      <div className="rooms_view_card_container">
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
      <GetTouch />
      <MapView />
    </>
  );
}

function RoomCard({ title, img, desc, size, price }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="rooms_view_card"
    >
      <img src={img} alt={title} className="rooms_view_card_img" />
      <div className="rooms_view_heading">{title}</div>
      <div className="para">
        The most exclusive beach rooms in the country. Room 10 (“Sunrise”) and 11 (“Sunset”) - two
        of the most beautiful, immersive oceanfront rooms in the country (and perhaps beyond!)
      </div>
      <div className="rooms_view_heading_row">
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 9.25C4.66 9.25 0 10.42 0 12.75V14.5H14V12.75C14 10.42 9.34 9.25 7 9.25ZM2.34 12.5C3.18 11.92 5.21 11.25 7 11.25C8.79 11.25 10.82 11.92 11.66 12.5H2.34ZM7 7.5C8.93 7.5 10.5 5.93 10.5 4C10.5 2.07 8.93 0.5 7 0.5C5.07 0.5 3.5 2.07 3.5 4C3.5 5.93 5.07 7.5 7 7.5ZM7 2.5C7.83 2.5 8.5 3.17 8.5 4C8.5 4.83 7.83 5.5 7 5.5C6.17 5.5 5.5 4.83 5.5 4C5.5 3.17 6.17 2.5 7 2.5ZM14.04 9.31C15.2 10.15 16 11.27 16 12.75V14.5H20V12.75C20 10.73 16.5 9.58 14.04 9.31ZM13 7.5C14.93 7.5 16.5 5.93 16.5 4C16.5 2.07 14.93 0.5 13 0.5C12.46 0.5 11.96 0.63 11.5 0.85C12.13 1.74 12.5 2.83 12.5 4C12.5 5.17 12.13 6.26 11.5 7.15C11.96 7.37 12.46 7.5 13 7.5Z"
            fill="#838383"
          />
        </svg>
        {size}
      </div>
      <div className="rooms_view_heading_row">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 17.04C15.13 16.71 17.5 16.5 20 16.5V20.5H3C3 19.85 6.2 18.36 11 17.4V10.9C10.16 11.15 9.45 11.71 9 12.45C8.68985 11.9311 8.2504 11.5015 7.72458 11.2032C7.19875 10.9049 6.60455 10.748 6 10.748C5.39545 10.748 4.80125 10.9049 4.27542 11.2032C3.7496 11.5015 3.31015 11.9311 3 12.45C3.03 8.87 6.5 5.93 11 5.54V5.5C11 5.23478 11.1054 4.98043 11.2929 4.79289C11.4804 4.60536 11.7348 4.5 12 4.5C12.2652 4.5 12.5196 4.60536 12.7071 4.79289C12.8946 4.98043 13 5.23478 13 5.5V5.54C17.5 5.93 20.96 8.87 21 12.45C20.6898 11.9311 20.2504 11.5015 19.7246 11.2032C19.1988 10.9049 18.6045 10.748 18 10.748C17.3955 10.748 16.8012 10.9049 16.2754 11.2032C15.7496 11.5015 15.3102 11.9311 15 12.45C14.55 11.71 13.84 11.15 13 10.89V17.04ZM5 0.5C5 1.15661 4.87067 1.80679 4.6194 2.41342C4.36812 3.02005 3.99983 3.57124 3.53553 4.03553C3.07124 4.49983 2.52005 4.86812 1.91342 5.1194C1.30679 5.37067 0.656609 5.5 0 5.5V0.5H5Z"
            fill="#838383"
          />
        </svg>
        Direct Beach access
      </div>
      <div className="rooms_view_heading_row_hero">
        <div className="rooms_view_heading_row">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.66 5.84C15.9223 5.8389 16.1737 5.73474 16.36 5.55L17.07 4.84C17.1747 4.75035 17.2597 4.64003 17.3197 4.51597C17.3797 4.39191 17.4135 4.25677 17.4188 4.11905C17.4241 3.98133 17.4009 3.844 17.3506 3.71568C17.3004 3.58735 17.2241 3.4708 17.1266 3.37335C17.0292 3.27589 16.9126 3.19964 16.7843 3.14936C16.656 3.09909 16.5187 3.07588 16.3809 3.0812C16.2432 3.08652 16.1081 3.12025 15.984 3.18027C15.86 3.2403 15.7496 3.32532 15.66 3.43L15 4.14C14.8137 4.32736 14.7092 4.58081 14.7092 4.845C14.7092 5.10919 14.8137 5.36264 15 5.55C15.1763 5.72536 15.4116 5.82875 15.66 5.84ZM10 3.5C10.2652 3.5 10.5196 3.39464 10.7071 3.20711C10.8946 3.01957 11 2.76522 11 2.5V1.5C11 1.23478 10.8946 0.98043 10.7071 0.792893C10.5196 0.605357 10.2652 0.5 10 0.5C9.73478 0.5 9.48043 0.605357 9.29289 0.792893C9.10536 0.98043 9 1.23478 9 1.5V2.5C9 2.76522 9.10536 3.01957 9.29289 3.20711C9.48043 3.39464 9.73478 3.5 10 3.5ZM2 9.5H1C0.734784 9.5 0.48043 9.60536 0.292893 9.79289C0.105357 9.98043 0 10.2348 0 10.5C0 10.7652 0.105357 11.0196 0.292893 11.2071C0.48043 11.3946 0.734784 11.5 1 11.5H2C2.26522 11.5 2.51957 11.3946 2.70711 11.2071C2.89464 11.0196 3 10.7652 3 10.5C3 10.2348 2.89464 9.98043 2.70711 9.79289C2.51957 9.60536 2.26522 9.5 2 9.5ZM3.64 5.55C3.82626 5.73474 4.07766 5.8389 4.34 5.84C4.47161 5.84076 4.60207 5.81554 4.72391 5.76577C4.84574 5.71601 4.95656 5.64268 5.05 5.55C5.23625 5.36264 5.34079 5.10919 5.34079 4.845C5.34079 4.58081 5.23625 4.32736 5.05 4.14L4.34 3.43C4.1487 3.26617 3.90262 3.18057 3.65095 3.19029C3.39927 3.20001 3.16053 3.30434 2.98244 3.48244C2.80434 3.66053 2.70001 3.89927 2.69029 4.15095C2.68057 4.40262 2.76617 4.6487 2.93 4.84L3.64 5.55ZM19 9.5H18C17.7348 9.5 17.4804 9.60536 17.2929 9.79289C17.1054 9.98043 17 10.2348 17 10.5C17 10.7652 17.1054 11.0196 17.2929 11.2071C17.4804 11.3946 17.7348 11.5 18 11.5H19C19.2652 11.5 19.5196 11.3946 19.7071 11.2071C19.8946 11.0196 20 10.7652 20 10.5C20 10.2348 19.8946 9.98043 19.7071 9.79289C19.5196 9.60536 19.2652 9.5 19 9.5ZM9 16.5H6C5.73478 16.5 5.48043 16.6054 5.29289 16.7929C5.10536 16.9804 5 17.2348 5 17.5C5 17.7652 5.10536 18.0196 5.29289 18.2071C5.48043 18.3946 5.73478 18.5 6 18.5H9C9.26522 18.5 9.51957 18.3946 9.70711 18.2071C9.89464 18.0196 10 17.7652 10 17.5C10 17.2348 9.89464 16.9804 9.70711 16.7929C9.51957 16.6054 9.26522 16.5 9 16.5ZM16 12.5H15.12C15.3726 11.8635 15.5015 11.1848 15.5 10.5C15.5 9.04131 14.9205 7.64236 13.8891 6.61091C12.8576 5.57946 11.4587 5 10 5C8.54131 5 7.14236 5.57946 6.11091 6.61091C5.07946 7.64236 4.5 9.04131 4.5 10.5C4.49848 11.1848 4.62744 11.8635 4.88 12.5H4C3.73478 12.5 3.48043 12.6054 3.29289 12.7929C3.10536 12.9804 3 13.2348 3 13.5C3 13.7652 3.10536 14.0196 3.29289 14.2071C3.48043 14.3946 3.73478 14.5 4 14.5H16C16.2652 14.5 16.5196 14.3946 16.7071 14.2071C16.8946 14.0196 17 13.7652 17 13.5C17 13.2348 16.8946 12.9804 16.7071 12.7929C16.5196 12.6054 16.2652 12.5 16 12.5ZM12.85 12.5H7.15C6.72987 11.9175 6.50258 11.2182 6.5 10.5C6.5 9.57174 6.86875 8.6815 7.52513 8.02513C8.1815 7.36875 9.07174 7 10 7C10.9283 7 11.8185 7.36875 12.4749 8.02513C13.1313 8.6815 13.5 9.57174 13.5 10.5C13.4974 11.2182 13.2701 11.9175 12.85 12.5ZM14 16.5H13C12.7348 16.5 12.4804 16.6054 12.2929 16.7929C12.1054 16.9804 12 17.2348 12 17.5C12 17.7652 12.1054 18.0196 12.2929 18.2071C12.4804 18.3946 12.7348 18.5 13 18.5H14C14.2652 18.5 14.5196 18.3946 14.7071 18.2071C14.8946 18.0196 15 17.7652 15 17.5C15 17.2348 14.8946 16.9804 14.7071 16.7929C14.5196 16.6054 14.2652 16.5 14 16.5Z"
              fill="#838383"
            />
          </svg>
          Sunset view
        </div>
        <div className="rooms_view_heading_price">
          <span>Per Night</span>N{price}
        </div>
      </div>
      <div className="card_btn">
        <Link to={"/overnight-experiences-and-booking"}>
          <button className="black_button">View Details</button>
        </Link>

        <a href="https://booking.jarabeachresort.com/">
          <button className="white_button">Book Now</button>
        </a>
      </div>
    </div>
  );
}
