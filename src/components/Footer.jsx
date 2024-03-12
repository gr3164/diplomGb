import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">
            <a href="#">
              <img src="./logo.svg" alt="logo" />
            </a>
          </div>
          <div className="footer__navigation navigation-footer">
            <h4 className="footer-subtitle">Навигация:</h4>
            <ul className="navigation-footer__list">
              <li className="navigation-footer__item">
                <a className="navigation-footer__link" href="#">
                  Главная
                </a>
              </li>
              <li className="navigation-footer__item">
                <a className="navigation-footer__link" href="#">
                  Меню
                </a>
              </li>
              <li className="navigation-footer__item">
                <a className="navigation-footer__link" href="#">
                  Доставка
                </a>
              </li>
              <li className="navigation-footer__item">
                <a className="navigation-footer__link" href="#">
                  Вакансии
                </a>
              </li>
              <li className="navigation-footer__item">
                <a className="navigation-footer__link" href="#">
                  Новости
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__phones">
            <h4 className="footer-subtitle">Оформить заказ:</h4>
            <a href="+98888887654">+9 (888) 888 7654</a>
            <a href="+98888887654">+9 (888) 888 7654</a>
            <a href="+98888887654">+9 (888) 888 7654</a>
          </div>
          <div className="footer__time-work">
            <h4 className="footer-subtitle">Время работы:</h4>
            <p>с 11:00 до 22:45</p>
            <p>с 11:00 до 22:45</p>
          </div>
          <div className="footer__social">
            <h4 className="footer-subtitle">Мы в соц. сетях:</h4>
            <div className="footer__social-icons">
              <a href="#">
                {' '}
                <img src="./igram.svg" alt="igram" />
              </a>
              <a href="#">
                {' '}
                <img src="./fbook.svg" alt="fbook" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__copy">
          <div className="footer__copy-text">
            <a href="#">Политика конфиденциальности</a>
          </div>
          <div className="footer__copy-icon">
            <a href="#">
              <img src="./copy-icone.png" alt="qwe" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
