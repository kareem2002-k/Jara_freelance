import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import rings_icon from "../assets/weddings/image 35.png";
import img1 from "../assets/weddings/img1.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useState } from "react";

const Weddings = () => {
  const [photoCollection, setPhotoCollection] = useState([
    { img: img1 },
    { img: img1 },
    { img: img1 },
    { img: img1 },
    { img: img1 },
  ]);
  return (
    <>
      <div className="components_section">
        <div
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="1000"
          style={{ color: "#fff", fontSize: "60", textAlign: "center" }}
          className="hero_heading Raleway"
        >
          Weddings
        </div>
      </div>
      <main className="section_content wedding">
        <div className="wedding_swiper">
          <Swiper
            onPaginationShow={true}
            pagination={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="img" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="wedding_flex">
          <div className="wedding_flex_item">
            <p className="pr">
              For the most romantic and memorable wedding, choose Jara. Jara Beach Resort boasts one
              of the most picturesque venues in Lagos - offering a destination feel, just along the
              expressway. This breathtaking setting is suitable for a range of wedding options.
              Professional and friendly staff are on hand to assist, ensuring the
              <br /> perfect 'big day'.
              <br />
              <br />
              Your options are endless - Jara offers the most romantic and exclusive wedding that
              you could possibly dream of.
              <br />
              The maximum capacity of the venue is 150 guests, with a 10 vendor limit.
              <br />
              All Jara Beach Resort Weddings enjoy exclusive access to the venue (required), the
              space will be restricted to your group only for the duration of your booking. Vendors/
              decorators etc are not included in the headcount. Jara's booking team are on hand to
              begin plans for your dream beach wedding. If you require a comprehensive wedding
              planner, this will need to be arranged externally.
              <br />
              <br />
              The best experience includes taking all 12 rooms for two nights. All-inclusive Jara
              experiences, or venue-only options available. Package options shown below.
              <br />
              <br />
              Should you wish to take a tour of Jara ahead of your visit, you may do so for up to 30
              minutes, for N10,000 - this covers two people and includes a welcome soft drink.
              Priced at N5,000 per person thereafter. Must be booked / arranged in advance - please
              email ahead. The N10,000 paid is then removed from the total of any booking secured
              within one month of the inspection
            </p>
          </div>

          <div className="wedding_flex_item wedding_last">
            <div className="wedding_last_top">
              <div>
                <p style={{ fontWeight: 400 }}>
                  Wedding 1 - Venue Only
                  <br />
                  <br />
                  Should you wish to take the
                  <br />
                  venue only, this package
                  <br />
                  permits external food and
                  <br />
                  drink vendors.
                </p>
                <p style={{ color: "#787878" }}>
                  - Access from 11am - 9pm
                  <br />
                  - Permits up to 100 Guests
                  <br />
                  - Limited Jara Staff
                  <br />
                  - Access to Room 1 and 2<br />
                  only as standard - for bridal
                  <br />
                  parties to change.
                  <br />
                  <br />
                  Total cost: N4m + Taxes.
                </p>
              </div>
              <div>
                <img src={rings_icon} />
              </div>
            </div>

            <div className="wedding_last_top">
              <div>
                <p style={{ fontWeight: 400 }}>
                  Wedding 2 - The Jara
                  <br />
                  Experience
                  <br />
                  <br />
                  The ultimate wedding
                  <br />
                  experience, dinner and
                  <br />
                  breakfast for overnight
                  <br />
                  guests. Reception canapés,
                  <br />
                  dinner and drinks - exc.
                  <br />
                  Champagne provided.
                </p>
                <p style={{ color: "#787878" }}>
                  - Access from 1pm - 11am
                  <br />
                  - Permits up to 29 overnight Guests and Day Guests
                  <br />
                  - Full Jara Service and Staff
                  <br />
                  - Access to all rooms.
                  <br />
                  - Food and Drink provided.
                  <br />
                  <br />
                  Total cost: N4m + N65,000
                  <br />
                  per day visitor + Taxes.
                </p>
              </div>
              <div>
                <img src={rings_icon} />
              </div>
            </div>
          </div>
        </div>
        <div className="useful_information">
          <div className="pr">
            <h4>Additional Useful Information</h4>
            <p>
              The venue will be yours to decorate as appropriate (non-scarring installations).
              <br />
              If decorators are required to visit the day before, an additional fee may apply
              <br />
              depending upon your full requirements
            </p>
            <ul>
              <li>
                You will have use of all outdoor facilities until stated time above. Package #2
                <br /> follows lights out at 12midnight.
              </li>
              <li>You're welcome to bring photo / videographers.</li>
              <li>An external DJ is welcome within either package.</li>
              <li>
                A cake table and knife can be provided if needed. Enclosed parking at the
                <br /> venue provides security for up to 12 vehicles. All other vehicles will be
                outside
                <br /> the venue, watched by guards - but parked at the owner's risk.
              </li>
              <li>Consumption Tax and VAT are excluded on all pricing provided (12.5% total).</li>
              <li>A non-refundable deposit of N500,000 is required to secure your date.</li>
            </ul>
            <p>
              To begin planning your dream day, please complete the short form below with a<br />
              detailed outline of your requirements and we'll get back to you in no time. If you
              <br />
              have a budget in mind, please include this so we can provide an outline that
              <br />
              would best suit you.
            </p>
          </div>

          <div className="wedding_form">
            <h5>
              Book Your Wedding
              <br />
              At Jara
            </h5>
            <div>
              <input name="FirstName" placeholder="First Name" />
              <input name="LastName" placeholder="Last Name" />
              <input name="Email" placeholder="Email" />
              <input name="Phone" placeholder="Phone" />
              <input name="YourDreamDayDate" placeholder="Your dream day date" />
              <textarea name="TypeYourMessageHere*" placeholder="Type your message here *" />
            </div>
            <button className="white_button">Send</button>
          </div>
        </div>
      </main>
      <GetTouch />
      <MapView />
    </>
  );
};

export default Weddings;
