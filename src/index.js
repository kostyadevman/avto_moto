import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import App from './components/app/app';
import './sass/style.scss';
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "./browser-history";
import rootReducer from "./store/reducer";

const store = configureStore({
  reducer: rootReducer
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById(`root`)
);
