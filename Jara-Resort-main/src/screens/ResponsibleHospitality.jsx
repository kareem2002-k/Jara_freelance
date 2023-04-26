import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import Staff from "../assets/Staff.png";
import Img from "../assets/responsible-hospitality/image 7.png";
import GroupBooking from "./home-sub-component/GroupBooking";

export default function ResponsibleHospitality() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 67, 8, 5, 4, 5, 3];
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
          Responsible
          <br />
          Hospitality
        </div>
      </div>
      <div className="section_content history_row">
        <div className="history_row_img">
          <img src={Img} alt="Img" />
        </div>
        <div className="history_row_content">
          <p>
            Jara Beach Resort is committed to being a responsible hospitality establishment. We
            operate fully 'off' the national grid and are working our way towards full
            sustainability. From solar technology to limited generator running time, Jara continues
            to balance environmentally-friendly best practice with providing the very best beach
            experience in Nigeria. We welcome all guests to help be a part of the solution! We use a
            mix of generators and solar power. Our schedule ensures a warm shower and cool room as
            you prepare for dinner, ahead of a comfortable night’s sleep. All lights, appliances and
            plugs for small devices will run around the clock - you won't miss out on anything! All
            rooms have rechargeable fans. Air-Conditioners and Water Heaters will operate between
            the following times: 5pm–7pm and 9pm–10am.
            <br />
            <br />
            At our snack station, you'll find as many Nigerian-made products as possible - from
            crisps to nuts, coconut biscuits, chocolate and dried fruits! Should you have any
            suggestions / local brands you love, please let us know!
          </p>
        </div>
      </div>
      <div
        className="section_content"
        style={{ backgroundColor: "#000", marginBottom: "200px", marginTop: "80px" }}
      >
        <div className="responsible_hospitality_panel">
          <div>
            <h6>Recycling</h6>
            <p>
              We are proud recycling partners with WATOWE Enterprise, who assist with weekly
              collections of all of our plastics and tins - not a single plastic or glass bottle
              goes to waste!
            </p>
          </div>
          <div>
            <h6>Solar Panels</h6>
            <p>
              Jara has over 30 solar panels drawing electrical energy to all guest and admin
              buildings, enabling all load requirements asides ACs. We also have a solar-powered
              freezer.
            </p>
          </div>
          <div>
            <h6>Rain Water Recycling</h6>
            <p>
              Jara has four roof-connected water tanks, allowing rain water to be re-used for plant
              watering, and foot baths.
            </p>
          </div>
          <div>
            <h6>Solar Water Tank Heating</h6>
            <p>
              We currently have multiple 200 litre water tanks for use around the property,
              including warming water for all washing up in the kitchen! As well as for guest
              showers in the family cabins and villas.
            </p>
          </div>
          <div>
            <h6>Inverter Technology</h6>
            <p>
              The combination of solar panels and inverter batteries allow all power outlets to
              provide light 24/7 - every TV, every light bulb, all solar-powered.
            </p>
          </div>
          <div>
            <h6>Wind Turbine</h6>
            <p>
              We have also harnessed wind via our turbine, allowing us to use energy from the ocean
              365 days a year, this supplements the power drawn from the solar panels currently.
            </p>
          </div>
        </div>
      </div>
      <GetTouch />
      <MapView />
    </>
  );
}
