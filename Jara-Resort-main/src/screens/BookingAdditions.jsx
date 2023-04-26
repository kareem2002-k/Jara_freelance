import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import eat_icon from "../assets/booking-additions/Rectangle 256.png";
import lateCheckOut_icon from "../assets/booking-additions/Rectangle 257 .png";
import room_icon from "../assets/booking-additions/image 21.png";
import foodMenu_icon from "../assets/booking-additions/image 22.png";
import { Link } from "react-router-dom";
const BookingAdditions = () => {
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
          Booking Additions
        </div>
      </div>
      <main className="section_content booking_additions">
        <p>
          Early check-in or late checkout can only be offered the day before your arrival /
          departure - subject to
          <br />
          availability. To extend your stay with us, our DAY PASS option is ideal, allowing you to
          remain on site with us until
          <br />
          5:30pm and enjoy the facilities and our BBQ lunch and afternoon sweet treats. You are
          required to exit your
          <br />
          room by 11am, as standard. Changing room and luggage storage available.
        </p>
        <div className="rooms_flex">
          <div className="rooms_flex_item">
            <div style={{ position: "relative" }}>
              <img src={eat_icon} />
              <h5>Early Check-In</h5>
            </div>
            <ul>
              <li>Arrive 8.30am</li>
              <li>Breakfast included</li>
              <li>Rate: 35% of room rate</li>
              <li>
                Subject to availability - confirmation only possible after
                <br />
                4pm the day before check-in
              </li>
            </ul>
          </div>
          <div className="rooms_flex_item">
            <div style={{ position: "relative" }}>
              <img src={lateCheckOut_icon} />
              <h5>Late Check-Out</h5>
            </div>
            <ul>
              <li>Arrive 8.30am</li>
              <li>Breakfast included</li>
              <li>Rate: 35% of room rate</li>
              <li>
                Subject to availability - confirmation only possible after
                <br />
                4pm the day before check-in
              </li>
            </ul>
          </div>
        </div>
        <div className="domesticStaff">
          <div className="domesticStaff_item">
            <img src={room_icon} />
          </div>
          <div className="domesticStaff_item" style={{ flexBasis: "auto" }}>
            <h4>Domestic Staff (Nanny/Driver) Options</h4>
            <p>
              We welcome guests with nannies or drivers, subject to availability. No
              <br />
              discounts/ offers apply to domestic staff pricing.
              <br />
              <br />
              WE HAVE ONE ROOM WITH TWO BEDS - AVAILABLE FOR NANNIES OR
              <br />
              DRIVERS.
            </p>
            <h4>Nannies</h4>
            <p>
              If not staying in a standard or family room [as a regular guest], Nannies are
              <br />
              welcome to sleep in our dedicated staff quarters - bedding and water provided
              <br />
              - and partake in all meals and make use of Jara's facilities. A separate food menu
              <br />
              is available. Alcohol and the snack station is not included. Cost per night:
              <br />
              N30,000 + 5% consumption tax and 7.5% VAT.
            </p>
          </div>
        </div>
        <div className="foodMenu_drivers">
          <div className="foodMenu_drivers_img">
            <img src={foodMenu_icon} />
          </div>
          <div className="foodMenu_drivers_text">
            <h4>Drivers</h4>
            <p>
              Drivers requiring accommodation are welcome to sleep in the allocated room,
              <br />
              subject to availability (room access from 6pm) - bedding and water provided -<br />
              and are not expected to remain inside the property between 9am and 6pm.
              <br />
              Cost per night: N15,000 +5% consumption tax and 7.5% VAT. Food is available
              <br />
              from a separate menu (below) and consumed in their room or at the back of the
              <br />
              property, when paid in advance.
              <br />
              <br />
              <span style={{ fontWeight: 500 }}>BREAKFAST</span> Nigerian Breakfast (Boiled yam &
              Egg sauce) @ N3,000
              <br />
              <span style={{ fontWeight: 500 }}>LUNCH</span> Indomie & Egg or Jollof Rice with
              Chicken & Beef Skewer@ N4,000
              <br />
              <span style={{ fontWeight: 500 }}>DINNER</span> Nigerian Special @ N5,000
            </p>
          </div>
        </div>
        <div className="center_btn">
          <Link to="/rooms">
            <button className="black_button">Back to Booking Page</button>
          </Link>
        </div>
      </main>
      <GetTouch />
      <MapView />
    </>
  );
};

export default BookingAdditions;
