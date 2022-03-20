import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles'
import Theme from './styles/theme'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <App />,
  </ThemeProvider>,
  document.getElementById('root')
);