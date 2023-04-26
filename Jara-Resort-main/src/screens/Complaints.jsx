import React from "react";
import complaintsImg from "../assets/complaints/complaintsImg.png";

const Complaints = () => {
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
          Complaints
        </div>
      </div>
      <div className="section_content pr">
        <div className="complaints_content">
          <h3>We're sorry to see you at this page!</h3>
          <p>
            If you have a query or complaint about your booking, kindly revisit our terms here which
            were agreed to at the time of booking. Our transfer policy can be found on the same
            page, here. If you've booked and visited on the same day, please click here.
          </p>
          <p>
            - YOU AGREED THE USE OF ILLEGAL DRUGS IS STRICTLY PROHIBITED
            <br />
            - YOU AGREED YOUR BOOKING PERMITS ONLY THE NUMBER OF GUESTS, TIMINGS AND DATES STATED ON
            YOUR BOOKING CONFIRMATION
            <br />
            If you are wanting to transfer within the stipulated time frame (rather than before)
            this will not be possible. Our small and remote business simply couldn't operate if we
            permitted such last minute changes. We have an 12-bedroom boutique hotel in Eleko. Any
            loss of funds from travel related expenses may be covered by travel insurance.
          </p>
          <p>
            What we can often do is to advertise the room via Instagram - and if it's booked we can
            provide a transfer for you against the number of nights booked. This is only possible if
            booked, but not guaranteed.
          </p>
          <h3>PRE-BOOKING.</h3>
          <p>
            As a reminder from your booking outline mail, please read the following important
            points:
          </p>
          <ol>
            <li>BOOKINGS ARE NOT HELD AND CAN ONLY CONFIRMED UPON FULL PAYMENT.</li>
            <li> AVAILABILITY CHANGES BY THE HOUR. EARLY BOOKING ADVISED</li>
            <li>
              IF NOT PAID IMMEDIATELY ON RECEIPT OF [YOUR BOOKING] MAIL, PLEASE CHECK BACK TO
              RECONFIRM AVAILABILITY.
            </li>
          </ol>
          <h3>BOOKING CONFIRMATION.</h3>
          <p>
            As a reminder from your confirmation mail, please read the following important points:
          </p>
          <ol>
            <li>
              Jara Beach Resort is not responsible for bad weather conditions - “Some people feel
              the rain. Others just get wet” Bob Marley
            </li>
            <li>
              Jara Beach Resort is also not responsible for traffic - sometimes there can be
              significant delays. Please ensure you leave enough time to arrive promptly, allowing
              you to fully enjoy your time.
            </li>
          </ol>
          <p>
            Jara offers a time and consumption-based offering. ALL visitors through the door must be
            pre-booked and pre-paid for. No exceptions.
          </p>
          <p>A preview / reminder of our Guest Rules can be found below.</p>
          <p>
            Should you still wish to lay a complaint, having read the above, you are welcome to
            email: info@jarabeachresort.com for a prompt reply (complaints are only handled through
            email, not telephone).
          </p>
        </div>
        <div className="complaints_img">
          <img src={complaintsImg} alt=" complaints image" />
        </div>
      </div>
    </>
  );
};

export default Complaints;
