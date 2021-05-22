import React from 'react';
import { ThemeProvider } from 'theme-ui'
import ReactDOM from 'react-dom';
import './index.scss';
import App from './views/App/App';
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
