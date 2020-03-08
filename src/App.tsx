import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { reactRouterHistory } from './utils/navigation';
import { CONTACT_PAGE, HOME_PAGE, INDEX_PAGE } from './utils/urls';
import NotFoundPage from './components/http-responses/not-found';
import HomePage from './components/homepage';
import Sidebar from './components/sidebar/sidebar';
import ContactPage from './components/contact-page';

function App() {
  return (
    <Router history={reactRouterHistory}>
      <div id="adarsh-main">
        <Sidebar />
        <div className="adarsh-container">
          <Switch>
            <Redirect exact from={INDEX_PAGE} to={HOME_PAGE} />
            <Route path={HOME_PAGE} component={HomePage} />
            <Route path={CONTACT_PAGE} component={ContactPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
