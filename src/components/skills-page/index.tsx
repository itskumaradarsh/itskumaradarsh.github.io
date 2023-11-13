import React from 'react';
import './styles.scss';
import { ParticleWrapper, TagCloud, TagWrapper } from '../common';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork } from 'react-icons/md';
import { IoSchoolSharp } from 'react-icons/io5';

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
          <TagCloud />
        </div>
        <div className="right-pane">
          <VerticalTimeline layout="1-column-left" animate>
            <VerticalTimelineElement
              className="active"
              date="February 2021 – Present"
              icon={<MdOutlineWork />}
            >
              <div className="company">
                <div className="fade" />
                <img src="xendit.png" alt="" />
              </div>
              <h3 className="title">
                Tech Lead (Sep 2022 – Present)
                <br />
                Senior Software Engineer (Feb 2021 – Aug 2021)
              </h3>
              <h4 className="subtitle">Xendit, Indonesia | Malaysia</h4>
              <ol>
                <li>
                  Integrated with all major banks in Indonesia, Singapore, and
                  The Philippines to create a payment gateway platform.
                </li>
                <li>
                  Integrated with communication channels such as WhatsApp,
                  Viber, Twilio, and SendGrid, to ensure timely delivery of all
                  notifications to customers via their preferred channel.
                </li>
                <li>
                  Integrated with remittance providers such as transfer-wise to
                  facilitate cross-border remittances.
                </li>
              </ol>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="May 2021 – September 2022"
              icon={<MdOutlineWork />}
            >
              <div className="company">
                <div className="fade" />
                <img src="odd.png" alt="" />
              </div>
              <h3 className="title">Co-Founder & Chief Technology Officer</h3>
              <h4 className="subtitle">On Demand Deals, Philippines</h4>
              <ol>
                <li>
                  Co-Founded the company during the pandemic to ensure
                  hassle-free delivery of groceries to your doorsteps in minutes
                  without the need to go out.
                </li>
                <li>
                  Established a technical vision with the development team.
                  Developed all SaaS in-house which includes a management
                  system, a mobile app, an admin panel, and support CRM.
                </li>
                <li>
                  Grow the company from 0-1 with USD 897k TPV in just 6 months.
                  Build a team of 52 people and 70+ locations across Metro
                  Manila with total seed funding of USD 480k.
                </li>
              </ol>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="February 2022 – April 2022"
              icon={<MdOutlineWork />}
            >
              <div className="company">
                <div className="fade" />
                <img src="iterative.jpeg" alt="" />
              </div>
              <h3 className="title">Batch of W22</h3>
              <h4 className="subtitle">
                Iterative (Startup Accelerator), Singapore
              </h4>
              <ol>
                <li>
                  My Startup ODD got selected for Iterative, which is
                  Y-Combinator for SEA companies. Got a chance to work and grow
                  with co-founders of all different nationalities.
                </li>
                <li>
                  After graduation, we were able to meet with 200+ VCs from all
                  over the world and were able to raise USD 480k in pre-seed
                  funding.
                </li>
              </ol>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="March 2018 – February 2021"
              icon={<MdOutlineWork />}
            >
              <div className="company">
                <div className="fade" />
                <img src="pdax.png" alt="" />
              </div>
              <h3 className="title">
                Senior Software Engineer (Nov 2019 – Feb 2021)
                <br />
                Software Engineer (Apr 2019 – Nov 2019)
                <br />
                Full Stack Developer (Oct 2018 – Apr 2019)
                <br />
                Frontend Developer (Mar 2018 – Oct 2018)
              </h3>
              <h4 className="subtitle">
                Philippines Digital Assets Exchange, Philippines
              </h4>
              <ol>
                <li>
                  Integrated with all major banks in Indonesia, Singapore, and
                  The Philippines to create a payment gateway platform.
                </li>
                <li>
                  Integrated with communication channels such as WhatsApp,
                  Viber, Twilio, and SendGrid, to ensure timely delivery of all
                  notifications to customers via their preferred channel.
                </li>
                <li>
                  Integrated with remittance providers such as transfer-wise to
                  facilitate cross-border remittances.
                </li>
              </ol>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="September 2017 – July 2018"
              icon={<MdOutlineWork />}
            >
              <div className="company">
                <div className="fade" />
                <img src="primus.png" alt="" />
              </div>
              <h3 className="title">
                Full Stack Developer (Mar 2018 – Jul 2018)
                <br />
                Frontend Developer (Sep 2017 – Mar 2018)
              </h3>
              <h4 className="subtitle">Primus Software Corporation, India</h4>
              <p>
                Involved in multiple projects simultaneously as a Full Stack
                Developer. My primary role was interacting with clients,
                understanding their requirements and challenges, proposing a
                solution, and getting the team's development done. I also worked
                closely with the Business Development Team to make Proof of
                Concepts for enterprise challenges, helping the Business
                Development Team grab new Projects.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="April 2015 – February 2017"
              icon={<MdOutlineWork />}
            >
              <div className="company">
                <div className="fade" />
                <img src="osgrip.jpeg" alt="" />
              </div>
              <h3 className="title">Co-Founder</h3>
              <h4 className="subtitle">OSGRIP Technologies LLP, India</h4>
              <p>
                Involved in multiple projects simultaneously as a Full Stack
                Developer. My primary role was interacting with clients,
                understanding their requirements and challenges, proposing a
                solution, and getting the team's development done. I also worked
                closely with the Business Development Team to make Proof of
                Concepts for enterprise challenges, helping the Business
                Development Team grab new Projects.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement date="July 2018" icon={<IoSchoolSharp />}>
              <div className="company">
                <div className="fade" />
                <img src="glbitm.jpeg" alt="" />
              </div>
              <h3 className="title">Bachelor of Technology</h3>
              <h4 className="subtitle">Certification</h4>
              <p>
                G.L. Bajaj Institute of Technology & Management affiliated with
                AKTU (Dr. APJ Abdul Kalam Technical University)
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </TagWrapper>
    </div>
  );
};

export default SkillsPage;
