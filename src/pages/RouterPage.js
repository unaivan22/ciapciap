import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import CiapDetail from './CiapDetail';
import PostDetails from './PostDetails';

export default function RouterPage() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:id" component={CiapDetail} />
          <Route path="/ciap/:id/:postId" component={PostDetails} />
        </Switch>
      </div>
    </Router>
  )
}