import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './sass/style.scss';
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "./browser-history";


ReactDOM.render(
  <BrowserRouter history={browserHistory}>
    <App />
  </BrowserRouter>,
  document.getElementById(`root`)
);
