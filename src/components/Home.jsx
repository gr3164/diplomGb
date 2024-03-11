import React, { useEffect } from 'react';
import Card from './Card';

import { useSelector } from 'react-redux';
import Slider from './Slider';

function Home() {
  const { catalog, status } = useSelector((state) => state.data);

  return (
    <main className="main">
      <section id="sushi" className="sushi">
        <div className="container">
          <div className="sushi__inner">
            <div className="sushi__top">
              <h2 className="sushi__title title">Суши</h2>
              <button className="see-all">Смотреть все</button>
            </div>
            <div className="sushi__list grid">
              {status === 'resolve' ? <Card target={catalog[0].sushi} /> : <h4>Loading...</h4>}
            </div>
          </div>
        </div>
      </section>

      <section id="rolls" className="rolls">
        <div className="container">
          <div className="rolls__inner">
            <div className="rolls__top">
              <h2 className="title">Ролы</h2>
              <button className="see-all">Смотреть все</button>
            </div>
            <div className="rolls__list grid">
              {status === 'resolve' ? <Card target={catalog[0].rolls} /> : <h4>Loading...</h4>}
            </div>
          </div>
        </div>
      </section>

      <section id="sets" className="sets">
        <div className="container">
          <div className="sets__inner">
            <div className="sets__top">
              <h2 className="title">Сеты</h2>
              <button className="see-all">Смотреть все</button>
            </div>
            <div className="sets__list grid">
              {status === 'resolve' ? <Card target={catalog[0].sets} /> : <h4>Loading...</h4>}
            </div>
          </div>
        </div>
      </section>

      <section className="best">
        <div className="container">
          {status === 'resolve' ? (
            <Slider bestSlider={catalog[0].bestSlider} />
          ) : (
            <h4>Loading...</h4>
          )}
        </div>
      </section>

      <section id="drinks" className="drinks">
        <div className="container">
          <div className="drinks__inner">
            <div className="drinks__top">
              <h2 className="title">Напитки</h2>
              <button className="see-all">Смотреть все</button>
            </div>
            <div className="drinks__list grid">
              {status === 'resolve' ? <Card target={catalog[0].drinks} /> : <h4>Loading...</h4>}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
