import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './containers/App';
import About from './containers/About';
import NotFound from './containers/NotFound';

// we're creating a component!
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
)

export default routes;
