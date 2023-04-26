import React from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import photo1 from "../assets/day-pass/photo1.png";
import photo2 from "../assets/day-pass/photo2.png";
import photo3 from "../assets/day-pass/photo3.png";
import shopIcon from "../assets/day-pass/shopIcon.svg";
import poolIcon from "../assets/day-pass/poolIcon.svg";
import drinksIcon from "../assets/day-pass/drinksIcon.svg";
import campfireIcon from "../assets/day-pass/campfireIcon.svg";
import { Link } from "react-router-dom";

const DayPass = () => {
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
          Day Pass
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
          className="para"
        >
          Want the Jara experience, but just for the day? No problem, we've got you covered! We are
          delighted to offer our DAY PASS - both alcohol and non-alcohol passes available. Come and
          spend the day, enjoy the facilities and indulge!
        </div>
      </div>
      <div
        style={{
          color: "#000",
          width: "100%",
          maxWidth: "800px",
          margin: "0px auto",
          paddingBottom: "0px",
        }}
        className="para"
      >
        ARRIVE: 11:30am DEPART: 5:30pm (strictly)
      </div>
      <div className="section_content_base">
        <div className="section_images">
          <img src={photo1}></img>
          <img src={photo2}></img>
          <img src={photo3}></img>
        </div>
      </div>

      <div style={{ marginBottom: "4em" }} className="section_content_base">
        <div className="day_pass_header">
          <h3>WHAT’S INCLUDED?</h3>
          <p className="para">BBQ LUNCH // CHEF'S SELECTION served "family style"</p>
        </div>

        <div className="day_pass_flex_block">
          <div className="black_block">
            <img src={shopIcon} alt="shop icon" />
            <h3>Alcohol</h3>
            <p>
              A selection of sweet and savoury snacks, tea, coffee and waterSweet Treatsice-cream or
              chocolate served at 4:30pm
            </p>
          </div>
          <div className="black_block">
            <img src={drinksIcon} alt="drinks icon" />
            <h3>Drinks</h3>
            <p>
              Popular alcoholic (wines, beer, cider, cocktail of the day) and / or non-alcoholic
              drink included (service depends on the Day Pass ticket booked)
            </p>
          </div>
          <div className="black_block">
            <img src={campfireIcon} alt="campfire icon" />
            <h3>BBQ Lunch</h3>
            <p>
              Options include skewers, wings, fried fish, sausagesrice or friessalad or
              coleslawcondiments.Vegan & vegetarian day pass options also available
            </p>
          </div>
          <div className="black_block">
            <img src={poolIcon} alt="pool icon" />
            <h3>Facilities</h3>
            <p>
              Use of the swimming pool, gazebo, games, cabanas and beachfront (all outdoor
              facilities, no room access).External (paid) activities available
            </p>
          </div>
        </div>

        <div className="day_pass_header">
          <h3>Day Pass Ticket Prices (Non-Seasonal)</h3>
          <p className="para">Priced per person, EXCLUDES +5% consumption tax and 7.5% VAT</p>
        </div>
        <div className="day_pass_flex_block">
          <div className="grey_block">
            <h3>
              Adult (18+) <br />
              Alcohol
            </h3>
            <p>
              Weekday (Mon-Thurs)
              <br /> <span>N30,000 each</span> <br /> Weekend (Fri, Sat, Sun) <br />
              <span>N35,000 each</span>
            </p>
          </div>
          <div className="grey_block">
            <h3>
              Adult (18+) <br />
              Non-Alcohol
            </h3>
            <p>
              Weekday (Mon-Thurs)
              <br /> <span>N20,000 each</span> <br /> Weekend (Fri, Sat, Sun) <br />
              <span>N25,000 each</span>
            </p>
          </div>
          <div className="grey_block">
            <h3>
              Child (13-17)
              <br />
              Pass
            </h3>
            <p>
              Weekday (Mon-Thurs)
              <br /> <span>N10,000 each</span> <br /> Weekend (Fri, Sat, Sun) <br />
              <span>N12,500 each</span>
            </p>
          </div>
          <div className="grey_block">
            <h3>
              Nanny
              <br />
              Pass
            </h3>
            <p>
              Weekday (Mon-Thurs)
              <br /> <span>N12,500 each</span> <br /> Weekend (Fri, Sat, Sun) <br />
              <span>N15,000 each</span>
            </p>
          </div>
        </div>
        <div className="day_pass_info">
          <h1>Useful Information</h1>
          <p>
            Useful Information Bookings are made via the green button, using Paystack. Your bookings
            is only confirmed when a confirmation email has been sent by Jara Beach Resort. Booking
            ahead is essential.
          </p>
          <p>
            Extras including <Link to="/experiences">Experiences</Link>,
            <Link href="">Spa Services</Link>,{" "}
            <Link to="/premium-collection">Premium Collection</Link>,<Link href="">Cakes</Link>,
            <Link to="/photoshoots"> Photoshoot</Link> and
            <Link to="" href="">
              Paid Activities
            </Link>
            can all be added to your Day Pass visit during the booking process.
          </p>
          <p>
            While we endeavour to welcome last hour bookings, we urge all guests to be completely
            familiar with our terms. Deciding on the day for example you won't be coming will result
            in a forfeit of payment without the opportunity to reschedule.
          </p>
          <p>
            All Infants (under 2yrs) are FREE - no food provided - First Toddler (3-5yrs) per group
            free.
          </p>
          <p>
            <span>CHILDREN</span> - Aged 6-17 years (or 3 years+ after first FREE Toddler).
          </p>
          <p>
            <span>NANNIES</span> - Visiting to support only, no use of the snack station, separate
            lunch menu. Nanny passes limited to 1 per child, maximum 3 nannies per booking.
          </p>

          <p>
            Upgrade from non-alcohol to alcohol pass on the day: N15,000 + TAXES. Walk-in visitors
            (without pre-booking) may enjoy a Day Pass experience, however a 25% premium to your
            ticket will apply. Bookings are subject to availability. If you're booking for 20 guests
            or more, please do reach out to the booking team first to confirm availability (Jara has
            an internal cut off to ensure all guests receive the right experience!). Discounts do
            not apply to non-alcohol passes
          </p>
        </div>
        <div className="center_btn">
          <button className="black_button">View Booking Terms</button>
        </div>
        <div className="day_pass_header">
          <h3>Day Pass Ticket Prices (Non-Seasonal)</h3>
          <p className="para">Priced per person, EXCLUDES +5% consumption tax and 7.5% VAT</p>
          <p className="para">
            If you're booking for 20 guests or more, please do reach out to the booking team first
            to confirm availability (Jara has an internal cut off to ensure all guests receive the
            right experience!).
          </p>
        </div>
        <div className="day_pass_flex_block">
          <div className="grey_block">
            <h3>Alcohol</h3>
            <p>N40,000</p>
          </div>
          <div className="grey_block">
            <h3>Non-Alcohol</h3>
            <p>N30,000</p>
          </div>
          <div className="grey_block">
            <h3>Children</h3>
            <p>N15,000</p>
          </div>
          <div className="grey_block">
            <h3>Nanny</h3>
            <p>N15,000</p>
          </div>
        </div>
        <div className="day_pass_header">
          <h3>Seasonal Dates</h3>
          <p className="para">
            October 1st
            <br />
            December 20th - January 5th
            <br />
            February 14th
            <br />
            Click and Pay for <a to="/">SEASONAL</a> bookings
          </p>
        </div>
        <div className="center_btn">
          <button className="black_button">View Booking Terms</button>
        </div>
        <br />
      </div>

      <GetTouch />
      <MapView />
    </>
  );
};

export default DayPass;
