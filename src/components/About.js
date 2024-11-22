// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about">
      <div className="view-more-container2">
        <div className="view-more-left">
          <div>
            <h3 className="projects-area">
              <span>#</span>about-me
            </h3>
          </div>
          <div className="horizontal-line4"></div>
        </div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Hello, i’m David
            <br />
            <br />
            I’m a front-end developer based in Port Harcourt, Nigeria. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
            <br />
            <br />
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </motion.p>
        </div>

        <div className="about-pic">
          <motion.img
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="main-img"
            src="assets/about-pic.png"
            alt="my-pic"
          />
        </div>
      </div>

      <Skills />
    </section>
  );
};

export default About;
