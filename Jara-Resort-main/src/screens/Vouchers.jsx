import React from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
//imports img
import voucher_img from "../assets/vouchers/image 48.png";

const Vouchers = () => {
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
          Vouchers
        </div>
      </div>
      <main className="section_content vouchers">
        <div className="vouchers_flex">
          <div className="vouchers_text">
            <h4>THE PERFECT GIFT</h4>
            <p>
              - OVERNIGHT & DAY PASS OPTIONS
              <br />
              Looking to treat a couple of newlyweds, birthday celebrant or wish to treat a
              deserving staff member? The Jara Beach Resort Gift Voucher is ideal!
              <br />
              Choose your own value / experience.
              <br />
              e.g. 1 night = N225,000 (inc 5% consumption tax and 7.5% VAT), OR simply choose your
              own voucher value to be used against any Jara Beach Resort purchase, e.g. N50,000,
              N100,000, N250,000 etc. Physical vouchers and presentation envelopes are FREE for
              <br /> purchases above N50,000 (N2,000 if under) and available on site, or at the
              Booking Office at 33 Fola Osibo, Lekki.
              <br />
              <br />
              Vouchers are valid for six months from the date of purchase.
            </p>
          </div>
          <img src={voucher_img} alt="Voucher" className="vouchers_img" />
        </div>
        <div className="center_btn">
          <button
            onClick={() => {
              window.open("https://paystack.com/pay/giftvoucher");
            }}
            className="black_button"
          >
            Buy Voucher Now
          </button>
        </div>
      </main>
      <GetTouch />
      <MapView />
    </>
  );
};

export default Vouchers;
