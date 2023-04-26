import React from "react";

const BookingRequestForm = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="booking_request_block"
    >
      <div className="booking_text block">
        <h2>Send Us Your Booking Request</h2>
        <span>Tell Us YOUR Retreat Booking Requirements and Expect a Prompt Reply via Email</span>
        <h4>
          <span style={{ fontSize: 20, lineHeight: 1 }}>⚠️</span> Please note
          <span style={{ fontSize: 20, lineHeight: 1 }}>⚠️</span>
        </h4>
        <p>
          1 - 42 guests required rooms and beds to be shared- this naturally may not suit all
          organizations.
        </p>
        <p>
          2 - Availability changes by the hour. Even one booked room can hinder a planned retreat
          booking, so we encourage the decision maker to be carried along, and confirmation payments
          to be made swiftly. Only if a c-level staff member emails a request are we able to block
          out rooms pre-payment.
        </p>
      </div>
      <div className="booking_form block">
        <form action="">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Name of Organization" />
          <input type="text" placeholder="Position/Title" />
          <input type="text" placeholder="Day Visit or Overnight?" />
          <input type="text" placeholder="Visiting Date(s)" />
          <input type="text" placeholder="If overnight, how many nights?" />
          <input type="text" placeholder="Number of Guests" />
          <input type="text" placeholder="Alcohol or Non-Alcohol?" />
          <input type="text" placeholder="Team Bonding Support?" />
          <input type="text" placeholder="Breakfast Preferences?" />
          <input
            className="full"
            type="text"
            placeholder="If staying overnight, please confirm rooms/beds can be shared?"
          />
          <input
            className="full"
            type="text"
            placeholder="Please use this box to tell us more about your requirements..."
          />
          <div className="center_btn">
            <button className="black_button">Submit Booking Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingRequestForm;
