import React from 'react';
import Logo from "../../logo/logo";
import Menu from "../../menu/menu";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
