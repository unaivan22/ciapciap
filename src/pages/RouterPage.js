import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import CiapDetail from './CiapDetail';

export default function RouterPage() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ciap/:id" component={CiapDetail} />
        </Switch>
      </div>
    </Router>
  )
}