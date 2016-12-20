import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import Hello1 from './components/Hello1';
import Hello2 from './components/Hello2';

const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Hello1}/>
      <Route path='/hello1' component={Hello1} />
      <Route path='/hello2' component={Hello2} />
    </Route>
  </Router>
)

export default renderRoutes;