import React, { useState } from "react";
import { Link } from "react-router-dom";
import IframeVideo from "./IframeVideo";

const VideosContainer = ({ id, videos, limit = 3, btn = true }) => {
  const [mainVideo, setMainVideo] = useState(videos[0]);
  const [offset, setOffset] = useState(0);

  const getCoverImgFromVideo = (src) => {
    const videoID = src.split("/").pop();
    return `https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`;
  };
  return (
    <div key={id} className="videos_container">
      <div className="video_container main_video">
        <IframeVideo link={mainVideo} />
      </div>
      <div className="small_blocks">
        {videos.map((video, index) => {
          if (index < offset || index >= offset + limit) {
            return false;
          }
          if (video === mainVideo) {
            return (
              <button disabled={true} key={video} className="small_block active">
                <img src={getCoverImgFromVideo(video)} alt="img video" />
              </button>
            );
          }
          return (
            <button onClick={() => setMainVideo(video)} key={video} className="small_block">
              <img src={getCoverImgFromVideo(video)} alt="img video" />
            </button>
          );
        })}
      </div>
      {btn ? (
        <div className="video_footer">
          {offset ? (
            <button onClick={() => setOffset((offset) => offset - limit)} className="black_button">
              Prev
            </button>
          ) : null}
          <button
            disabled={offset + limit >= videos.length}
            onClick={() => setOffset((offset) => offset + limit)}
            className="black_button"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default VideosContainer;
