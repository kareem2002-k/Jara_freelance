import React from "react";

const IframeVideo = ({ link }) => {
  return (
    <iframe
      src={link}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default IframeVideo;
