import React from "react";

const Profile = () => {
  return (
    <ul className="profile__list">
      <li className="profile__item">
        <div className="profile__header">Трансмиссия</div>
        <div className="profile__value">Роботизированная</div>
      </li>
      <li className="profile__item">
        <div className="profile__header">Мощность двигателя, л.с.</div>
        <div className="profile__value">249</div>
      </li>
      <li className="profile__item">
        <div className="profile__header">Тип двигателя</div>
        <div className="profile__value">Бензиновый</div>
      </li>
      <li className="profile__item">
        <div className="profile__header">Привод</div>
        <div className="profile__value">Полный</div>
      </li>
      <li className="profile__item">
        <div className="profile__header">Объем двигателя, л</div>
        <div className="profile__value">2.4</div>
      </li>
      <li className="profile__item">
        <div className="profile__header">Макс. крутящий момент</div>
        <div className="profile__value">370/4500</div>
      </li>
      <li className="profile__item">
        <div className="profile__header">Количество цилиндров</div>
        <div className="profile__value">4</div>
      </li>
    </ul>
  );
};

export default Profile;
