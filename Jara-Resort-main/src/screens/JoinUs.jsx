import React from "react";
import joinUsPhoto from "../assets/join-us-photo.png";

const JoinUs = () => {
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
          Jobs at Jara Beach
        </div>
      </div>
      <div className="section_content">
        <div className="join_us">
          <div className="text_content pr">
            <p>
              Jara is committed to building the very best guest experience. To do that, we need the
              very best individuals. We are often looking for energetic professionals to join our
              growing team. Areas of department include; F&B service, kitchen, housekeeping /
              laundry, maintenance and ground staff.
            </p>
            <p>We would like to hear from the following EXPERIENCED applicants:</p>- CHARTERED
            ACCOUNTANT (LCNL) - F&B SERVICE STAFF
            <p>Please note, in order to have the best chance of progressing;</p>​​
            <ol>
              <li>
                Do your homework. Explore this website and look at Jara's online presence to get a
                good understanding for our business.{" "}
              </li>
              <li>
                Understand and be able to explain (in your email to us) WHY you wish to join Jara.
              </li>
              <li>
                Understand and be able to explain the basics of knowledge required for the role
                (i.e. if applying as a concierge, you must be able to explain different drinks -
                types/ brands etc).
              </li>
              <li>
                Understand our location, and the nature of the 'always on' hospitality beach
                experience. We're open seven days a week.
              </li>
            </ol>
            <p>To apply, follow the two steps below:</p>
            <ul>
              <li>
                Please email your application with your CV to{" "}
                <a href="mailto:info@jarabeachresort.com">info@jarabeachresort.com</a> (if a blank
                email is sent with CV only, your application will not be responded to), along with
                YOUR ANSWER to question #2 above.
              </li>
              <li>
                Please send a video via Whatsapp (no more than two minutes) providing your
                introduction and outlining why you should be chosen to join the Jara team.
                Hospitality is about personality - show yours!
              </li>
            </ul>
            <p>The Whatsapp #: +234902 524 3360.</p>
          </div>
          <div className="photo">
            <img src={joinUsPhoto} alt="photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
