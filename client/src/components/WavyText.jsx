import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/WavyText.css"; // Ensure this path is correct

const WavyText = ({ text, duration = 0.15, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const letters = Array.from(text);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ display: "flex", overflow: "hidden", perspective: "1500px" }} // Increased perspective for a stronger 3D effect
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={`wavy-letter ${isHovered ? "wave" : ""}`}
          style={{ animationDelay: `${index * duration}s` }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WavyText;
