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
                banks in The Philippines, Indonesia and centralized tools to
                help the engineering department, define processes within a
                engineering team and later extend it to the organization level
                and test product qualities using various testing methodologies.
              </h6>
              <ol>
                <li>
                  Integrated with major banks in Indonesia, and The Philippines
                  to create a payment gateway platform. It allowed Xendit to
                  route disbursements via multiple banks and e-wallets which
                  eventually increased the payment processing time of customers
                  by 70%.
                </li>
                <li>
                  Routing and Circuit Breaker Service to monitor unhealthy
                  channels and auto disable/enable them when needed, and it
                  resulted in reduction of failed transaction by over 250% by
                  routing new transactions to healthy channels and manual recon.
                </li>
                <li>
                  Integration With Communication Channels such as Whatsapp
                  (Meta), SMS Providers, Email Providers, Viber etc, which
                  allowed Xendit to timely deliver various transactional and
                  alert notifications to their end users, which enhanced overall
                  user experience and reliability of our systems in times of
                  fire by alerting our users ahead of time.
                </li>
                <li>
                  Infra Cost Reduction Initiatives such as optimizing cost of
                  AWS S3 by using various S3 storage class based on usage which
                  reduced overall s3 usages cost by 65%, optimising the usages
                  of mongo indexes and TTL based on requirements to reduce the
                  DB cost by 40%.
                </li>
                <li>
                  Led a team of 6 professionals creating a better team culture
                  and smoother processes. Projects were finished faster, the
                  team got more efficient, and we consistently delivered ahead
                  of schedule.
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
                <li>
                  Make VCs believe in this Idea and raised funding from ventures
                  such as Iterative Singapore, Accelerating Asia, etc with a
                  total sum of USD 480,000 in pre-seed round.
                </li>
                <li>
                  Established a technical vision with the development team,
                  together we developed complete SaaS which helped us scale to
                  more than 50 locations across metro manila and gain GMV of
                  USD1,370,000 in just 6 months with over 200% MoM.
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
                Recruited as a Software engineer to work on trade matching
                engine, build various trading dashboard and chats and to
                integrate with major banks in The Philippines.
              </h6>
              <ol>
                <li>
                  Help Launch PDAX as one of the earliest team members,
                  significantly contributing to establishing a strong market
                  presence in the Philippines. Played a key role in achieving a
                  high customer retention rate for this super early-stage
                  startup. Worked on Trade Exchange frontend using ReactJS,
                  Redux and Complex Timeseries Graphs.
                </li>
                <li>
                  Led payments integrations team at PDAX overseeing integration
                  with major banks and e-wallets in The Philippines. It allowed
                  PDAX to accept payments on its platform which was previously a
                  manual process hence reducing the payment processing time by 3
                  days.
                </li>
                <li>
                  Help Launch bonds.ph, a product which allows you to buy
                  government bonds as tokens using web3 technology in
                  partnership with unionbank. It required me to work on Solidity
                  Smart Contracts such as ERC20, ERC721 etc. It allowed PDAX to
                  acquire big market share as now users can buy government
                  issued bonds online instead of needing to goto banks and
                  manually purchase it which usually takes weeks to process.{' '}
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
                As a Full Stack Developer, I translated client needs into
                solutions, directed development teams, and collaborated with
                Business Development on Proof of Concepts for new projects.
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
