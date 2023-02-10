import React from 'react';
import "./skills.css"
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">SKILLS</h2>
      <span className="section__subtitle">My Technical Level</span>


      <div className="skills__container container grid">
        <Frontend />
        <Backend />

      </div>


    </section>
  );
};

export default Skills;