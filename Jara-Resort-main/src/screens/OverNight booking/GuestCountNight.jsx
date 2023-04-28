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
          <div
            style={{
              marginBottom: "3rem",
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

            <h2> How many adults or children (0-17) </h2>

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
                  placeholder="Adults"
                  style={{
                    boxSizing: "border-box",
                    height: "60px",
                    padding: "10px",
                    width: "350px",
                    border: "1px solid #ccc",
                    borderRadius: "7px",
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
                  max="100"
                  step="1"
                  placeholder="Children"
                  style={{
                    boxSizing: "border-box",
                    height: "60px",
                    width: "350px",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "7px",
                    outline: "none",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                  }}
                />
              </div>
            </div>

            {/* this is the part to determine the age of  children */}

            <h2> Children's Age </h2>

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
                  placeholder="Age"
                  style={{
                    boxSizing: "border-box",
                    height: "60px",
                    padding: "10px",
                    width: "350px",
                    border: "1px solid #ccc",
                    borderRadius: "7px",
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
                  placeholder="Age"
                  style={{
                    boxSizing: "border-box",
                    height: "60px",
                    width: "350px",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "7px",
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
                  marginTop: "2rem",
                }}
              />
            </div>

            <br />
            <br />

            <div style={{ display: "flex", flexDirection: "row" , marginTop:'2rem'}}>

            <Link to="/">

            <button className="white_button" style={{marginRight: "2rem",                      
           marginbottom: '1em' ,
            border:'1',
      
           width:'300px',
           borderRadius:'5px'
            , background : 'white'
            , color:'black'
           
           }} >Restart Booking</button>
           </Link>

           <Link to="guest-details">
         
          
              <button className="black_button1" style={{marginRight: "2rem",                      
           marginbottom: '1em' ,
           border:'none',
           width:'300px',
           borderRadius:'5px'
           , background : 'black'
           , color:'white'}} >Continue</button>
             </Link>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default GuestCountNight;
