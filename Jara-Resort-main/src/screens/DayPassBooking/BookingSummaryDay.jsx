const BookingSummaryDay = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", flex: 1 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginTop: "3rem",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            margin: "2rem",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              margin: "0",
              fontWeight: "bold",
            }}
          >
            Here is your booking summary:{" "}
          </h2>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", width: "40%" }}
        >
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
            <div style={{ width: "100%", margin: "1.5rem" }}>
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
              <span style={{ fontSize: "1.2rem" }}>SubTotal:</span>
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
              <span style={{ fontSize: "1.2rem" }}>
                Consumotion Tax and VAT
              </span>
              <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                N7,000{" "}
              </span>
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
              <span style={{ fontSize: "1.2rem" }}>Total</span>
              <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                N67,000{" "}
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F4F1F1",
            padding: "1rem",
            width: "40%",
            height: "fit-content",
            borderRadius: "10px",
            marginBottom: "1rem",
            fontSize: "1.2rem",
            marginTop: "3.3rem",
          }}
        >
          <div style={{ margin: "1.6rem" 
        }}>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                name="termsAndConditions"
                style={{
                  marginRight: "0.5rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
              <span style={{ marginLeft: "0.5rem" }}>
                Agree with the booking Terms and Conditions and Proceed to payment 
              </span>
            </label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              style={{
                padding: "0.5rem",
                fontSize: "1.2rem",
                width : "60%",
                marginRight: "1rem",
                border: "1px solid #ccc",
                height : "60px",
                borderRadius: "10px",
                background: "transparent",
              }}
            />
            <button
              style={{
                padding: "0.5rem 1rem",
                fontSize: "1.2rem",
                width: "40%",
                height : "60px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Apply
            </button>
          </div>
        </div>

        <div
             style={{
                display: "flex",
                flexDirection: "row",
                padding: "1rem",
                width: "40%",
                alignContent: "center",
                justifyContent: "center",
                height: "fit-content",
                borderRadius: "10px",
                marginBottom: "1rem",
                fontSize: "1.2rem",
                marginTop: "3.3rem",
              }}
            >
              <button
                className="white_button"
                style={{
                  marginRight: "2rem",
                  marginbottom: "1em",
                  border: "none",

                  width: "30%",
                  borderRadius: "5px",
                  background: "#F4F1F1",
                  color: "black",
                }}
              >
                 Back
              </button>

              <button
                className="black_button1"
                style={{
                  marginRight: "2rem",
                  marginbottom: "1em",
                  border: "none",
                  width: "50%",
                  borderRadius: "5px",
                  background: "black",
                  color: "white",
                }}
              >
                Pay with PayStack
              </button>
            </div>


      </div>
    </div>
  );
};

export default BookingSummaryDay;
