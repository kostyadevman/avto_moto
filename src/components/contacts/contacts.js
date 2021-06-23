import React from "react";
import {YMaps, Map, Placemark} from "react-yandex-maps";
import mapImg from "../../img/map.jpg";

const Contacts = () => {
  return (
    <React.Fragment>
      <div className="contacts__text">
        <p className="contacts__text--label">Адрес</p>
        <address className="contacts__text--value">Сарнкт-Петербург, набережная реки Карповки, дом 5</address>
        <p className="contacts__text--label">Режим работы</p>
        <p className="contacts__text--value">Ежедневно, с 10:00 до 21:00</p>
        <p className="contacts__text--label">Телефон</p>
        <a className="contacts__text--value" href="tel:8 (800) 333-55-99">8 (800) 333-55-99</a>
        <p className="contacts__text--label">E-mail</p>
        <a className="contacts__text--value" href = "mailto: ifno@avto-moto.ru">ifno@avto-moto.ru</a>
      </div>
      <div className="contacts__map map">
        <img
          className="map__img"
          width="431"
          height="271"
          src={mapImg}
          alt="Офис по адресу Сарнкт-Петербург, набережная реки Карповки, дом 5"
        />
        <div className="map__ya">
          <YMaps>
            <Map
              defaultState={{ center: [59.968137, 30.316272], zoom: 14 }}
              width="100%" height="100%"
            >
              <Placemark
                defaultGeometry={[59.968137, 30.316272]}
                options={{
                  iconColor: '#D12136',
                  controls: []
                }}
              />
            </Map>
          </YMaps>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
