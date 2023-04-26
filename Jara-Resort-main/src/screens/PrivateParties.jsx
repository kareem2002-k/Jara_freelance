import React from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import top_photo_1 from "../assets/private-parties/imag 36.png";
import top_photo_2 from "../assets/private-parties/image 37.png";
import top_photo_3 from "../assets/private-parties/image 38.png";
import birthday_parties_img from "../assets/private-parties/image 39.png";
import big_party_img from "../assets/private-parties/image 40.png";
import bottom_photo_1 from "../assets/private-parties/Screenshot 2023-04-06.png";
import bottom_photo_2 from "../assets/private-parties/Screenshot 2023-04-06 at 3.06.png";
import bottom_photo_3 from "../assets/private-parties/Screenshot 2023-04-06 at 3.06 (1).png";
import bottom_photo_4 from "../assets/private-parties/Screenshot 2023-04-06 at 3.06 (2).png";
import bottom_photo_5 from "../assets/private-parties/Screenshot 2023-04-06 at 3.06 (3).png";

const PrivateParties = () => {
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
          Private Parties
        </div>
      </div>
      <main className="section_content private_parties">
        <div className="private_parties_top_photo_block">
          <img src={top_photo_1} alt="Parties photo" />
          <img src={top_photo_2} alt="Parties photo" />
          <img src={top_photo_3} alt="Parties photo" />
        </div>
        <div className="private_parties_top_party_block">
          <div>
            <p>
              Jara Beach Resort is the perfect location to hold a private party. We have a number of
              options to suit most requirements and budgets.
            </p>
            <p>Ideal for:</p>
            <ul>
              <li>Birthdays</li>
              <li>Pre-wedding celebrations</li>
              <li>Anniversaries</li>
              <li>Reunions etc</li>
            </ul>
            <p>With flexible options including:</p>
            <ul>
              <li>Overnight or Day only experiences</li>
              <li>
                All-inclusive food and drinks, or space only with external food and drinks (corkage
                and 70% room occupancy fee applies)
              </li>
              <li>Maximum capacity: 150 people</li>
            </ul>
            <p>
              10 vendor limit.
              <br />
              <br />
              Simply use the contact form below or email{" "}
              <a href="mailto:bookings@jarabeachresort.com">bookings@jarabeachresort.com</a> to
              submit your request. Please include as much detail as possible, outlining your dream
              visit.
              <br />
              <br />
              Should you wish to tour/inspect Jara ahead of your party, you may do so for up to 30
              minutes, for N10,000 - covers two people and a welcome soft drink. Priced at N5,000
              per person thereafter. Must be booked / arranged in advance - please email ahead. The
              N10,000 paid is then removed from the total of any booking secured within one month of
              the inspection.
            </p>
          </div>
          <div>
            <a href="#">
              <img src={birthday_parties_img} alt="Birthday Parties image" />
            </a>
          </div>
        </div>
        <div className="private_parties_big_party">
          <div>
            <a href="www.jarabeachresort.com/privateparties">
              <img src={big_party_img} />
            </a>
          </div>
          <div>
            <h4>The BIG 5 Party Package</h4>
            <p>
              For simplicity, we have devised an amazing celebration package, allowing you to
              <br />
              comfortably invite all of your closest friends, and host them day or overnight
              <br />
              experiences for an amazing celebration to remeber. The package includes:
            </p>
            <ol>
              <li>
                All-Room Takeover (all 12 rooms), for 29 guests (arrival at 11:30am, roomm
                <br /> access from 1pm, check-out at 11am)
              </li>
              <li>Exclusivity (no additional non-party guests on site)</li>
              <li>21 Day Pass guests (enjoying the full day pass benefits until 5:30pm)</li>
              <li>Celebration Cake and Decorations</li>
              <li>6 x Champagne + 6 Premium Spirits (vodka, whiskey, gin)</li>
            </ol>
            <p>
              N5,000,000 + TAXES
              <br />
              N5,625,000 inclusive
              <br />
              Based on a weekend visit (Fri, Sat or Sun)
              <br />
              Day Pass tickets align with Adult, alcohol.
            </p>
          </div>
        </div>
        <div className="private_parties_down_photos">
          <img src={bottom_photo_1} alt="Parties photo" />
          <img src={bottom_photo_2} alt="Parties photo" />
          <img src={bottom_photo_3} alt="Parties photo" />
          <img src={bottom_photo_4} alt="Parties photo" />
          <img src={bottom_photo_5} alt="Parties photo" />
        </div>
      </main>
      <GetTouch />
      <MapView />
    </>
  );
};

export default PrivateParties;
