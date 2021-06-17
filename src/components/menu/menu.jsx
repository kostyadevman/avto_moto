import React from "react";
import {Link} from 'react-router-dom';
import {AppRoute} from "../../const";

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link className="menu__link" to={AppRoute.ROOT}>Автомобили</Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to={AppRoute.CONTACTS}>Контакты</Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to={AppRoute.SERVICES}>Услуги</Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to={AppRoute.VACANCY}>Вакансии</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;
