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
              date="April 2024 – Present"
              icon={<MdOutlineWork />}
            >
              <div className="company">
                <div className="fade" />
                <img src="stashaway.jpg" alt="" />
              </div>
              <h3 className="title">
                Senior Staff Engineer (April 2024 – Present)
              </h3>
              <h4 className="subtitle">StashAway (Malaysia)</h4>
              <ol>
                <li>
                  <b>Onboarding:</b> Redesigned onboarding flow (KYC, auth,
                  account creation), cutting signup time by <b>35%</b> and
                  boosting conversions.
                </li>
                <li>
                  <b>System Modernization:</b> Migrated legacy services into{' '}
                  <b>microservices architecture</b>, improving scalability and
                  ensuring zero downtime.
                </li>
                <li>
                  <b>Infrastructure & Stability:</b> Optimized infra, achieving{' '}
                  <b>30% lower AWS staging costs</b>, improved CI/CD pipelines,
                  and reduced release cycles by <b>40%</b>.
                </li>
                <li>
                  <b>Security & Auth:</b> Strengthened authentication with
                  OAuth2 + MFA, improving login reliability and resilience.
                </li>
                <li>
                  <b>AI & Automation:</b> Applied AI across multiple projects
                  using <b>MCP (Model Context Protocol)</b> for AI-assisted
                  development; introduced AI-driven code reviews, reducing
                  review cycles and accelerating delivery.
                </li>
                <li>
                  <b>Mentorship:</b> Guided junior and mid-level engineers,
                  raising team productivity and code quality.
                </li>
              </ol>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="February 2021 – February 2024"
              icon={<MdOutlineWork />}
            >
              <div className="company">
                <div className="fade" />
                <img src="xendit.png" alt="" />
              </div>
              <h3 className="title">
                Tech Lead (Sep 2022 – Feb 2024)
                <br />
                Senior Software Engineer (Feb 2021 – Aug 2021)
              </h3>
              <h4 className="subtitle">
                XENDIT (YC S15)(Philippines, Indonesia, Malaysia)
              </h4>
              <ol>
                <li>
                  <b>Payments Platform:</b> Integrated with{' '}
                  <b>major banks and e-wallets</b> across SEA, cutting payment
                  processing times by <b>70%</b>.
                </li>
                <li>
                  <b>Resilience & Stability:</b> Built a{' '}
                  <b>routing & circuit breaker service</b> that auto-detects
                  failing channels, reducing failed transactions by <b>250%</b>.
                </li>
                <li>
                  <b>Infra Optimization:</b> Reduced infra costs by{' '}
                  <b>65% (AWS S3)</b> and <b>40% (DB)</b> through storage class
                  optimization and index tuning.
                </li>
                <li>
                  <b>Messaging Systems:</b> Integrated multi-channel comms
                  (WhatsApp, SMS, Viber, Email) to improve reliability of
                  transactional notifications.
                </li>
                <li>
                  <b>Team Leadership:</b> Led and mentored a 6-person
                  engineering team, improving delivery velocity and code
                  quality.
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
                  <b>Raised $480K pre-seed funding</b> from Iterative Singapore
                  and Accelerating Asia
                </li>
                <li>
                  Oversaw <b>200% MoM growth</b> by leading product and
                  engineering end-to-end
                </li>
                <li>
                  Built a SaaS platform scaling to 50+ locations in Manila,{' '}
                  <b>reaching $1.37M GMV in 6 months</b>
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
                Software Engineer (Mar 2018 – Nov 2019)
              </h3>
              <h4 className="subtitle">
                Philippines Digital Assets Exchange, Philippines
              </h4>
              <ol>
                <li>
                  Founding engineer who <b>helped launch PDAX</b> into one of
                  the top crypto exchanges in the Philippines
                </li>
                <li>
                  Led payments integration with banks and e-wallets,{' '}
                  <b>cutting settlement time from 3 days to real-time</b>
                </li>
                <li>
                  Built the trade engine and dashboards, improving reliability
                  and user experience
                </li>
                <li>
                  Developed and helped launch LOCQ, a product that enables{' '}
                  <b>
                    customers to purchase gas for the future at today’s prices
                  </b>
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
                As a Full Stack Developer, translated client needs into
                solutions, directed development teams, and collaborated with
                Business Development on Proof of Concepts to secure new
                projects.
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
              <h3 className="title">Project Lead</h3>
              <h4 className="subtitle">OSGRIP Technologies LLP, India</h4>
              <p>
                Founded the college startup. Established a technical vision with
                the development team. Developed various software products and
                completed various projects in the domain of Android App, Web
                App, and website development. Hired over 15 people, and worked
                on various projects with various teams simultaneously.
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
