import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cases from './pages/Cases/Cases';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cases" exact component={Cases} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;