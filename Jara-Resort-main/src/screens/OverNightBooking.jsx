import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import food_icon from "../assets/overnight-experiences-and-booking/food.svg";
import drink_icon from "../assets/overnight-experiences-and-booking/drink.svg";
import snacks_icon from "../assets/overnight-experiences-and-booking/snacks.svg";
import family from "../assets/overnight-experiences-and-booking/singleOccupant.png";
import standard from "../assets/overnight-experiences-and-booking/standard.webp";
import villa from "../assets/overnight-experiences-and-booking/villa.webp";
import loft from "../assets/overnight-experiences-and-booking/loft.webp";
import all from "../assets/overnight-experiences-and-booking/all.webp";
import { Link, Outlet } from "react-router-dom";

const DayPassBooking = () => {
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
            Overnight Booking
          <br />
          
        </div>
      </div>

      <Outlet />


        <GetTouch />
      <MapView />
        </>
        
    )
}

export default DayPassBooking