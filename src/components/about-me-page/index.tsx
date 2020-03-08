import React from 'react';
import './styles.scss';
import { ParticleWrapper, TagWrapper, TechPyramid } from '../common';

const AboutMePage = () => {
  return (
    <div className="about-me-page">
      <ParticleWrapper type="line" />
      <TagWrapper>
        <div className="left-pane">
          <div className="code">&lt;h1&gt;</div>
          <div className="brand">
            <span className="spunge">A</span>
            <span className="spunge">b</span>
            <span className="spunge">o</span>
            <span className="spunge">u</span>
            <span className="spunge">t</span>&nbsp;
            <span className="spunge">m</span>
            <span className="spunge">e</span>
          </div>
          <div className="code">&lt;h1/&gt;</div>
          <p>
            I’m a software enthusiast with an interest in solving complex
            problems with logic and coding skills. For over 8 years, I have been
            coding in different languages, solving problems, developing programs
            and applications.
          </p>
          <p>
            Well-organised person, problem solver, fast Learner and always eager
            to learn more. In my free time, I like to tour around, or play
            outdoor/indoor games.
          </p>
          <p>
            Born in India, currently working in Bonifacio Global City (BGC),
            Philippines as Senior Full Stack Software Engineer.
          </p>
        </div>
        <div className="right-pane">
          <TechPyramid />
        </div>
      </TagWrapper>
    </div>
  );
};

export default AboutMePage;
