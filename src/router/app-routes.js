// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Article from './../pages/article';
import Home from './../pages/home';

export default function AppRoutes() {
  return (
    <Switch>
      {/* Index Page */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* URL Routes */}
      <Route path="/article">
        <Article />
      </Route>

      {/* 404 Not Found */}
      <Route path="*">
        <Home />
      </Route>
    </Switch>
  );
}
