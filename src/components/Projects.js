import React from "react";
import { MdLink } from "react-icons/md";
import { motion } from "framer-motion";
import "../styles/Projects.css";

const Projects = ({ limit }) => {
  const projectList = [
    {
      stack: "ReactJS",
      title: "Google-Gemini Chatbot",
      description: "A chatbot using Google Gemini AI API with real-time chat.(mobile-responsive)",
      image: "assets/gemini-chatbot.png",
      link: "https://google-gemini-chatbot-ashy.vercel.app",
    },
    {
      stack: "HTML CSS JS WEB3 ETHERS",
      title: "Crypto-connect",
      description: "A web3 project that connects to crypto wallets.(mobile-responsive)",
      image: "assets/crypto.png",
      link: "https://crypto-connect-three.vercel.app/",
    },
    {
      stack: "ReactJS",
      title: "SuperQuick Store",
      description: "An online store with React, and PayStack integration.(not mobile-responsive yet)",
      image: "assets/superquick.png",
      link: "https://super-quick-project.vercel.app/",
    },
    {
      stack: "HTML CSS JS",
      title: "Image Slider",
      description: "A responsive image slider gallery.(mobile-responsive)",
      image: "assets/image-slider.png",
      link: "https://renaissance-innovation-labs.github.io/dave-hero-slider/",
    },
    {
      stack: "ReactJS",
      title: "TechNavigator AI",
      description: "A Roadmap generator app using AI.(not mobile-responsive yet)",
      image: "assets/roadmap.png",
      link: "https://gemini-chatbot.example.com",
    },
    {
      stack: "HTML CSS",
      title: "Sneaker-hero-section",
      description: "A sneaker header with a beautiful UI and Animations.(mobile-responsive)",
      image: "assets/sneaker.png",
      link: "https://davidaroh.github.io/sneaker-header/",
    },
    {
      stack: "HTML CSS",
      title: "Scale-hero-section",
      description: "A hero-section with a beautiful UI and a floating animation.(not mobile-responsive yet)",
      image: "assets/scale header.png",
      link: "https://davidaroh.github.io/scale-header/",
    },
    {
      stack: "HTML CSS",
      title: "Nat-Geo website",
      description: "A Nat-Geo wild website with a beautiful UI and layout.(not mobile-responsive yet)",
      image: "assets/nat-geo.png",
      link: "https://nat-geo-kohl.vercel.app/",
    },
    {
      stack: "HTML CSS JS TILTJS",
      title: "3D Hover Effect",
      description: "A 3D design with a beautiful hover effefct layout.(mobile-responsive)",
      image: "assets/hover.png",
      link: "https://3-d-effect-neon.vercel.app/",
    },
    {
      stack: "HTML CSS",
      title: "3D image spinner",
      description: "A 3D image spinner with a stunning UI and layout.(not mobile-responsive yet)",
      image: "assets/spinner.png",
      link: "https://3d-spinner-nine.vercel.app/",
    },
  ];

  const displayedProjects = limit ? projectList.slice(0, limit) : projectList;

  return (
    <section className="projects">
      <div className="project-grid">
        {displayedProjects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
           <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="stack">{project.stack}</div>
            <div className="project-desc">
              <h3 className="project-title">{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <button className="project-btn">
                  Live <MdLink className="project-icon" />
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
