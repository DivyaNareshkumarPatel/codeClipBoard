import React from "react";
import { motion } from "framer-motion";
import profilePic from "../images/profilePic.jpeg"; // Replace with your profile image
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <motion.div
          className="profile-header-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img className="profile-pic" src={profilePic} alt="Profile" />
          <h1>John Doe</h1>
          <p className="profile-title">Web Developer</p>
          <div className="profile-stats">
            <div className="stat">
              <span className="stat-title">Problems Solved</span>
              <span className="stat-value">150</span>
            </div>
            <div className="stat">
              <span className="stat-title">Ranking</span>
              <span className="stat-value">Top 5%</span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="profile-details">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <h2>About Me</h2>
          <p>
            Passionate web developer specializing in creating high-quality websites and applications.
            Always eager to tackle new challenges and improve coding skills.
          </p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        >
          <h2>Recent Activity</h2>
          <ul>
            <li>Completed "Two Sum" - August 1, 2024</li>
            <li>Achieved "Top 5%" rank - July 28, 2024</li>
            <li>Submitted solution for "Merge Intervals" - July 20, 2024</li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
};

export default ProfilePage;
