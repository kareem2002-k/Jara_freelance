import React, { useEffect, useState } from "react";
import experience from "../../assets/experience.png";
import HomeSwiper from "../../components/HomeSwiper";

export default function GuestSays() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
  const [reviews, setReviews] = useState([]);

  const placeId = "ChIJI22O7oZTORAR6tvF5ulldxQ";
  const apiKey = "AIzaSyCPXEiGkd4zdrp0bGU2LzJVhPoLP731T2A";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.onload = () => {
      const service = new window.google.maps.places.PlacesService(document.createElement("div"));
      service.getDetails(
        {
          placeId: placeId,
          fields: ["reviews"],
          maxRows: 20,
        },
        (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setReviews(place.reviews);
          }
        }
      );
    };
    document.body.appendChild(script);
  }, [placeId, apiKey]);
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="room_container"
      >
        <div style={{ color: "#7878", letterSpacing: "6px", marginBottom: 8 }} className="para">
          GUEST REVIEWS
        </div>
        <div style={{ textAlign: "center" }} className="hero_heading">
          What Our Guests <br />
          Are Saying
        </div>

        <div className="room_container_content">
          <HomeSwiper reviews={reviews} />
        </div>
      </div>
    </>
  );
}
