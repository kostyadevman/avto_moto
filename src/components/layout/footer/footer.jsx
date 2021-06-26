import React from 'react';
import {Link} from "react-router-dom";
import {AppRoute} from "../../../const";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <Link className="menu__link" to={AppRoute.NOT_IMPLEMENTED}>Корпоративным клиентам</Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to={AppRoute.NOT_IMPLEMENTED}>Клиентам</Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to={AppRoute.NOT_IMPLEMENTED}>Аренда авто</Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to={AppRoute.NOT_IMPLEMENTED}>Каршеринг</Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to={AppRoute.NOT_IMPLEMENTED}>Как продать авто</Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to={AppRoute.NOT_IMPLEMENTED}>Trade-in</Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to={AppRoute.NOT_IMPLEMENTED}>Test drive</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
