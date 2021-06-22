import React from "react";
import mapImg from "../../img/map.jpg";

const Contacts = () => {
  return (
    <React.Fragment>
      <div className="contacts__text">
        <p className="contacts__address-text">Адрес</p>
        <address>Сарнкт-Петербург, набережная реки Карповки, дом 5</address>
        <p className="contacts__duty-text">Режим работы</p>
        <p className="contacts__duty">Ежедневно, с 10:00 до 21:00</p>
        <p className="contacts__phone-text">Телефон</p>
        <a className="contacts__phone" href="tel:8 (800) 333-55-99">8 (800) 333-55-99</a>
        <p className="contacts__email-text">E-mail</p>
        <a className="contacts__email" href = "mailto: ifno@avto-moto.ru">ifno@avto-moto.ru</a>
      </div>
      <div className="contacts__map">
        <img src={mapImg} alt="Офис по адресу Сарнкт-Петербург, набережная реки Карповки, дом 5"/>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
