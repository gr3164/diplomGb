import React from 'react';
import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Slider({ bestSlider }) {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide key={bestSlider[0].id}>
        <div className="best__inner">
          <div className="best__content">
            <h3 className="best__title">{bestSlider[0].title}</h3>
            <div className="best__descr">{bestSlider[0].descr}</div>
            <div className="best__actions">
              <button className="best__btn">В корзину</button>
              <div className="best__price">
                190 <span>руб</span>
              </div>
              <div className="best__text">{bestSlider[0].theBest}</div>
            </div>
          </div>
          <div className="best__img">
            <img src={bestSlider[0].src} alt="best" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide key={bestSlider[1].id}>
        <div className="best__inner">
          <div className="best__content">
            <h3 className="best__title">{bestSlider[1].title}</h3>
            <div className="best__descr">{bestSlider[1].descr}</div>
            <div className="best__actions">
              <button className="best__btn">В корзину</button>
              <div className="best__price">
                190 <span>руб</span>
              </div>
              <div className="best__text">{bestSlider[1].theBest}</div>
            </div>
          </div>
          <div className="best__img">
            <img src={bestSlider[1].src} alt="best" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
