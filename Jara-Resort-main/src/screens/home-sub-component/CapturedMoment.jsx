import React, { useEffect, useState } from "react";
import logo from "../../assets/captured-moments/logo.png";
import flag from "../../assets/captured-moments/Flag_of_Nigeria.png";
import instagramAPI from "../../config/instagramAPI";

export default function CapturedMoment() {
  const [instaMedia, setInstaMedia] = useState([]);
  const [limitMedia, setLimitMedia] = useState(8);
  const [offsetMedia, setOffsetMedia] = useState(8);

  useEffect(() => {
    getInstaMedia();
  }, []);

  const nextOffset = () => {
    setOffsetMedia((offsetMedia) => offsetMedia + limitMedia);
  };

  const getInstaMedia = () => {
    const mediaUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,timestamp,thumbnail_url,permalink&access_token=`;
    fetch(mediaUrl + instagramAPI.token)
      .then((response) => response.json())
      .then((data) => {
        setInstaMedia(data.data);
      });
  };

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="room_container"
      >
        <div style={{ color: "#7878", letterSpacing: "6px", marginBottom: 8 }} className="para">
          GALLERY
        </div>
        <div style={{ textAlign: "center" }} className="hero_heading">
          Captured Moments <br />
          At Jara
        </div>
        <div className="moments_jara_top">
          <div className="moments_jara_top_left">
            <div className="avatar">
              <img src={logo} alt="logo" />
            </div>
            <span>
              <div style={{ textAlign: "left", color: "#000", fontWeight: "500" }} className="para">
                jarabeachresortng
              </div>
              <div style={{ textAlign: "left", marginBottom: 40 }} className="para">
                58k Followers
              </div>{" "}
              <div
                style={{
                  textAlign: "left",
                  color: "#000",
                  fontWeight: "500",
                  textTransform: "uppercase",
                }}
                className="para"
              >
                jara beach resort
              </div>
              <div style={{ textAlign: "left" }} className="para">
                Nigeria's award-winning, all-inclusive family-run, 12 room oceanfront resort <br />{" "}
                (by road) in Lagos <img src={flag} style={{ width: 20, height: 10 }} /> Pricing,
                availability and bookings
              </div>
              <a style={{ textAlign: "left", color: "#2A66AE", marginTop: 10 }} className="para">
                https://linktr.ee/jarabeachresortng
              </a>
            </span>
          </div>
          <button
            onClick={() => window.open("https://www.instagram.com/jarabeachresortng/")}
            className="black_button follow_inst"
          >
            Follow
          </button>
        </div>
        <div className="moments_insta_container">
          {instaMedia
            ? instaMedia.map((data, index) => {
                if (index >= offsetMedia) {
                  return false;
                }
                if (data.media_type === "VIDEO") {
                  return (
                    <div key={data.id} className="moments_insta_item">
                      <video controls poster={data.thumbnail_url}>
                        <source src={data.media_url} type="video/mp4" />
                      </video>
                    </div>
                  );
                }
                return (
                  <div key={data.id} className="moments_insta_item">
                    <img src={data.media_url} alt={data.caption} />
                  </div>
                );
              })
            : null}
        </div>
        {instaMedia && offsetMedia + limitMedia <= instaMedia.length ? (
          <button onClick={nextOffset} className="black_button">
            Load More
          </button>
        ) : null}
      </div>
    </>
  );
}
