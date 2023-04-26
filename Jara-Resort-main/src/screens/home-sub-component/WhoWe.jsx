import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideosContainer from "../../components/VideosContainer";

const HotelIframe = () => {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/PIEtOBJd5R8"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default function WhoWe() {
  const videos = [
    "https://www.youtube.com/embed/iGgBsoLe2Wk",
    "https://www.youtube.com/embed/5_vYZhw_2o0",
    "https://www.youtube.com/embed/KIBD1Ir3DOo",
    "https://www.youtube.com/embed/jevfn7qgfos",
  ];
  return (
    <>
      <div className="who_we_container">
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="who_we_container_content"
        >
          <div className="who_we_container_left">
            <div
              style={{ color: "#7878", letterSpacing: "6px", marginBottom: 8 }}
              className="para about-us-heading"
            >
              ABOUT US
            </div>
            <div style={{ color: "#fff" }} className="hero_heading">
              Who We Are
            </div>
            <div style={{ textAlign: "start" }} className="para hero_details">
              Nestled in Museyo next to Eleko, just one hour by road from Lekki Phase One, Jara
              Beach Resort is the first of its kind, award-winning, all-inclusive, family-run,
              oceanfront getaway in Lagos.
            </div>
            <Link to="/about">
              <button style={{ marginTop: 20 }} className="white_button">
                Learn More
              </button>
            </Link>
          </div>
          <div className="who_we_container_right">
            <VideosContainer id="who_we" videos={videos} limit={4} btn={false} />
            {/*  <div className="who_we_container_right_entry">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iGgBsoLe2Wk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="who_we_container_right_entry">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/5_vYZhw_2o0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="who_we_container_right_entry">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/KIBD1Ir3DOo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="who_we_container_right_entry">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jevfn7qgfos"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
