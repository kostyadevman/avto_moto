import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Helmet} from "react-helmet";
import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';
import Main from '../main/main';
import {AppRoute} from '../../const';
import PageNotFound from '../page-not-found/page-not-found';
import openSansSemiBold from "../../fonts/open-sans-semibold.woff2";
import openSansRegular from "../../fonts/open-sans-v20-latin-regular.woff2";
import proximaNovaBold from "../../fonts/ProximaNova-Bold.woff2";

const App = () => {
  return (
    <div className="app">
      <Helmet>
        <link rel="preload" href={openSansRegular} as="font" type="font/woff2"/>
        <link rel="preload" href={openSansSemiBold} as="font" type="font/woff2"/>
        <link rel="preload" href={proximaNovaBold} as="font" type="font/woff2"/>
      </Helmet>
      <Header />
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
