import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGithubAlt,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { ISidebar } from './interface';
import {
  HOME_PAGE,
  CONTACT_PAGE,
  ABOUT_PAGE,
  WORK_PAGE,
} from '../../utils/urls';

const Sidebar = (props: ISidebar) => {
  return (
    <div id="adarsh-sidebar">
      <div className="header">
        <div>A</div>
        <div>Adarsh</div>
      </div>
      <div className="navigation">
        <NavLink to={HOME_PAGE} activeClassName="active-link">
          <span className="lnr lnr-home" />
          <span className="hidden">Home</span>
        </NavLink>
        <NavLink to={ABOUT_PAGE} activeClassName="active-link">
          <span className="lnr lnr-user" />
          <span className="hidden">About</span>
        </NavLink>
        <NavLink to={WORK_PAGE} activeClassName="active-link">
          <span className="lnr lnr-layers" />
          <span className="hidden">Work</span>
        </NavLink>
        <NavLink to={CONTACT_PAGE} activeClassName="active-link">
          <span className="lnr lnr-location" />
          <span className="hidden">Contact</span>
        </NavLink>
      </div>
      <div className="footer">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href="https://github.com/adarsh2k"
        >
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href="https://www.linkedin.com/in/adarsh2k/"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href="https://www.facebook.com/adarsh2k"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href="https://twitter.com/adarshkumar2k"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href="https://www.instagram.com/adarsh2k/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
