import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { reactRouterHistory } from './utils/navigation';
import { SKILLS_PAGE, HOME_PAGE } from './utils/urls';
import NotFoundPage from './components/http-responses/not-found';
import HomePage from './components/homepage';
import Sidebar from './components/sidebar/sidebar';
import SkillsPage from './components/skills-page';

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
      </div>
    </Router>
  );
}

export default App;
