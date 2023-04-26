import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import rectangle_1 from "../assets/covid19/Rectangle 305.png";
import rectangle_2 from "../assets/covid19/Rectangle 306.png";
import rectangle_3 from "../assets/covid19/Rectangle 307.png";
const Covid19 = () => {
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
          Covid-19 - Rules,Health & Safety
        </div>
      </div>
      <main className="section_content">
        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="covid_text">
          <div className="covid_text_item">
            <p>
              While COVID-19 remains in Nigeria, Jara Beach Resort welcomed the recent ease of
              restrictions by the Federal Government, permitting us to continue to operate safely,
              with more freedom. Jara remains grateful to all guests who have supported us through
              multiple waves and to Lagos State Safety Commission for helping Jara navigate such a
              challenging period.
              <br />
              <br />
              While COVID-19 remains very much in mind - with a general notion of living with covid
              - by virtue of Jara's boutique setup, we are used to serving small, exclusive groups
              and Jara's own operational capacity remains 100 guests (combining day and overnight
              visitors).
              <br />
              <br />
              In response to the recent easing of safety guidelines, while ensuring the health and
              safety of all guests and staff, the following represents an updated approach to
              COVID-19-related protocols:
              <br />
              <br />
              <span className="no_more">No more temperature checks on arrival</span>
              <br />
              <span className="no_more">No more mandatory social distancing</span>
              <br />
              <span className="no_more">No more mandatory covid compliance registration</span>
              <br />
              Mask use is now optional for all guests
              <br />
              <br />
              <span className="recommendations">Hand sanitiser remains mandatory on arrival</span>
              <br />
              <span className="recommendations">
                All staff will wear face masks/ shields / gloves while serving
              </span>
              <br />
              <span className="recommendations">
                Hand sanitiser located in communal areas and personal provisions made in-room
              </span>
              <br />
              <span className="recommendations">
                Bookings continue to be in advance only, no walk-ins
              </span>
              <br />
              <span className="recommendations">We remain a cashless business</span>
              <br />
              <span style={{ fontStyle: "italic" }}>#responsiblehospitality</span>
            </p>
          </div>

          <div>
            <h3>COVID-19 INFORMATION</h3>
            <p>
              COVID-19 affects different people in different ways. Most infected people will develop
              mild to moderate illness and recover without hospitalization.Most common symptoms:
            </p>
            <ul>
              <li>fever</li>
              <li>cough</li>
              <li>tiredness</li>
              <li>loss of taste or smell</li>
            </ul>
            <p>Less common symptoms:</p>
            <ul>
              <li>sore throat</li>
              <li>headache</li>
              <li>aches and pains</li>
              <li>diarrhoea</li>
              <li>a rash on skin, or discolouration of fingers or toes</li>
              <li>red or irritated eyes</li>
            </ul>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="block_img"
        >
          <img src={rectangle_1}></img>
          <img src={rectangle_2}></img>
          <img src={rectangle_3}></img>
        </div>
      </main>
      <GetTouch />
      <MapView />
    </>
  );
};

export default Covid19;
