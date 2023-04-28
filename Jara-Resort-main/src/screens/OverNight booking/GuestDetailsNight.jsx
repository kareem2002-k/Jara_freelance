import React from "react";
import { Link } from "react-router-dom";

const GuestCountNight = () => {
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
          <div style={{ display: "flex" }}>
            <div style={{ flex: 2 }}>
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
                    type="number"
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
                    type="number"
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
                    type="number"
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
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
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

              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                    marginBottom: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  <textarea
                    placeholder=" State any dietary or setup requirements (ie baby bathtub or childeren's cot)"
                    style={{
                      boxSizing: "border-box",
                      height: "80px",
                      padding: "10px",
                      width: "80%",
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

              <h3>
                {" "}
                Upload Image [face] identification (i.e. passport, national ID,
                driver's license)
                <br />- Max: 1 MB
              </h3>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                    marginBottom: "1rem",
                    marginRight: "1rem",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row",
                      marginBottom: "1rem",
                      marginRight: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        padding: "10px",
                        width: "40%",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "60px",
                      }}
                    >
                      <label
                        htmlFor="myFileInput"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <span style={{ marginRight: "10px" }}>Upload File</span>
                      </label>
                      <input
                        type="file"
                        id="myFileInput"
                        name="myFileInput"
                        accept=".pdf,.doc,.docx,.txt"
                        style={{
                          display: "none",
                        }}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        style={{
                          direction: "rtl",
                          marginLeft: "10px",
                        }}
                      >
                        <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm0 15a7 7 0 1 1 7-7 7 7 0 0 1-7 7zm1-8V3a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0z" />
                      </svg>
                    </div>
                  </div>
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
                    <option value="">How did you hear about us ? </option>
                    <option value="x">lo</option>
                    <option value="xx">l</option>
                  </select>
                </div>
              </div>

              <br />
              <br />

              <hr></hr>

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
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="radio"
                      id="emailYes"
                      name="email"
                      value="yes"
                      style={{
                        appearance: "none",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    <label htmlFor="emailYes">
                      Sign up for our mailing list
                    </label>

                    <br />
                    <br />
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="radio"
                      id="emailYes"
                      name="email"
                      value="yes"
                      style={{
                        appearance: "none",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    <label htmlFor="emailYes">
                      Keep information for next visit
                    </label>
                  </div>
                </div>
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
                <Link to="/day-pass-booking">
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

                <Link to='/overnight-pass-booking/calender'>

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

            <div style={{ display: "flex", justifyContent: "center", flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#F4F1F1",
                  width: "100%",
                  marginTop: "10px",
                  padding: "1rem",
                  height: "80vh",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    borderBottom: "1px solid #ccc",
                    width: "100%",
                    marginBottom: "1.5rem",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <h2
                    style={{
                      textAlign: "center",
                      fontSize: "1.5rem",
                      margin: "1.6rem",
                      fontWeight: "bold",
                    }}
                  >
                    Your Reservation
                  </h2>
                </div>
                <div style={{ width: "100%"
                , margin: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: "0.8rem ",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>Guests</span>
                    <span style={{ fontSize: "1.2rem" }}>1 Adult</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: "0.8rem ",
                      paddingTop: "0.5rem",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>Duration</span>
                    <span style={{ fontSize: "1.2rem" }}>1 Night</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: "0.8rem ",
                      paddingTop: "0.5rem",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>Room</span>
                    <span style={{ fontSize: "1.2rem" }}>Sunset 11</span>
                  </div>
                </div>
                <hr style={{ width: "100%", margin: "1.5rem 0" }} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    margin: "0.8rem",
                   
                  }}
                >
                  <span style={{  fontSize: "1.2rem" }}>
                    SubTotal:
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    N60,000
                  </span>
                </div>
                <hr style={{ width: "100%", margin: "1.5rem 0" }} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "0.8rem",
                  }}
                >
                  <span style={{  fontSize: "1.2rem" }}>
                    Consumotion Tax and VAT
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    N7,000                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "0.8rem",
                  }}
                >
                  <span style={{  fontSize: "1.2rem" }}>
                    Total
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    N67,000                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default GuestCountNight;
