import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import suv from "../assets/car-services/suv.png";
import saloon from "../assets/car-services/saloon.png";
import miniBus from "../assets/car-services/miniBus.png";
import coasterBus from "../assets/car-services/coasterBus.png";

(", seats: ,IkejaWay, IkejaReturn:, islandWay:, islandReturn:}");

export default function CarServices() {
  const [carList, setCarList] = useState([
    {
      id: "Saloon",
      mailTo:
        "mailto:bookings@jarabeachresort.com?subject=Car Hire Service | Booking Request - Saloon",
      img: saloon,
      type: "Saloon",
      desc: "Image for illustration purposes only, vehicle may vary",
    },
    {
      id: "Suv",
      mailTo:
        "mailto:bookings@jarabeachresort.com?subject=Car Hire Service | Booking Request - SUV",
      img: suv,
      type: "SUV",
      desc: "Image for illustration purposes only, vehicle may vary",
    },
    {
      id: "miniBus",
      mailTo:
        "mailto:bookings@jarabeachresort.com?subject=Car Hire Service | Booking Request - Mini Bus",
      img: miniBus,
      type: "Mini Bus",
      desc: "Image for illustration purposes only, vehicle may vary",
    },
    {
      id: "bus",
      mailTo:
        "mailto:bookings@jarabeachresort.com?subject=Car Hire Service | Booking Request - Coaster Bus",
      img: coasterBus,
      type: "Coaster Bus",
      desc: "Image for illustration purposes only, vehicle may vary",
    },
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
          Car Services
        </div>
      </div>
      <div className="section_content">
        <div className="car_services_info pr">
          <p className="pr">
            Working with our friends from Ride On Nigeria, we are pleased to provide a variety of
            car service options.
          </p>
          <p>Ikeja (Mainland Lagos) and Island (Ikoyi / Lekki / VI) options listed.</p>
          <p>Seating capacities listed aligned with Lagos State Covid-19 Safety Compliance.</p>
          <ul>
            <li>Payments to be in advance to enable confirm booking - 48 hours notice required</li>
            <li>All toll fees and passes are responsibility of the client</li>
            <li>Client is responsible for driver’s accommodation outside Lagos</li>
            <li>
              All job cancellation attracts 30% deduction from your payment. We advise you give a 72
              hours notice from the day of booking for change of date of booked jobs. Any change of
              date notice after 72 hours will attract a 30% deduction from your payment.
            </li>
          </ul>
          <p>All pricing exclude 5% consumption tax and 7.5% VAT.</p>
        </div>

        <ul className="car_list">
          {carList.map((car) => {
            return (
              <li data-aos="flip-up" data-aos-delay="50" data-aos-duration="1000" key={car.id}>
                <img width={290} height={225} src={car.img} alt="car image" />
                <div className="car_item">
                  <h2>{car.type}</h2>
                  <p className="para" style={{ textAlign: "left" }}>
                    {car.desc}
                  </p>
                  <div className="car_item_info">
                    <div>
                      <h4>Seats</h4>
                      <span>3</span>
                    </div>
                    <div>
                      <h4>Ikeja 1-Way</h4>
                      <span>N40,000</span>
                    </div>
                    <div>
                      <h4>Ikeja Return</h4>
                      <span>N70,000</span>
                    </div>
                    <div>
                      <h4>Island 1-Way</h4>
                      <span>N35,000</span>
                    </div>
                    <div>
                      <h4>Island Return</h4>
                      <span>N60,000</span>
                    </div>
                    <a href={car.mailTo} target="_self">
                      <button style={{ margin: "2em" }} className="black_button">
                        Book Now
                      </button>
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <GetTouch />
      <MapView />
    </>
  );
}
