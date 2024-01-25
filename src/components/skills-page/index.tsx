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
              <h4 className="subtitle">
                XENDIT (YC S15)(Philippines, Indonesia, Malaysia)
              </h4>
              <h6 className="desc">
                Xendit is a payment gateway that helps businesses make payments
                simple, secure, and easy for customers. We process millions of
                transactions monthly, helping businesses grow by providing a
                suite of world-class APIs and Dashboard UI.
                <br />
                <br />
                Recruited as a Senior Software engineer to integrate with major
                banks in SEA, and centralized tools to help the engineering,
                define processes, and later extend it to the organization level.
              </h6>
              <ol>
                <li>
                  Integrated major SEA banks, and optimized disbursements via
                  multiple channels, leading to a{' '}
                  <b>70% boost in payment processing speed</b>.
                </li>
                <li>
                  Implementation of circuit breaker, auto enable/disable payment
                  channels,{' '}
                  <b>reduction of the failed transactions by over 250%</b>.
                </li>
                <li>
                  Led Infra cost reduction Initiatives, achieving up to{' '}
                  <b>
                    65% savings in AWS costs and 40% reduction in DB expenses
                  </b>
                  .
                </li>
                <li>
                  Integrated communication channels (WhatsApp, SMS, Email,
                  Viber, etc.) for <b>timely transactional notifications</b>.
                </li>
                <li>
                  Guided a 6-member team to enhance culture and optimize
                  processes, resulting in{' '}
                  <b>
                    heightened team efficiency and consistent ahead-of-schedule
                    deliveries
                  </b>
                  .
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
              <h6 className="desc">
                On Demand Deals specializes in e-commerce and logistics and
                helps cloud convenience stores by transforming any unused space
                into business.
                <br />
                <br />
                Co-founded a pandemic-born company focused on seamless, doorstep
                grocery delivery within minutes, eliminating the need to venture
                outdoors.
              </h6>
              <ol>
                <li>Secured $480,000 in pre-seed funding.</li>
                <li>
                  Set a technical vision, led the development of a SaaS,
                  enabling
                  <b>scaling to 50+ locations in Metro Manila</b>
                </li>
                <li>
                  GMV of USD 1,370,000 in 6 months with over{' '}
                  <b>200% MoM growth</b>.
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
              <h6 className="desc">
                PDAX is the Philippines' leading homegrown cryptocurrency
                exchange, supervised by the Bangko Sentral ng Pilipinas.
                <br />
                <br />
                Hired as a Software Engineer for trade matching engine
                development, creation of trading dashboards and chats, and
                integration with major banks in The Philippines.
              </h6>
              <ol>
                <li>
                  <b>Pivotal role in PDAX 0-1 launch</b>, establishing a strong
                  Philippines market presence
                </li>
                <li>
                  <b>Led PDAX payments integration team</b>, overseeing major
                  bank and e-wallet integration in The Philippines. Automated
                  payments,
                  <b>reducing processing time by 3 days</b>.
                </li>
                <li>
                  Help Launch bonds.ph, allowed users to{' '}
                  <b>buy government-issued bonds in minutes instead of weeks</b>
                  .
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
              <h6 className="desc">
                Primus Software Corporation is a staffing and software
                development company with an unwavering commitment to helping our
                clients stay ahead of the curve.
              </h6>
              <p>
                As a Full Stack Developer, I engaged with clients, translated
                their needs into solutions, and directed the development team.
                Additionally, collaborated with the Business Development Team on
                Proof of Concepts, aiding in securing new projects.
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
