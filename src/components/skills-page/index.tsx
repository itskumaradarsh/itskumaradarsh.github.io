import React from 'react';
import './styles.scss';
import { ParticleWrapper, TagWrapper, TagCloud } from '../common';

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <ParticleWrapper type="line" />
      <TagWrapper>
        <div className="left-pane">
          <div className="code">&lt;h1&gt;</div>
          <div className="brand">
            <span className="spunge">S</span>
            <span className="spunge">k</span>
            <span className="spunge">i</span>
            <span className="spunge">l</span>
            <span className="spunge">l</span>
            <span className="spunge">s</span>&nbsp;
            <span className="spunge">&</span>
            <br />
            <span className="spunge">E</span>
            <span className="spunge">x</span>
            <span className="spunge">p</span>
            <span className="spunge">e</span>
            <span className="spunge">r</span>
            <span className="spunge">i</span>
            <span className="spunge">e</span>
            <span className="spunge">n</span>
            <span className="spunge">c</span>
            <span className="spunge">e</span>
          </div>
          <div className="code">&lt;h1/&gt;</div>
          <p>
            Experienced in Javascript (Full Stack), Databases & Mobile Apps
            Development with a demonstrated history of working in the
            Information Technology and Services Industry.
            <br />
            Worked on Javascript Framework and libraries such as Angular, React,
            Redux, NodeJS, Express, VueJS, Electron, React Native (Beginner).
            <br />
            Additionally have experience working on languages and technologies
            such as Solidity (Ethereum Smart Contracts), Android, Firebase,
            Amazon AWS, Swift (beginner), TypeScript, Kotlin (Beginner), Git,
            Java, SCSS, HTML, SQLITE, XML, JSON, PostgreSQL, TimescaleDB.
          </p>
          <p>
            Strong Engineering Professional with a Bachelor of Technology
            (B.Tech.) focused in Computer Science from G.L.Bajaj Institute of
            Technology and Management.
          </p>
        </div>
        <div className="right-pane">
          <TagCloud />
        </div>
      </TagWrapper>
    </div>
  );
};

export default SkillsPage;
