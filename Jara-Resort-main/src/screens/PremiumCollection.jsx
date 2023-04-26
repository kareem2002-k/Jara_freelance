import React from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import drink_price_img from "../assets/premium-collection/image 43.png";
import brand_img_1 from "../assets/premium-collection/image 44.png";
import brand_img_2 from "../assets/premium-collection/image 45.png";
import brand_img_3 from "../assets/premium-collection/image 46.png";
import brand_img_4 from "../assets/premium-collection/image 47.png";

const PremiumCollection = () => {
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
          Premium Collection
        </div>
      </div>
      <main className="section_content premium_collection">
        <div className="premium_collection_description">
          <p>
            Our Premium Collection is available to any guest wishing to make their stay
            extra-special. We have curated a small, but memorable range of champagnes, wines and
            spirits - available to be purchased during your stay via POS or bank transfer (JARA is a
            completely cashless resort). Items can also be pre-ordered at the time of booking. The
            following items represent some of the items currently available to buy.
          </p>
          <p>Jara's Premium Champagne collection includes the following brands:</p>
          <ul>
            <li>Bollinger</li>
            <li>Laurent Perrier</li>
            <li>Taittinger</li>
          </ul>
          <p>
            Should you prefer to purchase Moët & Chandon Brut Champagne, the cost is N75,000 +
            taxes.
          </p>
          <div>
            <img src={brand_img_1} alt="Brand beverage" />
            <img src={brand_img_2} alt="Brand beverage" />
            <img src={brand_img_3} alt="Brand beverage" />
            <img src={brand_img_4} alt="Brand beverage" />
          </div>
          <p>
            We can source any bottle found in Nigeria, so if it's not listed, please do not hesitate
            to let us know what you'd like us to prepare for you. All pricing exclude 5% consumption
            tax and 7.5% VAT.
          </p>
        </div>
        <img src={drink_price_img} className="premium_collection_img_price" />
      </main>
      <GetTouch />
      <MapView />
    </>
  );
};

export default PremiumCollection;
