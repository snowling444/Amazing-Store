import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Post from './components/Post';
import NewPost from './components/NewPost';
import Edit from './components/Edit';

const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/new' component={NewPost}/>
      <Route path='/posts/:id' component={Post}/>
      <Route path='/edit/:id' component={Edit}/>
    </Route>
  </Router>
)

export default renderRoutes;
