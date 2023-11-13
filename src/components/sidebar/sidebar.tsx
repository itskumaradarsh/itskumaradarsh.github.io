import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';
import { ISidebar } from './interface';
import { HOME_PAGE, SKILLS_PAGE } from '../../utils/urls';
import { AiFillLinkedin, AiOutlineGithub, AiOutlineHome } from 'react-icons/ai';
import { FiLayers } from 'react-icons/fi';

const Sidebar = (props: ISidebar) => {
  return (
    <div id="adarsh-sidebar">
      <div className="header">
        <Link to={HOME_PAGE}>
          <div className="brand">
            <span>A</span>
            <span>K</span>
          </div>
          <div>Adarsh</div>
        </Link>
      </div>
      <div className="navigation">
        <NavLink to={HOME_PAGE} activeClassName="active-link" exact>
          <AiOutlineHome />
          <span className="hidden">Home</span>
        </NavLink>
        <NavLink to={SKILLS_PAGE} activeClassName="active-link" exact>
          <FiLayers />
          <span className="hidden">Skills</span>
        </NavLink>
      </div>
      <div className="footer">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href="https://github.com/itskumaradarsh"
        >
          <AiOutlineGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href="https://www.linkedin.com/in/itskumaradarsh/"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
