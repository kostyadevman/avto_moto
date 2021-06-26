import React from 'react';
import Hero from "../hero/hero";
import Tabs from "../tabs/tabs";
import NewComment from "../new-comment/new-comment";

const Main = () => {
  return (
    <main className="main container">
      <Hero />
      <Tabs />
      <NewComment />

    </main>
  );
};

export default Main;
