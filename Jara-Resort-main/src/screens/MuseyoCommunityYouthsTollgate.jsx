import React from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import flyer_img from "../assets/museyo-community-youths-tollgate/image 41.png";
import photo from "../assets/museyo-community-youths-tollgate/image 42.png";

const MuseyoCommunityYouthsTollgate = () => {
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
          Museyo Community Youths Tollgate
        </div>
      </div>
      <main className="section_content museyo_community_youths_tollgate">
        <div className="museyo_community_youths_tollgate_flex">
          <div>
            <p className="pr">
              Jara is committed in its support of the local Museyo community - specifically its
              youth; supporting development, religious celebrations and holidays. In January 2021
              Jara sponsored a tollgate kiosk permitting the community to charge for access in to
              Jara, in a friendly and professional way, for each arriving vehicle. All proceeds are
              received and managed directly by the community representatives.
              <br />
              <br />
              Jara's parking remains free to guests for the duration of their stay - in turn we hope
              you can support the local community with a token contribution to support its
              livelihood and development. Should you wish to add 'jara' of your own, it will of
              course be welcome. IMPORTANTLY! These rates remain accurate as of July 2022, as
              reflected on the kiosk signage. Our friends at the kiosk can occasionally misinterpret
              these rates, if you have any issue, please confidently refer to this page.
            </p>
          </div>
          <div>
            <img src={photo} />
          </div>
        </div>
        <div className="museyo_community_youths_tollgate_flyer">
          <img src={flyer_img} />
        </div>
      </main>
      <GetTouch />
      <MapView />
    </>
  );
};

export default MuseyoCommunityYouthsTollgate;
