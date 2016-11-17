import React from 'react';
import { Router, Route } from 'react-router';
import { browserHistory } from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

// we're creating a component!
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default routes;
