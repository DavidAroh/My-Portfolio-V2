// src/components/Skills.js
import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript"],
    },
    {
      category: "Tools",
      items: ["VSCode", "Figma", "Git", "Font Awesome"],
    },
    {
      category: "Other",
      items: ["HTML", "CSS", "JS"],
    },
    {
      category: "Frameworks",
      items: ["React", "Express.js"],
    },
  ];

  return (
    <section className="skills">
      <div className="skill-more-container">
        <div className="view-more-left">
          <div>
            <h3 className="projects-area">
              <span>#</span>skills
            </h3>
          </div>
          <div className="horizontal-line4"></div>
        </div>
      </div>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{skillCategory.category}</h3>
            <div className="horizontal-line3"></div>
            <div className="skill-items">
              {skillCategory.items.map((item, idx) => (
                <span key={idx} className="skill-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
