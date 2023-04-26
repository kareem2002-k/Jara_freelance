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

import { Link } from "react-router-dom";

const OvernightExperiencesAndBooking = () => {
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
          Overnight Experiences
          <br />
          and Booking
        </div>
      </div>
      <main className="section_content overnight_experiences_and_booking">
        <h2>Providing all inclusive food and drinks</h2>
        <div className="food_services">
          <div>
            <img src={food_icon} alt="Food" />
            <h6>Food</h6>
            <p>
              Three perfectly prepared meals
              <br /> and snacks are included daily
            </p>
          </div>
          <div>
            <img src={drink_icon} alt="Drinks" />
            <h6>Drinks</h6>
            <p>
              You’ll never go thirsty with our
              <br /> variety of alcoholic and
              <br />
              non-alcoholic drinks
            </p>
          </div>
          <div>
            <img src={snacks_icon} alt="Snacks Station" />
            <h6>Snacks Station</h6>
            <p>
              The fully stocked snack station is
              <br /> available throughout your stay
            </p>
          </div>
        </div>
        <div className="center_btn">
          <a href="https://booking.jarabeachresort.com/" target="_blank">
            <button className="black_button">Book online now</button>
          </a>
        </div>

        <div className="prices">
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="prices_item"
          >
            <img src={standard} alt="SingleOccupant" />
            <h5>Single Occupant</h5>
            <p>
              Double Bed (QUEEN) & En-Suite Bathroom
              <br />1 Adult Guest (ONLY) in Room 1-5
            </p>
            <ol>
              <li>
                1 Night: <span>N170,000</span>
              </li>
              <li>
                2 Nights: <span>N323,000</span>{" "}
                <span style={{ color: "#08C90F", fontWeight: 200 }}>saves 5%</span>
              </li>
              <li>
                3 Nights: <span>N459,000</span>{" "}
                <span style={{ color: "#08C90F", fontWeight: 200 }}>saves 10%</span>
              </li>
              <li>
                4 Nights: <span>N578,000</span>{" "}
                <span style={{ color: "#08C90F", fontWeight: 200 }}>saves 15%</span>
              </li>
              <li>
                4<sup>+</sup> Nights{" "}
                <span style={{ color: "#08C90F", fontWeight: 200 }}>saves 15%</span>
              </li>
            </ol>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="prices_item"
          >
            <img src={standard} alt="Standard room img" />
            <h5>Standard Rooms (1-5)</h5>
            <p>
              Double Bed (QUEEN) & En-Suite Bathroom
              <br />
              For a couple (2 Adults) sharing
            </p>
            <ol>
              <li>
                1 Night: <span>N200,000</span>
              </li>
              <li>
                2 Nights: <span>N380,000</span>{" "}
                <span style={{ color: "#08C90F", fontWeight: 200 }}>saves 5%</span>
              </li>
              <li>
                3 Nights: <span>N540,000</span>{" "}
                <span style={{ color: "#08C90F", fontWeight: 200 }}>saves 10%</span>
              </li>
              <li>
                4 Nights: <span>N680,000</span>{" "}
                <span style={{ color: "#08C90F", fontWeight: 200 }}>saves 15%</span>
              </li>
              <li>
                4<sup>+</sup> Nights{" "}
                <span style={{ color: "#08C90F", fontWeight: 200 }}>saves 15%</span>
              </li>
            </ol>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="prices_item"
          >
            <img src={family} alt="family room img" />
            <h5>Family Rooms (6-9)</h5>
            <p>
              Queen or King Bed + Bunk Bed & En-Suite
              <br />
              BASED ON 3 ADULTS or 2 ADULTS + 1 x 6-17yr OLD
              <br />
              Extra Adult: N60,000 Extra Child: N42,000
            </p>
            <ol>
              <li>
                1 Night: <span>N250,000</span>
              </li>
              <li>
                2 Nights: <span>N475,000</span>{" "}
                <span style={{ color: "#08C90F", fontWeight: 200 }}>saves 5%</span>
              </li>
              <li>
                3 Nights: <span>N675,000</span>{" "}
                <span style={{ color: "#08C90F", fontWeight: 200 }}>saves 10%</span>
              </li>
              <li>
                4 Nights: <span>N850,000</span>{" "}
                <span style={{ color: "#08C90F", fontWeight: 200 }}>saves 15%</span>
              </li>
              <li>
                4<sup>+</sup> Nights{" "}
                <span style={{ color: "#08C90F", fontWeight: 200 }}>saves 15%</span>
              </li>
            </ol>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="prices_item"
          >
            <img src={villa} alt="Villa img" />
            <h5>The Villas (10 & 11)</h5>
            <p>
              ROOM 10 ('SUNRISE')
              <br />
              ROOM 11 ('SUNSET')
              <br />
              1 x KING BED + PULL-OUT / SOFA BED
              <br />
              2 ADULTS PRICED (4 ADULTS MAX )<br />
              Extra Guest: N100,000
            </p>
            <ol>
              <li>
                Fixed nightly rate: <span>N375,000</span>
              </li>
              <li>
                Additional guest: <span>N100,000</span>{" "}
              </li>
            </ol>
            <p>
              <span>NO DISCOUNTS FOR MULTI-NIGHT STAYS.</span>
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="prices_item"
          >
            <img src={loft} alt="Loft img" />
            <h5>The Loft (Room 12)</h5>
            <p>
              King Bed + Bunk Bed, Sofa & En-Suite
              <br />
              BASED ON 3 ADULTS or 2 ADULTS + 1 x 6-17yr OLD
              <br />
              Extra Adult: N60,000 Extra Child: N42,000
            </p>
            <ol>
              <li>
                Fixed nightly rate: <span>N300,000</span>
              </li>
            </ol>
            <p>
              <span>NO DISCOUNTS FOR MULTI-NIGHT STAYS.</span>
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="prices_item"
          >
            <img src={all} alt="All resort img" />
            <h5>All Room Takeover</h5>
            <p>
              All 12 rooms / 28 BEDS / Mattresses + Option of pull-out / Sofa beds
              <br />
              29 adults priced (42 adults max )<br />
              Nightly rate book: 12 ROOMS, pay for 11:
              <br />
              <span>N2,850,000</span> 1 x standard room FREE
              <br />
              <br />
              Rate does not include exclusivity
              <br />
              <span>N500,000</span> for exclusivity (Mon-Thurs)
              <br />
              <span>N600,000</span> for exclusivity (Fri, Sat, Sun)
              <br />
              (no other / external visitors)
            </p>
          </div>
        </div>
        <div className="center_btn">
          <a href="https://booking.jarabeachresort.com/" target="_blank">
            <button className="black_button">Book online now</button>
          </a>
        </div>
        <p>
          Jara has 12 exquisite, ocean-facing rooms:
          <br />5 x <span style={{ textDecorationLine: "underline" }}>standard</span> (with queen
          bed ideal for couples or families with infants) - Rooms 1-5
          <br />5 x <span style={{ textDecorationLine: "underline" }}>family rooms</span> (queen or
          king bed with 2 x 4foot mattress bunk bed) - Rooms 6-9 + Family Deluxe Room 12 (The{" "}
          <span style={{ textDecorationLine: "underline" }}>Loft</span>)<br />2 x stunning,
          two-floor oceanfront <span style={{ textDecorationLine: "underline" }}>villas</span> (with
          king four-poster bed with pull-out / sofa bed) - Rooms 10 and 11
          <br />
          <br />
          Jara has a fully automated e-commerce booking engine for overnight visits (and{" "}
          <Link to="/day-pass">Day Pass</Link>). Payments are made via Paystack or immediate Bank
          Transfer (booking is held for 60 minutes). All special requests and 'extras' can be added
          in the system. <a href="https://booking.jarabeachresort.com/">BOOK NOW</a>. For all
          takeover, <Link to="/business-retreat">retreat</Link>, or{" "}
          <Link to="/private-parties">private bookings</Link>, please email{" "}
          <a href="mailto:bookings@jarabeachresort.com">bookings@jarabeachresort.com</a> including
          details of your request.
        </p>
        <div>
          <h4 style={{ marginTop: 150 }}>Rates & Inclusions</h4>
          <p>
            <span style={{ textDecorationLine: "underline" }}>PRICING INCLUDES</span> lunch on
            arrival, sweet treats, dinner, breakfast and snacks + popular alcoholic and
            non-alcoholic drinks and full use of the facilities
            <br />
            <br />
            PRICING FOR THE NUMBER OF ADULT GUESTS SHARING ON AN ALL-INCLUSIVE BASIS:
            <br />
          </p>
          <ul>
            <li>STANDARD ROOMS REFERS TO TWO ADULTS.</li>
            <li>FAMILY ROOM PRICING REFERS TO THREE ADULTS.</li>
            <li>VILLA PRICING REFERS TO TWO ADULTS.</li>
          </ul>

          <p>
            Top shelf spirits and champagne are not included but can be purchased from our{" "}
            <Link to="/premium-collection">Premium Collection</Link>
            <br />
            <br />
            ALL RATES ARE LISTED PER NIGHT - <Link to="/packages">CLICK HERE FOR PACKAGES</Link>
            <br />
            <br />
            DISCOUNTS APPLY TO ROOMS 1-9 ONLY (not the Villas nor the Loft)
            <br />
            <br />
            Where more than 5 single occupant rooms are required, the family rooms are charged at
            the standard rate (usually applied to two guests).
            <br />
            <br />
            1 Night = Full Rate | 2 Nights = 5% discount | 3 Nights = 10% discount | 4 Nights or
            more = 15% discount
            <br />
            <br />
            STANDARD CHECK IN 1pm STANDARD CHECK OUT 11am
            <br />
            <br />
            Pricing shown EXCLUDE 5% consumption tax and 7.5% VAT - tax information{" "}
            <Link to="" style={{ textDecorationLine: "underline" }}>
              here
            </Link>
            .<br />
            <br />
            ⚠️ Please note when booking online: The HOLD feature is only possible between 8am and
            8pm. Between 8pm and 8am, instant payment via Paystack, only possible ⚠️
          </p>
        </div>
        <div>
          <h4 style={{ marginTop: 80 }}>Power Guidelines</h4>
          <p>
            Jara has no grid power. We use a mix of generators, solar and wind turbine power. Our
            schedule ensures a warm shower and cool room as you prepare for dinner, ahead of a
            comfortable night’s sleep. All lights and plugs for small devices will run around the
            clock. Air-Conditioners and Water Heaters will operate between 5pm – 7pm and 9pm – 10am.
            The family cabins and Villas receive warm water via solar water tank, around the clock.
          </p>
        </div>
        <div>
          <h4 style={{ marginTop: 40 }}>Family Room Additions (Room 6-9 + 12)</h4>
          <p>
            The family rooms are priced based on one additional guest (a third person) over six
            years old.
            <br />
            A further additional child aged six to 17 costs N42,000 - inclusive of food and drinks
            while an additional adult (18 and above) is N60,000.
            <br />
            The maximum occupancy for the family rooms / cabins is five adults - (N120,000 extra)
            based on two guests sharing a bed, two on the bunk beds and one a pull-out
            <br /> single mattress. Additional guests are not eligible for any discounts.
          </p>
        </div>
        <div>
          <h4 style={{ marginTop: 40 }}>Villa Additions</h4>
          <p>
            The Villas (room 10 and 11) are based on two adults sharing (as priced) and permit a
            maximum of two additional people (aged six and above) and costs N100,000 per person-
            inclusive of food and drinks
          </p>
        </div>
        <div>
          <h4 style={{ marginTop: 40 }}>Honeymoon</h4>
          <p>
            Jara is the perfect choice for honeymooners. Whether staying for a single night's
            getaway, or longer the villas (Rooms 10 and 11) will provide an exclusive escape, unique
            <br />
            to our beautiful coastline. Additional extras and activities can be added, special
            requests available here to enhance the most memorable of visits. All available to add in
            <br />
            Jara's online booking system.
          </p>
        </div>
        <div>
          <h4 style={{ marginTop: 40 }}>Seasonal Rates & Dates</h4>
          <p>
            Discounts do not apply to any rooms during seasonal periods - which are priced at the
            full nightly rate, with no discounts.
            <br />
            Seasonal periods = New Years, Valentines, Easter, Independence Day and Christmas.
          </p>
        </div>
        <div>
          <h4 style={{ marginTop: 40 }}>Deposits</h4>
          <p>
            A Deposit of N150,000 applies to all bookings above N1.5m in value.
            <br />
            This covers any breakages etc / returned within 48 hours, after checkout.
          </p>
        </div>
        <p className="warning">
          Please note when booking online: The HOLD feature is only possible between 8am and 8pm.
          Between 8pm and 8am, instant payment via Paystack, only possible{" "}
          <span style={{ fontSize: 25, lineHeight: 1 }}>⚠️</span>
        </p>
        <div className="center_btn">
          <a href="https://booking.jarabeachresort.com/" target="_blank">
            <button className="black_button">Book online now</button>
          </a>
        </div>
      </main>
      <GetTouch />
      <MapView />
    </>
  );
};

export default OvernightExperiencesAndBooking;
