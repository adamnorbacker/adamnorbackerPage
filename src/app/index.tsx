import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

export const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="Adam Norbäcker - %s" defaultTitle="Adam Norbäcker">
        <meta
          name="description"
          content="Adam Norbäcker - Frontend developer"
        />
      </Helmet>
      <article>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </article>
      <GlobalStyle />
    </BrowserRouter>
  );
};
