import React from "react";
import jara_for_good_img from "../assets/jara-for-good/Jara_for_good.png";
import book_swap_img from "../assets/jara-for-good/book_swap.png";
import book_swap_foundation_img from "../assets/jara-for-good/book_swap_foundation.png";
import jara_august_img from "../assets/jara-for-good/jara_august.png";
import jbr_raffle_img from "../assets/jara-for-good/jbr_raffle.png";
import bus_img from "../assets/jara-for-good/bus.png";
import book_donate_img from "../assets/jara-for-good/book_donate.png";
import roof_work_img from "../assets/jara-for-good/roof_work.png";
import school_bags_img from "../assets/jara-for-good/school_bags.png";
import first_donations_img from "../assets/jara-for-good/first_donations.png";

export default function JaraForGood() {
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
          Jara for Good
        </div>
      </div>
      <main className="section_content jara_for_good">
        <div className="jara_for_good_top_block">
          <div>
            <h5>Community at the heart... </h5>
            <p>
              Jara is not only committed to building the very best guest experience, and providing
              an environmental and ethical offering through #responsiblehospitality, Jara is also
              committed to supporting its local community, neighbours and those in need.
              <br />
              <br />
              Since inception Jara has supported the Museyo Community Youth via the tollgate kiosk -
              enabling direct revenues to support its neighbours on Lotu street.
              <br />
              <br />
              Jara for Good - setup in June 2021, is actively garnering support through its social
              media platforms to support Iberekodo Community Primary School - home to 400 students -
              with learning resources and fundraising for infrastructure, including construction /
              roofing for the school buildings.
            </p>
            <h5>JARA FOR GOOD</h5>
            <p>
              To donate money to Jara for Good, you can do so using the dedicated accounts below:
              <br />
              <br />
              LCN LTD/JARA FOR GOOD GTB - 0647592280 ACCESS - 1481949134
              <br />
              <br />
              100% of funds donated will go directly towards Jara for Good initiatives. All bank
              statements will be shared on a regular basis.
            </p>
          </div>
          <div>
            <img src={jara_for_good_img} />
          </div>
        </div>
        <div className="jara_for_good_picture_block">
          <div>
            <img src={book_swap_img} />
            <p>Book Swap</p>
          </div>
          <div>
            <img src={book_swap_foundation_img} />
            <p>Book Swap Foundation</p>
          </div>
          <div>
            <img src={jara_august_img} />
            <p>Jara for Good - August 2021 Raffle</p>
          </div>
          <div>
            <img src={jbr_raffle_img} />
            <p>JBR Raffle (N10k) - Jara for Good</p>
          </div>
          <div>
            <img src={bus_img} />
            <p>Bus Stop Face Lift!</p>
          </div>
          <div>
            <img src={book_donate_img} />
            <p>Books Donated</p>
          </div>
          <div>
            <img src={roof_work_img} />
            <p>Roof work in need</p>
          </div>
          <div>
            <img src={school_bags_img} />
            <p>School bags donated</p>
          </div>
          <div>
            <img src={book_swap_img} />
            <p>first donations</p>
          </div>
        </div>
      </main>
    </>
  );
}
