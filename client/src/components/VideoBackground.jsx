import React from "react";
import "../styles/VideoBackground.css";

const VideoBackground = ({ videoSrc }) => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
