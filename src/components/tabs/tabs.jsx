import React, {useState} from "react";
import Contacts from "../contacts/contacts";
import Profile from "../profile/profile";
import Feedback from "../feedback/feedback";

const Items = [
  {title: `Характеристики`, className: `profile`, component: <Profile />},
  {title: `Отзывы`, className: `feedback`, component: <Feedback />},
  {title: `Контакты`, className: `contacts`, component: <Contacts />}
]
const Tabs = () => {

  const [active, setActive] = useState(0);

  const _handleOpenClick = (evt) => {
    setActive(parseInt(evt.target.dataset.index, 0));
  }

  return (
    <section className="tab">
      <ul className="tab__list">
        {Items.map((item, index) => (
          <li>
            <button
              className={(index === active ? `tab__item tab__item--active` : `tab__item`)}
              data-index={index}
              key={index}
              onClick={_handleOpenClick}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      {Items[active] && <section className={`tab__pane tab__pane--active ${Items[active].className}`}>
        {Items[active].component}
      </section>}
    </section>
  )
}

export default Tabs;
