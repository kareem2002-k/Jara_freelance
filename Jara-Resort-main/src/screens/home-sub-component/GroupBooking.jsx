import React from "react";
import wedding from "../../assets/wwdding.png";
import Pic1 from "../../assets/group/Rectangle 71.png";
import Pic2 from "../../assets/group/Rectangle 72.png";
import Pic3 from "../../assets/group/Rectangle 73.png";
import { Link } from "react-router-dom";

export default function GroupBooking() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="room_container"
      >
        <div style={{ color: "#7878", letterSpacing: "6px", marginBottom: 8 }} className="para">
          EVENT BOOKINGS
        </div>
        <div style={{ textAlign: "center" }} className="hero_heading">
          Group Bookings <br />& Full Private Hire
        </div>
        <div className="group_booking_container">
          <div className="group_booking_content_left">
            <div className="group_booking_content_left_card">
              <img src={wedding} alt="wedding" className="group_booking_content_left_card_img" />
              <div className="group_booking_content_left_card_content">
                <div className="group_booking_content_left_card_content_heading">Weddings</div>
                <div style={{ textAlign: "start" }} className="para">
                  A wedding ceremony on a 30 foot terrace over looking the Atlantic Ocean?
                </div>
                <Link
                  to="/weddings"
                  style={{
                    color: "#fff",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  className="para"
                >
                  Find out more
                </Link>
              </div>
            </div>
            <div className="group_booking_content_left_card">
              <img src={wedding} alt="wedding" className="group_booking_content_left_card_img" />
              <div className="group_booking_content_left_card_content">
                <div className="group_booking_content_left_card_content_heading">
                  Business Retreats
                </div>
                <div style={{ textAlign: "start" }} className="para">
                  ARA offers an unparalleled team bonding getaway experience.
                </div>
                <Link
                  to="/business-retreat"
                  style={{
                    color: "#fff",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  className="para"
                >
                  Find out more
                </Link>
              </div>
            </div>
            <div className="group_booking_content_left_card">
              <img src={wedding} alt="wedding" className="group_booking_content_left_card_img" />
              <div className="group_booking_content_left_card_content">
                <div className="group_booking_content_left_card_content_heading">
                  Private Celebrations
                </div>
                <div style={{ textAlign: "start" }} className="para">
                  The perfect choice for your pre-wedding party, bridal shower or anniversary.
                </div>
                <Link
                  to="/private-parties"
                  style={{
                    color: "#fff",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  className="para"
                >
                  Find out more
                </Link>
              </div>
            </div>
          </div>
          <div className="group_booking_content_right">
            <div className="group_booking_content_right_entry">
              <img src={Pic1} alt="pic" />
            </div>
            <div className="group_booking_content_right_entry">
              <img src={Pic2} alt="pic" />
            </div>
            <div className="group_booking_content_right_entry">
              <img src={Pic3} alt="pic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
