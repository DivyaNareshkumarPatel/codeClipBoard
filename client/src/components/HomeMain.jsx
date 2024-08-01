import React from "react";
import { motion } from "framer-motion";
import image from "../images/codinggirl.png";
import "../styles/HomeMain.css";

export default function HomeMain() {
  return (
    <div className="homeMain">
      <motion.div 
        className="homeMainLeft"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="child left"
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1}}
        >
          CODING
        </motion.div>
        <motion.div
          className="child right"
          initial={{ opacity: 0,x:1000}}
          animate={{ opacity: 1,x:0, y: 0 }}
          transition={{ duration: 1}}
        >
          IS FUN
        </motion.div>
        <motion.div
          className="share"
          initial={{ opacity: 0 , y:25}}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Share and discover
        </motion.div>
        <motion.div
          className="home-btn"
          initial={{ opacity: 0, y:25 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button>GET STARTED</button>
        </motion.div>
      </motion.div>
      <motion.div
        className="homeMainRight"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay:0.5 }}
      >
        <img src={image} alt="coding girl" className="codingImage" />
      </motion.div>
    </div>
  );
}
