import React from "react";
import UiCursor from "../components/UiCursor";
import Navbar from "../components/Navbar";
import HomeMain from "../components/HomeMain";
import CoreFeatures from "../components/CoreFeatures";
import Tagline from "../components/Tagline";
export default function Home() {
  return (
    <div
      style={{
        overflowX:"hidden",
        background: "black",
        height: "1000vh",
      }}
    >
      <Navbar/>
      <HomeMain/>
      <UiCursor/>
      <Tagline/>
      <CoreFeatures/>
    </div>
  );
}
