// src/components/Home.js
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Home.css";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import { BiLogoGmail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // References to elements for the parallax effect
  const heroImageRef = useRef(null);
  const aboutPicRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    // Parallax effect for the hero image
    gsap.to(heroImageRef.current, {
      y: -100, // Adjust this value for parallax intensity
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "t top",
        scrub: 1, // Smooth animation during scroll
      },
    });

    // Parallax effect for the about picture
    gsap.to(aboutPicRef.current, {
      y: -50, // Adjust this value for parallax intensity
      ease: "none",
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        scrub: 1,
      },
    });

    // Parallax effect for the projects section
    gsap.to(projectsSectionRef.current, {
      y: 50, // Adjust this value for parallax intensity
      ease: "none",
      scrollTrigger: {
        trigger: ".projects",
        start: "top bottom",
        scrub: 1,
      },
    });

    // Parallax effect for the skills section
    gsap.to(skillsSectionRef.current, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".skills",
        start: "top center",
        scrub: 1,
      },
    });

    // Parallax effect for the contact form
    gsap.to(contactFormRef.current, {
      y: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".contact",
        start: "top bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="home-content">
          <div className="main-text">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              David is a <span>front-end developer</span>
            </motion.h1>
            <motion.p
              className="hero-text"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              He crafts responsive websites where technologies meet <br />
              creativity
            </motion.p>
            <Link to="/contact">
              <motion.button
                className="hero-contact"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Contact me
              </motion.button>
            </Link>
          </div>
          <div className="hero-image" ref={heroImageRef}>
            <motion.img
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="main-img"
              src="assets/pic2.png"
              alt="my-pic"
            />
            <div className="text-under">
              <div className="small-box"></div>
              Currently working on{" "}
              <span className="under-pic">
                <b>Portfolio</b>
              </span>
            </div>
            <motion.img
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src="assets/Logo-pic.svg"
              alt=""
              className="pic-logo"
            />
          </div>
        </div>
      </motion.section>
      {/* Projects Section */}
      <motion.section
        className="projects"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        ref={projectsSectionRef}
      >
        <div className="view-more-container">
          <div className="view-more-left">
            <div>
              <h3 className="projects-area">
                <span>#</span>projects
              </h3>
            </div>
            <div className="horizontal-line"></div>
          </div>
          <div className="view-more">
            <Link to="/projects" className="view-more-link">
              view-more
            </Link>
          </div>
        </div>
        <Projects limit={3} />
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="skills"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        ref={skillsSectionRef}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="skill-container"
        >
          <div className="skill-more-container">
            <div className="view-more-left">
              <div>
                <h3 className="projects-area">
                  <span>#</span>skills
                </h3>
              </div>
              <div className="horizontal-line"></div>
            </div>
            <div className="view-more">
              <Link to="/about" className="view-more-link">
                view-more
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="skills-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Skill Category: Languages */}
          <div className="skill-category1">
            <h3>Languages</h3>
            <div className="horizontal-line2"></div>
            <ul>
              <li>TypeScript</li>
              <li>JavaScript</li>
            </ul>
          </div>

          {/* Skill Category: Tools */}
          <div className="skill-category1">
            <h3>Tools</h3>
            <div className="horizontal-line2"></div>
            <ul>
              <li>VSCode</li>
              <li>Figma</li>
              <li>Git</li>
              <li>Font Awesome</li>
            </ul>
          </div>

          {/* Skill Category: Other */}
          <div className="skill-category1">
            <h3>Other</h3>
            <div className="horizontal-line2"></div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
          </div>

          {/* Skill Category: Frameworks */}
          <div className="skill-category1">
            <h3>Frameworks</h3>
            <div className="horizontal-line2"></div>
            <ul>
              <li>React</li>
              <li>Express.js</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        className="about"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="about-more-container">
            <div className="view-more-left">
              <div>
                <h3 className="about-area">
                  <span>#</span>about-me
                </h3>
              </div>
              <div className="horizontal-line5"></div>
            </div>
          </div>
        </motion.div>
        <div className="about-content">
          <div className="about-text">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Hello, I’m David
              <br />
              <br />
              I’m a front-end developer based in Port Harcourt, Nigeria. I can
              develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into websites has been my
              passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </motion.p>
          </div>

          <div className="about-pic" ref={aboutPicRef}>
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
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="contact-head"
        >
          <span>#</span>Contact Me
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          ref={contactFormRef}
        >
          <div className="contact-section">
            <div className="contact-p">
              <p>
                I’m interested in freelance opportunities. However, <br />
                if you have other request or question, don’t <br />
                hesitate to contact me
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-card-link">
                <IoCall className="contact-icons" />
                <p>Call me: +2348062081108</p>
              </div>
              <div className="contact-card-link">
                <FaSquareXTwitter className="contact-icons" />
                <p>Follow me on X: @DavidAroh</p>
              </div>
              <div className="contact-card-link">
                <BiLogoGmail className="contact-icons" />
                <p>Email me: davidarohtari@gmail.com</p>
              </div>
              <div className="contact-card-link">
                <BsWhatsapp className="contact-icons" />
                <p>Chat with me on WhatsApp: +2348062081108</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
