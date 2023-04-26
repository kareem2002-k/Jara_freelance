import React from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
//imports img
import eat_img_1 from "../assets/menus/Rectangle 293.png";
import eat_img_2 from "../assets/menus/Rectangle 294.png";
import eat_img_3 from "../assets/menus/Rectangle 299.png";
import eat_img_4 from "../assets/menus/Rectangle 301.png";
import eat_img_5 from "../assets/menus/Rectangle 297.png";
import eat_img_6 from "../assets/menus/Rectangle 298.png";
import eat_img_7 from "../assets/menus/Rectangle 300.png";
import eat_img_8 from "../assets/menus/Rectangle 302.png";

const Menus = () => {
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
          Menus (Overnight Guests)
        </div>
      </div>
      <main className="section_content menus">
        <p className="menus_text_top">
          Jara provides three full meals a day, drinks (both alcoholic and soft), sweet treats and a
          snack station available throughout the day. Meals are cooked to order, guaranteeing the
          freshest most delicious cuisine - a fusion of international favourites and locally sourced
          ingredients – from the land and the sea. Lunch and Dinner menus alternate between a la
          carte and a BBQ feast for overnight guests, providing optimum variety. Menus shown below
          for your convenience. If you have any special requests / dietary requirements, please let
          us know ahead of your visit.
        </p>
        <div className="menus_flex_img">
          <img src={eat_img_1} alt="eat photo" />
          <img src={eat_img_2} alt="eat photo" />
          <img src={eat_img_3} alt="eat photo" />
          <img src={eat_img_4} alt="eat photo" />
          <img src={eat_img_5} alt="eat photo" />
          <img src={eat_img_6} alt="eat photo" />
          <img src={eat_img_7} alt="eat photo" />
          <img src={eat_img_8} alt="eat photo" />
        </div>
        <p className="menus_text_middle">
          Still hungry between meals? Or you'd like to order something for the ride home? Pricing
          for food items, ordered outside of the all-inclusive food offering - priced per portion,
          can be found below:
        </p>
        <div className="menu_items">
          <div className="menu_items_breakfast_sides">
            <div className="menu_items_breakfast">
              <h6>BREAKFAST</h6>
              <ul>
                <li className="menu_items_flex">
                  <p>Big British Breakfast</p>
                  <span className="menu_line"></span>
                  <span className="menu_price">N9,000</span>
                </li>
                <li className="menu_items_flex">
                  <p>Nigerian Breakfast</p>
                  <span className="menu_line"></span>
                  <span className="menu_price">N7,000</span>
                </li>
                <li className="menu_items_flex">
                  <p>Pancakes</p>
                  <span className="menu_line"></span>
                  <span className="menu_price">N6,000</span>
                </li>
              </ul>
            </div>
            <div className="menu_items_sides">
              <h6>SIDES</h6>
              <ul>
                <li className="menu_items_flex">
                  <p>Fries</p>
                  <span className="menu_line"></span>
                  <span className="menu_price">N3,000</span>
                </li>
                <li className="menu_items_flex">
                  <p>Wedges</p>
                  <span className="menu_line"></span>
                  <span className="menu_price">N3,000</span>
                </li>
                <li className="menu_items_flex">
                  <p>Rice</p>
                  <span className="menu_line"></span>
                  <span className="menu_price">N3,000</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu_items_hearty_salads">
            <h6>HEARTY MEALS</h6>
            <ul>
              <li className="menu_items_flex">
                <p>Fish and Chips</p>
                <span className="menu_line"></span>
                <span className="menu_price">N9,000</span>
              </li>
              <li className="menu_items_flex">
                <p>Burger</p>
                <span className="menu_line"></span>
                <span className="menu_price">N8,500</span>
              </li>
              <li className="menu_items_flex">
                <p>Chicken Pesto Pasta</p>
                <span className="menu_line"></span>
                <span className="menu_price">N8,500</span>
              </li>
              <li className="menu_items_flex">
                <p>Jara Seafood Stew</p>
                <span className="menu_line"></span>
                <span className="menu_price">N8,500</span>
              </li>
              <li className="menu_items_flex">
                <p>Piri Piri Fish</p>
                <span className="menu_line"></span>
                <span className="menu_price">N9,500</span>
              </li>
              <li className="menu_items_flex">
                <p>Seafood Pasta</p>
                <span className="menu_line"></span>
                <span className="menu_price">N11,500</span>
              </li>
              <li className="menu_items_flex">
                <p>Millies Spicy Shrimp Pasta</p>
                <span className="menu_line"></span>
                <span className="menu_price">N9,500</span>
              </li>
              <li className="menu_items_flex">
                <p>BBQ Skewer and Fries</p>
                <span className="menu_line"></span>
                <span className="menu_price">N8,000</span>
              </li>
              <li className="menu_items_flex">
                <p>Chicken Lap and Fries</p>
                <span className="menu_line"></span>
                <span className="menu_price">N8,000</span>
              </li>
              <li className="menu_items_flex">
                <p>Catfish Peppersoup</p>
                <span className="menu_line"></span>
                <span className="menu_price">N6,000</span>
              </li>
              <li className="menu_items_flex">
                <p>Chicken Pesto Pasta</p>
                <span className="menu_line"></span>
                <span className="menu_price">N8,500</span>
              </li>
              <li className="menu_items_flex">
                <p>Abula</p>
                <span className="menu_line"></span>
                <span className="menu_price">N5,500</span>
              </li>
              <li className="menu_items_flex">
                <p>Eleko Seafood Okro</p>
                <span className="menu_line"></span>
                <span className="menu_price">N9,500</span>
              </li>
            </ul>
          </div>
          <div className="menu_items_hearty_salads">
            <h6>HEARTY MEALS</h6>
            <ul>
              <li className="menu_items_flex">
                <p>Caesar Salad</p>
                <span className="menu_line"></span>
                <span className="menu_price">N6,500</span>
              </li>
              <li className="menu_items_flex">
                <p>Caesar Salad with Chicken</p>
                <span className="menu_line"></span>
                <span className="menu_price">N8,500</span>
              </li>
              <li className="menu_items_flex">
                <p>Greek Salad</p>
                <span className="menu_line"></span>
                <span className="menu_price">N6,500</span>
              </li>
              <li className="menu_items_flex">
                <p>JTaco Salad</p>
                <span className="menu_line"></span>
                <span className="menu_price">N8,500</span>
              </li>
              <li className="menu_items_flex">
                <p>Tuna Nicoise</p>
                <span className="menu_line"></span>
                <span className="menu_price">N8,500</span>
              </li>
              <li className="menu_items_flex">
                <p>Shawarma</p>
                <span className="menu_line"></span>
                <span className="menu_price">N6,000</span>
              </li>
              <li className="menu_items_flex">
                <p>Indomie</p>
                <span className="menu_line"></span>
                <span className="menu_price">N3,500</span>
              </li>
            </ul>
          </div>
        </div>
        <h4>Early Arrival and Walk-In Options</h4>
        <p className="menus_text_bottom">
          Subject to availability and management discretion Jara provides a TIME and
          CONSUMPTION-based
          <br /> offering. Should you arrive prior to the earliest permitted entry time, or wish to
          extend your
          <br /> enjoyment, Jara has a range of options available to you. Please click the PDF link
          below.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://www.jarabeachresort.com/_files/ugd/310b2a_e6cd1f6a4d2f461ca74f618f720df588.pdf"
            )
          }
          className="black_button"
        >
          Early Arrival & Extension Options (pdf)
        </button>
      </main>
      <GetTouch />
      <MapView />
    </>
  );
};

export default Menus;
