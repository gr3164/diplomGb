import React from 'react';
import MenuCategory from './MenuCategory';
import HeaderActions from './HeaderActions';

const menu = [
  { id: 1, title: 'Главная', class: 'menu__link' },
  { id: 2, title: 'Доставка', class: 'menu__link' },
  { id: 3, title: 'О нас', class: 'menu__link' },
  { id: 4, title: 'Новости', class: 'menu__link' },
  { id: 5, title: '+8 888 888 88 88', class: 'menu__link menu__link-phone' },
];

function Header({ refOne }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__top">
            <a className="header__logo-link" href="#">
              <img className="logo-desc" src="./logo.svg" alt="logo" />
              <img className="logo-mob q" src="./logo-mob.svg" alt="logo" />
            </a>
            <ul className="menu">
              {menu.map((item) => (
                <li key={item.id} className="menu__item">
                  <a className={item.class} href="#">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <HeaderActions refOne={refOne} />

            <button className="burger-menu q">
              <img src="./burger-menu.svg" alt="burger-menu" />
            </button>
          </div>

          <MenuCategory />
        </div>
      </div>
    </header>
  );
}

export default Header;
