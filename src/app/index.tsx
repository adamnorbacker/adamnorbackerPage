import { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { Home } from './pages/Loadable';

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
        <Home />
      </article>
      <GlobalStyle />
    </BrowserRouter>
  );
};
