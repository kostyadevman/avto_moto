import React from 'react';
import Hero from "../hero/hero";
import Tabs from "../tabs/tabs";
import NewComment from "../new-comment/new-comment";

const Main = () => {
  return (
    <main className="main container">
      <h1 className="visually-hidden">Главная</h1>
      <Hero />
      <Tabs />
      <NewComment />
    </main>
  );
};

export default Main;
