import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const menuCategory = [
  { link: './#rolls', title: 'Роллы', src: './menu-icon/icon-01.svg' },
  { link: './#sushi', title: 'Суши', src: './menu-icon/icon-02.svg' },
  { link: './#sets', title: 'Сеты', src: './menu-icon/icon-03.svg' },
  { link: './', title: 'Боулы', src: './menu-icon/icon-04.svg' },
  { link: './', title: 'Соусы', src: './menu-icon/icon-05.svg' },
  { link: './#drinks', title: 'Напитки', src: './menu-icon/icon-06.svg' },
  { link: './', title: 'Неиз...', src: './menu-icon/icon-07.svg' },
];

function MenuCategory() {
  return (
    <div className="menu-category">
      <ul className="menu-category__list">
        {menuCategory.map((item) => (
          <li key={item.title} className="menu-category__item">
            <Link className="menu-category__link" to={item.link}>
              <img src={item.src} alt={item.title} />
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuCategory;
