// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Article from '../pages/article';
import Home from '../pages/home';
import NotFound404 from '../pages/404';

export default function Router() {
  return (
    <BrowserRouter>
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
          <NotFound404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
