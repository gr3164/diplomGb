import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurentCart } from '../redux/slices/dataSlice';

function Card({ target }) {
  const dispatch = useDispatch();

  const onClickAddItemCart = (e) => {
    // console.log(e.count + 1);
    dispatch(setCurentCart(e));
  };

  const iconFilter = ['./icon-mini1.svg', './icon-mini2.svg', './icon-mini3.svg'];
  return (
    <>
      {target.map((item) => (
        <div key={item.id} className="card">
          <div className="card__top">
            <div className="card__img">
              <img src={item.src} alt={item.title} />
              <div className="card__filter">
                {item.filter &&
                  item.filter.map((_, i) => (
                    <img
                      key={i}
                      className="card__filter-img"
                      src={iconFilter[i]}
                      alt="filtercard"
                    />
                  ))}
              </div>
            </div>
            <div className="card__content">
              <div className="card__icone"></div>
              <div className="card__title">
                <a href="#">{item.title}</a>
              </div>
              <div className="card__wt">Вес: {item.wt} г</div>
              <div className="card__descr">{item.descr}</div>
            </div>
          </div>
          <div className="card__bottom">
            <div className="card__price">
              {item.price} <span>руб</span>
            </div>
            <div className="card__actions">
              <button className="card__btn card__btn_like">
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="#1A1A1A"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.67243 3.88373C2.99313 5.03334 2.76956 6.54025 2.98548 7.83558C3.41017 10.3834 5.61979 12.6795 7.9642 14.4158C9.10753 15.2625 10.2253 15.9342 11.0587 16.3944C11.4434 16.6068 11.7655 16.7731 11.9991 16.8898C12.2327 16.7731 12.5549 16.6068 12.9395 16.3944C13.773 15.9342 14.8908 15.2625 16.0341 14.4158C18.3785 12.6795 20.5881 10.3835 21.0128 7.8356C21.2287 6.54027 21.0051 5.03335 20.3258 3.88373C19.6717 2.77693 18.6053 2 16.9992 2C15.392 2 14.4127 2.78198 13.7991 3.60001C13.4862 4.01722 13.2742 4.43971 13.1409 4.75963C13.0748 4.91826 13.0296 5.04799 13.0019 5.13415C12.9881 5.17712 12.9788 5.20893 12.9734 5.2277L12.9685 5.24572L12.9688 5.24416C12.9686 5.24522 12.9687 5.24466 12.9685 5.24572C12.9684 5.24607 12.9685 5.2455 12.9685 5.24572C12.8558 5.68873 12.4566 6.00001 11.9991 6C11.5416 5.99999 11.1426 5.68955 11.03 5.24651C11.0299 5.2463 11.0301 5.24684 11.03 5.24651L11.0248 5.22766C11.0195 5.2089 11.0101 5.17709 10.9963 5.13412C10.9686 5.04796 10.9234 4.91823 10.8573 4.7596C10.724 4.43969 10.512 4.0172 10.1991 3.59999C9.58563 2.78198 8.60627 1.99999 6.99906 2C5.39283 2.00001 4.32642 2.77695 3.67243 3.88373ZM11.9991 5C11.029 5.24252 11.0291 5.24295 11.0292 5.24337L11.0297 5.24538L11.03 5.24651M11.9991 2.68095C11.9362 2.58783 11.8696 2.49398 11.7991 2.4C10.9126 1.218 9.39196 -8.70223e-06 6.99905 0C4.60514 8.70232e-06 2.92154 1.22307 1.95057 2.86628C1.0049 4.46667 0.728554 6.45975 1.0127 8.16442C1.57451 11.5349 4.36491 14.2389 6.77388 16.023C8.00724 16.9364 9.20449 17.6551 10.0919 18.1452C10.5366 18.3907 10.9057 18.5801 11.1656 18.709C11.2957 18.7734 11.3985 18.8229 11.4701 18.8567C11.5058 18.8736 11.5338 18.8866 11.5534 18.8957L11.5764 18.9063L11.5832 18.9094L11.5853 18.9104C11.5856 18.9105 11.5866 18.9109 11.9991 18L11.5866 18.9109C11.8488 19.0297 12.1494 19.0297 12.4116 18.911L11.9991 18C12.4116 18.911 12.4113 18.9111 12.4116 18.911L12.4151 18.9094L12.4218 18.9063L12.4449 18.8957C12.4644 18.8866 12.4924 18.8736 12.5282 18.8567C12.5997 18.8229 12.7026 18.7734 12.8326 18.709C13.0925 18.5801 13.4617 18.3907 13.9063 18.1452C14.7938 17.6551 15.991 16.9364 17.2244 16.023C19.6334 14.2389 22.4238 11.5349 22.9856 8.1644C23.2697 6.45973 22.9933 4.46665 22.0476 2.86627C21.0766 1.22307 19.393 0 16.9992 0C14.6063 0 13.0857 1.21802 12.1992 2.39999C12.1287 2.49398 12.0621 2.58783 11.9991 2.68095Z"
                  />
                </svg>
              </button>
              <button onClick={() => onClickAddItemCart(item)} className="card__btn card__btn_add">
                <svg
                  width="28.000000"
                  height="28.000000"
                  viewBox="0 0 28 28"
                  fill="#1D1D1F"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink">
                  <desc>Created with Pixso.</desc>
                  <defs>
                    <clipPath id="clip3_3056">
                      <rect
                        id="Плюс и минус"
                        width="28.000000"
                        height="28.000000"
                        fillOpacity="0"
                      />
                    </clipPath>
                  </defs>
                  <rect id="Плюс и минус" width="28.000000" height="28.000000" fillOpacity="0" />
                  <g clipPath="url(#clip3_3056)">
                    <path
                      id="Vector (Stroke)"
                      d="M14 4.66675C14.6443 4.66675 15.1666 5.18896 15.1666 5.8335L15.1666 22.1667C15.1666 22.811 14.6443 23.3335 14 23.3335C13.3557 23.3335 12.8333 22.811 12.8333 22.1667L12.8333 5.8335C12.8333 5.18896 13.3557 4.66675 14 4.66675Z"
                      fillOpacity="1.000000"
                      fillRule="evenodd"
                    />
                    <path
                      id="Vector (Stroke)"
                      d="M4.66663 14C4.66663 13.3555 5.18896 12.8333 5.8333 12.8333L22.1666 12.8333C22.811 12.8333 23.3333 13.3555 23.3333 14C23.3333 14.6443 22.811 15.1665 22.1666 15.1665L5.8333 15.1665C5.18896 15.1665 4.66663 14.6443 4.66663 14Z"
                      fillOpacity="1.000000"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="card__tag">
            {item.hit && <div className="card__tag_hit">Hit</div>}
            {item.new && <div className="card__tag_new">New</div>}
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
