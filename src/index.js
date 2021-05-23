import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './views/App/App';

ReactDOM.render(
  <Router>
    <React.StrictMode>  
        <App/>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
