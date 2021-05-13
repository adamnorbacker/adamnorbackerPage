import { createGlobalStyle } from 'styled-components';
import resets from './main.module.css';

export const GlobalStyle = createGlobalStyle`
  ${resets}

  html {
    height: -webkit-fill-available;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: #d79921;
    color:#fff;
    padding: 2rem 0 0 2rem;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
    background:#21222d;
    padding: 2rem;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
