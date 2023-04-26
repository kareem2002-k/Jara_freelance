import React from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
//imports img
import packages_photo_1 from "../assets/packages/Rectangle 256.png";
import packages_photo_2 from "../assets/packages/Rectangle 256 (1).png";
import packages_photo_3 from "../assets/packages/Rectangle 256 (2).png";
import packages_photo_4 from "../assets/packages/Rectangle 256 (3).png";
import packages_photo_5 from "../assets/packages/Rectangle 256 (4).png";
import packages_photo_6 from "../assets/packages/Rectangle 256 (5).png";
import { Link } from "react-router-dom";

const Packages = () => {
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
          Packages
        </div>
      </div>
      <main className="section_content packages">
        <p className="packages_text">
          Jara offers a self-tailored booking process allowing guests to choose as much or as little
          as they'd like for their visit. This page is designed to provide some guidance on the type
          of options available, complete with pricing. We have a range of custom add-ons with more
          detail provided on the following pages:
          <Link to={"/activities"}>Activities</Link> |<Link to="/experiences">Experiences</Link> |
          <Link to="/special-requests">Special Requests</Link> |
          <Link to="/car-services">Car Service</Link>
        </p>
        <div className="packages_flex">
          <div>
            <h4>Simple Proposal</h4>
            <img src={packages_photo_1} />
            <p>
              Jara offers a range of options and locations for simple proposals. Simply share your
              requirements via email to discuss with the booking's team. Options include, but are
              not limited to Room Decor ('Marry Me'), champagne or sunset picnics. Note evening /
              sunset options apply to overnight guests only.
              <br />
              <br />
              For candle lights and rose petals (pictured) a cost of N60,000 + taxes would apply.
            </p>
          </div>
          <div>
            <h4>Proposal (external decorator)</h4>
            <img src={packages_photo_2} />
            <p>
              Should you wish to instruct an external decorator to visit Jara and setup for your
              unique proposal, a cost of N120,000 + taxes would apply providing two-hour access for
              up to four vendor staff. All installations must be non-scarring. External
              photographers/ videographers or musicians are priced separately at N25,000 + taxes
              each.
            </p>
          </div>
          <div>
            <h4>Honeymoon 1 - Extra Special</h4>
            <img src={packages_photo_3} />
            <p>
              Jara's Villas (Room 10 - Sunrise and 11 - Sunset) were created specifically with
              newlyweds in mind. Two two-story fully oceanfront rooms with double vanity and
              showers, walk-in wardrobes and kingsize beds. Add Champagne on arrival, DIY Painting,
              Massage (2 x 1-hour deep tissue), Floating Breakfast, Sunset Picnic and champagne
              Beachside Dinner and you'll pay N1,605,000 + taxes for a three night stay.
            </p>
          </div>
          <div>
            <h4>Honeymoon 2 - Special</h4>
            <img src={packages_photo_4} />
            <p>
              Jara's oceanfront standard rooms are also a honeymoon favourite. Rooms 1-5 all have
              stunning oceanfront views (rooms 3-5 upstairs) and are ideal for newlyweds. A
              three-night visit for two with beachside lunch with Prosecco (seahorse), DIY painting,
              a 30 minute Horse Ride and floating breakfast would cost: N661,500 + taxes.
            </p>
          </div>
          <div>
            <h4>Girls Trip</h4>
            <img src={packages_photo_5} />
            <p>
              Girls just wanna have sun! Jara offers a range of options for adult groups - whether
              single occupant rooms (N459,000 for 3 nights in rooms 1-5, per person) or sharing
              family rooms. i.e. 4 guests in rooms 6-9 would cost N300,000 + taxes (Just N68,187.50
              + taxes) for our all-inclusive experience. 4 adults are permitted in the villas (2
              upstairs, 2 downstairs) for N650,000 + taxes (N162,500 per person). Add massages,
              horse riding or DIY painting to make your stay extra-special.
            </p>
          </div>
          <div>
            <h4>Family Fun</h4>
            <img src={packages_photo_6} />
            <p>
              Jara is all about family! Our family owned and operated business puts children at the
              forefront. Our standard rooms welcome an infant OR a toddler, but in general we
              recommend the family rooms (6-9 + 12) for more space and all round comfort. A family
              with two children (6-17yrs ) will pay N801,000 + taxes for a three night stay in rooms
              6-9 or N1,,176,000 + taxes in our family deluxe room (12). Our treasure hunt is
              provided at no charge.
            </p>
          </div>
        </div>
      </main>
      <GetTouch />
      <MapView />
    </>
  );
};

export default Packages;
