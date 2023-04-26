import React, { useState } from "react";
import presentationImg from "../assets/business-retreat/presentationImg.png";
import brandImg from "../assets/business-retreat/brandImg.png";
import groupPhoto from "../assets/business-retreat/groupPhoto.png";
import package1 from "../assets/business-retreat/package1.png";
import package2 from "../assets/business-retreat/package2.png";
import package3 from "../assets/business-retreat/package3.png";
import package4 from "../assets/business-retreat/package4.png";

import VideosContainer from "../components/VideosContainer";
import BookingRequestForm from "../components/BookingRequestForm";
import GetTouch from "./home-sub-component/GetTouch";

const BusinessRetreat = () => {
  const [videos, setVideos] = useState([
    "https://www.youtube.com/embed/iGgBsoLe2Wk",
    "https://www.youtube.com/embed/5_vYZhw_2o0",
    "https://www.youtube.com/embed/YPa2CdCh-wo",
    "https://www.youtube.com/embed/CTonyv8BKZo",
    "https://www.youtube.com/embed/jevfn7qgfos",
  ]);

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
          Business Retreat
        </div>
      </div>

      <div className="section_content">
        <div className="business_retreat">
          <div className="header_video">
            <iframe
              width="560"
              height="615"
              style={{ height: "100%", width: "100%" }}
              src="https://www.youtube.com//embed/N5ly7pnutjc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="header_info_block">
            <div className="text_block">
              <p className="pr">
                The benefits of getting away from the office for a face-to-face retreat are
                well-known. An opportunity to gather your key team members, evaluate your
                organisation's historic performance while setting the scene for more successful
                future collaboration - boosting employee morale and building a strong and connected
                culture. A business retreat at JARA BEACH RESORT is unlike any other.
              </p>
              <h3>DAY VISIT and OVERNIGHT options available.</h3>
              <p className="pr">
                With multiple locations within our 5,000 sqm venue to choose from, JARA's team will
                help curate a personalised schedule of activities with you. Presentations can be
                made on our 6-foot wide LED TV and volleyball, golf or badminton can be played in
                the leisure area - a balance of structured bonding, team-building activities, and
                unstructured free time making for a truly valuable experience. All business
                stationary, energising snacks and drinks included throughout the day.
              </p>
              <p className="pr">
                Should you wish to take a tour of Jara ahead of your visit, you may do so for up to
                30 minutes, for N10,000 - this covers two people and includes a welcome soft drink.
                Priced at N5,000 per person thereafter. Must be booked / arranged in advance -
                please email ahead. The N10,000 paid is then removed from the total of any booking
                secured within one month of the inspection.
              </p>
            </div>
            <img src={presentationImg} alt="presentation image" />
          </div>
          <div className="btn_block">
            <button className="black_button">View Activities</button>
            <button className="black_button">Sample Schedule</button>
            <button className="black_button">View Terms</button>
          </div>
          <div className="header">
            <h2>PACKAGES</h2>
          </div>
          <div className="package_cards">
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="package_card"
            >
              <div className="text">
                <p>Fun Day Out</p>
                <p>
                  For beach bonding on a budget, look no further than our Day Pass experience.
                  Prices shown on Day Pass page. Breakfast and conference facilities not included.
                </p>
                <p className="text_muted">
                  11:30am-5:30pm Lunch, Drinks and Snacks Click here to book.
                </p>
              </div>
              <div className="photo">
                <img src={package1} alt="package img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="package_card"
            >
              <div className="text">
                <p>Business Retreat #1</p>
                <p>
                  The perfect choice for a productive day's strategy session. N1,550,000 before tax
                  based on 20 guests, as shown below.
                </p>
                <p className="text_muted">
                  9am-4pm Breakfast, Lunch, Drinks and Snacks Use of Conference Facilities
                </p>
              </div>
              <div className="photo">
                <img src={package2} alt="package img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="package_card"
            >
              <div className="text">
                <p>Business Retreat #2</p>
                <p>
                  Like #1 only longer! Extensions permitted based on 15% of total booking, per
                  additional hour. i.e. 2 hours extra equals a total of N2,015,000 before tax based
                  on a team of 20 guests.
                </p>
                <p className="text_muted">
                  9am-6pm Breakfast, Lunch, Drinks and Snacks. Use of Conference Facilities. Dinner
                  options also available
                </p>
              </div>
              <div className="photo">
                <img src={package3} alt="package img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="package_card"
            >
              <div className="text">
                <p>Overnight/Multi-Day</p>
                <p>
                  Jara's retreat options include overnight stays in up to 12 rooms (info).
                  Neighbouring hotels are available for larger groups however these need to be
                  explored directly. Pricing for overnight Jara stays here.
                </p>
                <p className="text_muted">
                  1pm-11am Breakfast, Lunch, Dinner, Drinks and Snacks + Fire Pit etc! Use of
                  Conference Facilities
                </p>
              </div>
              <div className="photo">
                <img src={package4} alt="package img" />
              </div>
            </div>
          </div>
          <div className="center_btn">
            <button
              onClick={() => {
                window.open(
                  "https://www.jarabeachresort.com/_files/ugd/310b2a_9657ff8825b8432c96be721590b8d482.pdf"
                );
              }}
              className="black_button"
            >
              Business Retreat Overview (PDF)
            </button>
          </div>
          <div className="footer_info_block">
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="text_block"
            >
              <h3>
                VISITING FOR THE DAY ONLY BUSINESS RETREAT #1 above (Includes breakfast, lunch,
                sweet treats and drinks) Based on 9am Arrival and 4pm Departure
              </h3>
              <ul>
                <li>
                  Priced per head (groups are booked whether alcohol or no alcohol will be served):
                </li>
                <li>Alcohol (from 12noon) - N65,000</li>
                <li>Non-Alcohol - N55,000</li>
              </ul>
              <p>
                Conference facility fee (exclusive use of the gazebo includes tea /coffee / seating
                / big screen and stationary): N250,000
              </p>
              <ul>
                <li>All pricing exclude 5% consumption tax and 7.5% VAT</li>
                <li>Extensions permitted based on 15% of total booking, per additional hour</li>
              </ul>
              <p>
                An example of 20 STAFF visiting for day, with alcohol served: N1,550,000 before
                taxes
              </p>
              <p>Rates for Overnight Retreats are based on the pricing outlined here</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="img_block"
            >
              <h3>Trusted By: </h3>
              <img src={brandImg} alt="brand image" />
            </div>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-delay="150"
            data-aos-duration="1000"
            className="photo_block"
          >
            <img style={{ width: "90%", margin: "0 auto" }} src={groupPhoto} alt="group photo" />
          </div>
          <VideosContainer videos={videos} limit={4} />
        </div>
      </div>
      <BookingRequestForm />
      <div style={{ margin: "9em" }}></div>
      <GetTouch />
    </>
  );
};

export default BusinessRetreat;
