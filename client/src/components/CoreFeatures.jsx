import React, { useState } from "react";
import "../styles/CoreFeatures.css";
import WavyText from "./WavyText";
import { Link } from "react-router-dom";
import video1 from '../images/video1.mp4';
import video2 from '../images/video2.mp4';
import video3 from '../images/video3.mp4';

const CoreFeatures = () => {
  const [currentVideo, setCurrentVideo] = useState("");

  const handleMouseEnter = (videoSrc) => {
    setCurrentVideo(videoSrc);
  };

  const handleMouseLeave = () => {
    setCurrentVideo("");
  };

  return (
    <div className="coreFeature">
      {currentVideo && (
        <div className="video-background">
          <video autoPlay loop muted>
            <source src={currentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <ul>
        <li onMouseEnter={() => handleMouseEnter(video1)} onMouseLeave={handleMouseLeave}>
          <Link className="link-core" to="/popular-snippets">
            <WavyText text="Popular Snippets" />
          </Link>
        </li>
        <li onMouseEnter={() => handleMouseEnter(video3)} onMouseLeave={handleMouseLeave}>
          <Link className="link-core" to="/learn">
            <WavyText text="Learn" />
          </Link>
        </li>
        <li onMouseEnter={() => handleMouseEnter(video2)} onMouseLeave={handleMouseLeave}>
          <Link className="link-core" to="/create">
            <WavyText text="Create" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CoreFeatures;
