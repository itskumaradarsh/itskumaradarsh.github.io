import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { reactRouterHistory } from './utils/navigation';
import { INDEX_PAGE, HOME_PAGE } from './utils/urls';
import NotFoundPage from './components/http-responses/not-found';
import HomePage from './components/homepage';

function App() {
  return (
    <Router history={reactRouterHistory}>
      <Switch>
        <Redirect exact path={INDEX_PAGE} to={HOME_PAGE} />
        <Route path={HOME_PAGE} component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
