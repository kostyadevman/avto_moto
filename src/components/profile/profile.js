import React from "react";

const Profile = () => {
  return (
    <table className="profile__table">
      <tr className="profile__row">
        <th className="profile__header">Трансмиссия</th>
        <td className="profile__value">Роботизированная</td>
      </tr>
      <tr className="profile__row">
        <th className="profile__header">Мощность двигателя, л.с.</th>
        <td className="profile__value">249</td>
      </tr>
      <tr className="profile__row">
        <th className="profile__header">Тип двигателя</th>
        <td className="profile__value">Бензиновый</td>
      </tr>
      <tr className="profile__row">
        <th className="profile__header">Привод</th>
        <td className="profile__value">Полный</td>
      </tr>
      <tr className="profile__row">
        <th className="profile__header">Объем двигателя, л</th>
        <td className="profile__value">2.4</td>
      </tr>
      <tr className="profile__row">
        <th className="profile__header">Макс. крутящий момент</th>
        <td className="profile__value">370/4500</td>
      </tr>
      <tr className="profile__row">
        <th className="profile__header">Количество цилиндров</th>
        <td className="profile__value">4</td>
      </tr>
    </table>
  );
};

export default Profile;
