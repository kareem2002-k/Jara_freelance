import React from "react";
import photo from "../assets/faqs-photo.png";
import { Link } from "react-router-dom";
const FAQs = () => {
  return (
    <div>
      <div className="components_section">
        <div
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="1000"
          style={{ color: "#fff", fontSize: 40, textAlign: "center" }}
          className="hero_heading"
        >
          Frequently Asked Questions
        </div>
      </div>

      <div className="section_content pr">
        <div className="faqs_content">
          <p>
            If you have a question you feel has not been addressed on other pages of our website,
            we've done our best to cover most common queries here:
          </p>
          <h2>ROOMS (further info):</h2>
          <p>Jara has 12 exquisite, ocean-facing rooms:</p>
          <ul>
            <li>5 x standard (with queen bed ideal for couples or families with infants)</li>
            <li>5 x family rooms (queen or king bed with 2 x 4foot mattress bunk bed)</li>
            <li>
              2 x stunning, two-floor oceanfront villas (with king four-poster bed with pull-out /
              sofa bed)
            </li>
          </ul>
          <h2>DAILY SCHEDULE</h2>
          <ul>
            <li>8:30am – 10:30am - Breakfast</li>
            <li>1pm-3pm - Lunch</li>
            <li>4:30pm -Sweet Treats</li>
            <li>6:30pm - Sundowners</li>
            <li>7pm-9pm - Dinner</li>
            <li>9pm - Fire Pit</li>
            <li>9:30pm - Movie Time</li>
            <li>Midnight - Lights out</li>
          </ul>
          <h2>POWER GUIDELINES</h2>
          <p>
            Jara has no grid power. We use a mix of generators, solar and turbine power. Our
            schedule ensures a warm shower and cool room as you prepare for dinner, ahead of a
            comfortable night’s sleep. All lights and plugs for small devices will run around the
            clock. All rooms have rechargeable fans. We'd love to offer ACs for longer, but the
            current diesel situation simply is not viable. Jara is very much designed for those who
            enjoy the outdoors and ocean breeze.
          </p>
          <p>
            Air-Conditioners and Water Heaters will operate between the following times: 5pm – 7pm
            and 9pm – 10am.
          </p>
          <p>
            The family cabins and Villas receive warm water via solar water tank, around the clock.
          </p>
          <h2>SECURITY</h2>
          <p>
            We have armed guards patrolling around the clock - 24 hours a day. You may not always
            see them, but they are very much on site.
          </p>
          <p>
            We are also well connected and supportive of the local community, who in turn support
            our special beach business.
          </p>
          <h2>ALL-INCLUSIVE FOOD &amp; DRINK</h2>
          <p>
            It's true! All of your food and drink (including popular alcoholic beverages) are
            included within your booking fee. THIS MEANS YOU WON'T EVER SEE LAST NIGHT'S DINNER
            OFFERED FOR BREAKFAST, BUT IT ALSO MEANS WE'RE RESPONSIBLE FOR FEEDING YOU ONLY WHILE
            YOU REMAIN WITH US.
          </p>
          <p>
            Champagne, and top-shelf wines and spirits are not included. But can be purchased
            separately on site or ahead of your visit from our Premium Collection. All pricing
            exclude 5% consumption tax and 7.5% VAT - tax information{" "}
            <Link to="/taxes" target="_blank">
              here
            </Link>
            .
          </p>
          <h2>WIFI</h2>
          <p>
            WiFi is provided for multiple devices, with no download limit (fair usage). We have a
            one-touch connect gadget on our reception counter or you'll find the GUEST password at
            the snack station by reception.
          </p>
          <h2>CHILDREN</h2>
          <p>
            We very much welcome children of all ages and do our best to create the most welcoming
            environment. However, we remain an ocean resort in west Africa and certain parental
            preparation is still required (whether food, or insect related for example). Full
            details on children can be found{" "}
            <Link to="/children" target="_blank">
              here
            </Link>
            .
          </p>
          <h2>TOWELS</h2>
          <p>
            We provide towels and robes for your convenience. These are the property of Jara Beach
            Resort and must not be removed.
          </p>
          <h2>RATES</h2>
          <p>
            Our rates are stated on our{" "}
            <a href="https://www.jarabeachresort.com/booking" target="_blank">
              booking page
            </a>
            . Our pricing varies seasonally and from weekend to weekdays. Pricing is based on two
            adults sharing, on an all-inclusive basis. All pricing exclude 5% consumption tax and
            7.5% VAT - tax information{" "}
            <Link to="/taxes" target="_blank">
              here
            </Link>
            .
          </p>
          <h2>DAY USE</h2>
          <p>
            We are open for DAY PASS guests daily - advance booking required. Midweek and weekend
            rates available. Different prices adults with and without alcohol, children and nannies.
            Full details of our Day Pass can be seen{" "}
            <Link to="/day-pass" target="_blank">
              here
            </Link>
            .
          </p>
          <h2>SMOKING</h2>
          <p>
            Smoking is only permitted in designated areas of the resort as well as on bedroom
            balconies (only). There will be a N100,000 fee for thorough cleaning services charged to
            guest who chooses to smoke in a bedroom or indoor area, to restore it back to its
            original condition. The use of shisha, marijuana and other illegal drugs is strictly
            prohibited.
          </p>
          <h2>MOSQUITOES</h2>
          <p>
            We don't have too many mozzi's as we're very close to the ocean (a good breeze), however
            we:
          </p>
          <ul>
            <li>have Mozzi paint on all interiors</li>
            <li>
              provide complimentary all natural Jara oil which contains lemon and lemongrass known
              to be natural mosquito repellents
            </li>
            <li>spray rooms if required during dinner</li>
            <li>provide mosquito nets</li>
            <li>provide clothes patches gratis</li>
            <li>use citronella candles etc</li>
          </ul>
          <h2>WEDDING &amp; BUSINESS RETREATS</h2>
          <p>Jara Beach Resort is a perfect destination for weddings and business retreats.</p>
          <h2>SPECIAL REQUESTS</h2>
          <p>
            We welcome any special requests and will endeavour to fulfil any special needs. The more
            preparation time you can provide the better. Requests can be made via the booking form
            or emailed to{" "}
            <a href="mailto:bookings@jarabeachresort.com">bookings@jarabeachresort.com</a>.
          </p>
          <h2>PRE-BOOKING / PAYMENT</h2>
          <p>
            Our small and remote business has proven to be consistent and successful largely due to
            taking pre-booked guests only. This enables us to be organised and well prepared ahead
            welcoming incoming guests. Should you decide to arrive at Jara spontaneously to enjoy a
            Day Pass experience, a 25% premium to your ticket will apply.
          </p>
          <h2>AMOROUS BEHAVIOUR</h2>
          <p>
            Please kindly be reminded that there are other guests at Jara during your visit,
            including families with children who would like to enjoy the swimming pool and all
            facilities. Jara is a family-run resort is designed to consider all guests. As a result
            we do have firm expectations around our guest’s respectful conduct. We have enjoyed some
            notable popularity and although in a remote location, we do receive visits from State
            agencies and law enforcement - often unannounced. We thank you for your support and
            understanding.
          </p>
          <h2>FACILITY TOUR / INSPECTION</h2>
          <p>
            Should you wish to tour/inspect Jara ahead of your visit (perhaps you're planning a
            retreat or party), you may do so for up to 30 minutes, for N10,000 - covers two people
            and a welcome soft drink. Priced at N5,000 per person thereafter. Must be booked /
            arranged in advance - please email ahead.
          </p>
          <p>
            The N10,000 paid is then removed from the total of any booking secured within one month
            of the inspection.
          </p>
          <h2>DIRECTIONS</h2>
          <p>This link should bring you to our door.</p>
          <p>
            Address: Jara Beach Resort - Museyo Beach, Eleko, Lotu Street Off Lekki Free Trade Zone
            Road, 105101
          </p>
          <p>
            You need to turn right at Museyo Bus Stop - use this link once you've turned left at
            Eleko Beach Junction.
          </p>
          <p>
            Jara’s arrival and departure times are based around the most efficient travel times.
            From VI to Jara, you should allow 75-90 minutes.
          </p>
          <h2>CAR SERVICE</h2>
          <p>
            Jara offers a pick up and drop off car service in partnership with ride On Nigeria - air
            conditioned comfort. The service is subject to availability and requires prior booking
            and payment. Options and rates are available{" "}
            <Link to="/car-services" target="_blank">
              here
            </Link>
            .
          </p>
          <h2>PAYMENT DETAILS</h2>
          <p>
            Should you need to make any payments while staying with us, the following details can be
            used:
          </p>
          <ul>
            <li>LITTLE COMPANY NIGERIA LIMITED</li>
            <li>Access Bank</li>
            <li>0813609546</li>
            <li>LITTLE COMPANY NIGERIA LIMITED</li>
            <li>Guaranty Trust Bank (GTCO)</li>
            <li>0504697451</li>
            <li>LITTLE COMPANY NIGERIA LIMITED</li>
            <li>Zenith Bank</li>
            <li>1226680368</li>
          </ul>
          <p>
            You can also pay with a card <a href="#">here</a>.
          </p>
          <h2>HAVE A COMPLAINT?</h2>
          <p>
            Jara Beach Resort is established only to provide positive beach experiences. If you have
            already visited and wish to anonymously provide feedback, please do so via{" "}
            <a href="#">this form</a>. Should you wish to lodge a complaint, please visit{" "}
            <Link to="/complaints" target="_blank">
              this page
            </Link>
            .
          </p>
          <h3>WHO RUNS JARA BEACH RESORT?</h3>
          <p>
            Jara Beach Resort is co-founded and managed by husband and wife team Mark and Millie
            Slade. With a combined 30+ years in the hospitality industry, you can be sure every
            element has been considered to ensure the very best experience at Jara.
          </p>
          <img src={photo} alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
