import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import RoomPic from "../assets/rooms/Villa.png";
import pool_img_1 from "../assets/gallery/pool.png";
import pool_img_2 from "../assets/gallery/pool_2.png";
import sun_lounger_img from "../assets/gallery/sun_Lounger.png";
import eat from "../assets/gallery/eat.png";
import villa from "../assets/gallery/villa.png";
import { Link } from "react-router-dom";
import VideosContainer from "../components/VideosContainer";

export default function Gallery() {
  const [videos, setVideos] = useState([
    "https://www.youtube.com/embed/iGgBsoLe2Wk",
    "https://www.youtube.com/embed/5_vYZhw_2o0",
    "https://www.youtube.com/embed/YPa2CdCh-wo",
    "https://www.youtube.com/embed/CTonyv8BKZo",
    "https://www.youtube.com/embed/jevfn7qgfos",
    "https://www.youtube.com/embed/XLmRX9oLuSQ",
    "https://www.youtube.com/embed/g0zTNSN84uw",
    "https://www.youtube.com/embed/XHbcCkdJA24",
    "https://www.youtube.com/embed/UTeteivGojs",
  ]);
  return (
    <>
      <div className="components_section">
        <div
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="1000"
          style={{ color: "#fff", fontSize: 40 }}
          className="hero_heading"
        >
          Photos & Videos
        </div>
      </div>
      <div className="components_section_content">
        <div
          style={{
            color: "#787878",
            maxWidth: "627px",
            margin: "0px auto",
            padding: "2em 0em",
          }}
          className="para"
        >
          JARA BEACH RESORT is located on the beautiful Museyo coast line, sitting on 5,000 sqm of
          serenity.
        </div>
      </div>
      <div className="gallery_container">
        <div className="gallery_images_videos-header">
          <div className="gallery_images_videos-header_title">Photos</div>
          <div>
            <Link to="/photos">View All</Link>
          </div>
        </div>
        <div className="gallery_row">
          <img src={pool_img_1} alt="galleryPic" className="gallery_row_pic" />
          <img src={sun_lounger_img} alt="galleryPic" className="gallery_row_pic" />
          <img src={pool_img_2} alt="galleryPic" className="gallery_row_pic" />
          <img src={eat} alt="galleryPic" className="gallery_row_pic" />
          <img src={villa} alt="galleryPic" className="gallery_row_pic" />
        </div>
      </div>
      <div className="gallery_container">
        <div className="gallery_images_videos-header">
          <div className="gallery_images_videos-header_title">Videos</div>
          <div>
            <a href="https://www.youtube.com/@jarabeachresort" target="_target">
              View All
            </a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 10px" }}>
        <VideosContainer id="galerVideos" limit={4} videos={videos} />
      </div>

      <GetTouch />
      <MapView />
    </>
  );
}
