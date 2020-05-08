import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Hero from './pages/Hero';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/hero/:hero_id" component={Hero} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
