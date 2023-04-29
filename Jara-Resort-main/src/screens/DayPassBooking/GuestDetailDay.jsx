import React from "react";
import { Link } from "react-router-dom";

const GuestDetailsDay = () => {
  return (
    <>
      <main
        style={{
          display: "flex",
          marginLeft: "10%",
          width: "80%",
          marginBottom: "5rem",
          marginTop: "5rem",
        }}
      >
        <form style={{ width: "100%" }}>
          <div
            style={{
              marginBottom: "1rem",
              display: "flex",
              flexDirection: "column",
              marginTop: "3rem",
            }}
          >
            <h1 style={{ fontSize: "3rem", fontWeight: 600 }}>
              Guest(s) Details
            </h1>
            <p style={{ fontSize: "1rem", fontWeight: 100 }}>
              Please select the number of guests you want to book for (infants
              and toddlers included).
              <br />
              By proceeding you understand your payment is transferable but
              non-refundable in line
              <br />
              with www.jarabeachresort.com/terms
            </p>

            {/* this is the part to determine the number of adults and children */}

            <br />
            <br />

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                  marginRight: "1rem",
                }}
              >
                <input
                  type="number"
                  id="distance"
                  min="0"
                  max="100"
                  step="1"
                  placeholder="No of Guests"
                  style={{
                    boxSizing: "border-box",
                    height: "60px",
                    padding: "10px",
                    width: "400px",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    outline: "none",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                  }}
                />
              </div>
            </div>

            {/* this is the part to determine the age of  children */}

            <h2> Who is booking ? </h2>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                  marginRight: "1rem",
                }}
              >
                <input
                  type="text"
                  id="distance"
                  min="0"
                  max="17"
                  step="1"
                  placeholder="First Name"
                  style={{
                    boxSizing: "border-box",
                    height: "60px",
                    padding: "10px",
                    width: "350px",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    outline: "none",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                }}
              >
                <input
                  type="text"
                  id="distanceMax"
                  min="0"
                  max="17"
                  step="1"
                  placeholder="Last Name"
                  style={{
                    boxSizing: "border-box",
                    height: "60px",
                    width: "350px",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    outline: "none",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                  }}
                />
              </div>
            </div>

            <br />
            <br />

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                  marginRight: "1rem",
                }}
              >
                <input
                  type="email"
                  id="distance"
                  min="0"
                  max="17"
                  step="1"
                  placeholder="Email Address"
                  style={{
                    boxSizing: "border-box",
                    height: "60px",
                    padding: "10px",
                    width: "350px",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    outline: "none",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                }}
              >
                <input
                  type="text"
                  id="distanceMax"
                  min="0"
                  max="17"
                  step="1"
                  placeholder="Phone Number"
                  style={{
                    boxSizing: "border-box",
                    height: "60px",
                    width: "350px",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    outline: "none",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                  }}
                />
              </div>
            </div>

            <br />
            <br />

            <div>
              <hr
                style={{
                  float: "left",
                  clear: "both",
                  width: "50%",
                  marginTop: "1rem",
                }}
              />
            </div>

            <br />
            <br />
          </div>

          <div
            style={{
              marginBottom: "3rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1 style={{ fontSize: "3rem", fontWeight: 600 }}>Avilability</h1>
            <p style={{ fontSize: "1rem", fontWeight: 100 }}>
              Are you booking on a weekday (Monday - Thursday) , weekend (Friday
              - Sunday) or a Seasonal?
            </p>

            {/* this is the part to determine date and the seasn of the holiday */}

            <br />
            <br />

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                  marginRight: "1rem",
                }}
              >
                 <select
                  style={{
                    boxSizing: "border-box",
                    height: "60px",
                    padding: "10px",
                    width: "350px",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    outline: "none",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  <option value="">Select</option>
                  <option value="12 Apr 2023 - 16 Apr 2023">
                    Weekday
                  </option>
                  <option value="19 Apr 2023 - 23 Apr 2023">
                    Weekend
                  </option>
                  <option value="26 Apr 2023 - 30 Apr 2023">
                    Seasonal
                  </option>
                </select>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                }}
              >
                <input
                  type="date"
                  placeholder="Phone Number"

                  style={{
                    boxSizing: "border-box",
                    height: "60px",
                    padding: "10px",
                    width: "350px",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    outline: "none",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                  }}
                />
              </div>
            </div>

            <br />
            <br />

            <div>
              <hr
                style={{
                  float: "left",
                  clear: "both",
                  width: "50%",
                  marginTop: "1rem",
                }}
              />
            </div>

            <br />
            <br />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "2rem",
              }}
            >
              <Link to='/'>
              <button
                className="white_button"
                style={{
                  marginRight: "2rem",
                  marginbottom: "1em",
                  border: "1",

                  width: "300px",
                  borderRadius: "5px",
                  background: "white",
                  color: "black",
                }}
              >
                Restart Booking
              </button>
              </Link>

              <Link to='booking-options'>


              <button
                className="black_button1"
                style={{
                  marginRight: "2rem",
                  marginbottom: "1em",
                  border: "none",
                  width: "300px",
                  borderRadius: "5px",
                  background: "black",
                  color: "white",
                }}
              >
                Continue
              </button>
              </Link>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default GuestDetailsDay;
