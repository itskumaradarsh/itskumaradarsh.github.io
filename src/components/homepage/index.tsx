import React from 'react';
import './styles.scss';
import { ParticleWrapper, TagWrapper, Button } from '../common';

const HomePage = () => {
  return (
    <div className="home-page">
      <ParticleWrapper type="bubble" />
      <TagWrapper>
        <div className="code">&lt;h1&gt;</div>
        <div className="tag-cont">
          <div className="intro">
            <span className="spunge">H</span>
            <span className="spunge">i</span>
            <span className="spunge">,</span>
          </div>
          <div className="intro">
            <span className="spunge">I</span>
            <span className="spunge">&apos;</span>
            <span className="spunge">m</span>&nbsp;
            <span className="spunge shadow">A</span>
            <span className="spunge shadow2">d</span>
            <span className="spunge">a</span>
            <span className="spunge">r</span>
            <span className="spunge">s</span>
            <span className="spunge">h</span>
            <span className="spunge">,</span>
          </div>
          <div className="intro">
            <span className="spunge">S</span>
            <span className="spunge">o</span>
            <span className="spunge">f</span>
            <span className="spunge">t</span>
            <span className="spunge">w</span>
            <span className="spunge">a</span>
            <span className="spunge">r</span>
            <span className="spunge">e </span>&nbsp;
            <span className="spunge">E</span>
            <span className="spunge">n</span>
            <span className="spunge">g</span>
            <span className="spunge">i</span>
            <span className="spunge">n</span>
            <span className="spunge">e</span>
            <span className="spunge">e</span>
            <span className="spunge">r</span>
            <span className="spunge">.</span>
            <span className="code">&nbsp;&lt;h1/&gt;</span>
          </div>
          <div className="bio">
            Challenge Programmer / Software Engineer / Blockchain Enthusiast
          </div>
          <Button name="CONTACT ME" />
        </div>
      </TagWrapper>
      <div className="right-pane">
        <object data="adarsh.svg" type="image/svg+xml">
          <img
            alt="github"
            src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          />
        </object>
      </div>
    </div>
  );
};

export default HomePage;
