import React from "react";
import photo1 from "../assets/content-creators/photo1.png";
import photo2 from "../assets/content-creators/photo2.png";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";

const ContentCreators = () => {
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
          Content Creators
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
          Jara Beach Resort welcomes and encourages guests to enjoy our beautiful space and snap and
          upload photos for personal use, promoting Nigeria's beautiful coastline and tourism in
          general. Commercial activity is handled differently and requires prior discussion /
          approval - i.e. music videos, brand shoots, product endorsements etc.
        </div>
      </div>
      <div className="section_content">
        <div className="content_creators_photos">
          <img
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos="fade-right"
            src={photo1}
            alt="girl photo"
          />
          <img
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos="fade-left"
            src={photo2}
            alt="girl photo"
          />
        </div>
      </div>
      <div className="section_content">
        <div className="content_creators_info">
          <div className="info_block">
            <h3>Barter</h3>
            <span>
              Jara welcomes collaboration with content creators, however we are not able to provide
              fully complimentary visits. We are open to unique partnership propositions and are
              happy to provide discount codes or vouchers for use should the opportunity be deemed
              mutually beneficial. We welcome you to email{" "}
              <a href="mailto:info@jarabeachresort.com">info@jarabeachresort.com</a>
            </span>
          </div>
          <div className="info_block">
            <h3>Rewards</h3>
            <span>
              Jara aims to repost / share guest's online content. While not guaranteed, we certainly
              do our best. If our page or location is tagged, Jara will post under the implied
              approval. For any photos or videos posted without relevant tags, we will reach out for
              approval. We'll do our best to reward those in good faith and equally hope if you've
              enjoyed your stay and post online, you'll be good enough to allow others to know where
              you are - after all supporting local tourism is a win for all.
            </span>
          </div>
        </div>
      </div>
      <GetTouch />
      <MapView />
    </>
  );
};

export default ContentCreators;
