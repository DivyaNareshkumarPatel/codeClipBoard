import React from "react";
import image from "../images/homeRobo.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "../styles/Tagline.css";

export default function Tagline() {
  const { scrollY } = useViewportScroll();

  const opacity = useTransform(scrollY, [0, 150], [0, 1]);
  const translateY = useTransform(scrollY, [0, 150], [50, 0]);
  const translateY2 = useTransform(scrollY, [0, 150], [50, 0]);
  const translateY3 = useTransform(scrollY, [0, 150], [50, 0]);
  const translateY4 = useTransform(scrollY, [0, 150], [50, 0]);
  const translateY5 = useTransform(scrollY, [0, 150], [50, 0]);
  const scale = useTransform(scrollY, [0, 150], [1, 1.1]);
  const rotate = useTransform(scrollY, [0, 150], [0, 10]);
  const circleScale = useTransform(scrollY, [0, 150], [0.5, 1]);
  const circleOpacity = useTransform(scrollY, [0, 150], [0.1, 0.5]);

  return (
    <div className="Tagline">
      <div className="TaglineImg">
        <motion.img
          src={image}
          alt="Decorative Robot"
          style={{ translateY, scale, rotate, opacity }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <motion.div
          className="decorative-circle circle1"
          style={{ scale: circleScale, opacity: circleOpacity }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="decorative-circle circle2"
          style={{ scale: circleScale, opacity: circleOpacity }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="decorative-circle circle3"
          style={{ scale: circleScale, opacity: circleOpacity }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        ></motion.div>
      </div>
      <motion.div style={{ opacity, translateY }} className="text">
        <motion.div>Unlock your creativity with our platform:</motion.div>{" "}
        <motion.div>effortlessly write, edit, and preview HTML,</motion.div>{" "}
        <motion.div>CSS, and JavaScript code. Transform your</motion.div>{" "}
        <motion.div>ideas into interactive web experiences and a</motion.div>
        <motion.div>user-friendly interface.</motion.div>
      </motion.div>
    </div>
  );
}
