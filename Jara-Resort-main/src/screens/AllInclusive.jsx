import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import drinks from "../assets/all-inclusive/drinks.png";
import food1 from "../assets/all-inclusive/food1.png";
import food2 from "../assets/all-inclusive/food2.png";
import food3 from "../assets/all-inclusive/food3.png";
import food4 from "../assets/all-inclusive/food4.png";
import food5 from "../assets/all-inclusive/food5.png";
import food6 from "../assets/all-inclusive/food6.png";
import food7 from "../assets/all-inclusive/food7.png";
import food8 from "../assets/all-inclusive/food8.png";

export default function AllInclusive() {
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
          All Inclusive
        </div>
      </div>
      <div className="section_content">
        <div className="food_images_grid">
          <img src={food1} alt="food image" />
          <img src={food2} alt="food image" />
          <img src={food3} alt="food image" />
          <img src={food4} alt="food image" />
          <img src={food5} alt="food image" />
          <img src={food6} alt="food image" />
          <img src={food7} alt="food image" />
          <img src={food8} alt="food image" />
        </div>
      </div>

      <div className="all_inclusive_info">
        <p className="para">
          JARA BEACH RESORT is proud to offer Nigeria's premiere all-inclusive experience. Designed
          to ensure maximum relaxation, the fee you pay on booking can be the only cost you have. We
          provide three full meals a day, drinks (both alcoholic and soft) and snacks throughout the
          day. Meals are cooked to order, guaranteeing the freshest most delicious cuisine - a
          fusion of international favourites and locally sourced ingredients – from the land and the
          sea.
        </p>
        <img src={drinks} alt="drinks image" />
        <div style={{ display: "flex", marginTop: "2em", flexWrap: "wrap" }}>
          <button style={{ marginRight: "1em" }} className="black_button">
            Cocktail Menu
          </button>
          <button className="white_button">Mocktail Menu</button>
        </div>
      </div>
      <div className="section_content">
        <div className="all_inclusive_footer">
          <div className="info_block">
            <h3>Corkage</h3>
            <p>
              Selected beverages are permitted to be brought in to Jara during your stay. These must
              be communicated and paid for in advance of your stay. Some brands are not permitted.
              Pricing is listed per bottle below:
            </p>
            <p>
              <span>Beer/Stout or Soft Drinks</span> - N3,500
            </p>
            <p>
              <span>Wines</span> - N3,500
            </p>
            <p>
              <span>Spirits and Champagne </span> - N5,000
            </p>

            <div></div>
          </div>
          <div className="info_block">
            <p>
              Our Premium Collection is available to any guest wishing to make their stay
              extra-special. We have curated a small, but memorable range of champagne, wines and
              spirits - available to be purchased during your stay via POS or bank transfer (JARA is
              a completely cashless resort). Items can also be pre-ordered at the time of booking. ​
            </p>
            <p>
              For private full venue bookings, we can provide corkage on a per request basis, only
              ahead (and paid for) ahead of your visit.
            </p>
            <p>
              All games and leisure activities inside the resort are also included within your
              all-inclusive package. There is no charge for the games, use of the pool or park, or
              even the WIFI! Selected Activities are chargeable.
            </p>
          </div>
        </div>
      </div>

      <GetTouch />
      <MapView />
    </>
  );
}
