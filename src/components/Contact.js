// src/components/Contact.js
import React from 'react';
import { BiLogoGmail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { motion } from "framer-motion";
import '../styles/Contact.css';

const Contact = () => {
  return (
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
  );
};

export default Contact;
