/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import routes from './routes';
//
// if (module.hot) {
//   module.hot.accept();
// }

ReactDOM.render(routes, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./routes', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./routes').default;
    ReactDOM.render(
      routes,
      document.getElementById('root')
    );
  });
}
