import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { reactRouterHistory } from './utils/navigation';
import { SKILLS_PAGE, HOME_PAGE } from './utils/urls';
import NotFoundPage from './components/http-responses/not-found';
import HomePage from './components/homepage';
import Sidebar from './components/sidebar/sidebar';
import SkillsPage from './components/skills-page';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';

// @ts-ignore
import CV from './cv.pdf';

function App() {
  return (
    <Router history={reactRouterHistory}>
      <div id="adarsh-main">
        <Sidebar />
        <div className="adarsh-container">
          <Switch>
            <Route exact path={HOME_PAGE} component={HomePage} />
            <Route exact path={SKILLS_PAGE} component={SkillsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <div className="download-resume">
          <a
            href={CV}
            download="CV - Adarsh Kumar.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <BsFillFileEarmarkPdfFill />
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
