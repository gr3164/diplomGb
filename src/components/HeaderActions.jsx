import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Header.module.scss';
import { setCurentCart, setFilters, setFiltersIncr } from '../redux/slices/dataSlice';

function HeaderActions({ refOne }) {
  const dispatch = useDispatch();

  const { curentCart, catalog, filters, status } = useSelector((state) => state.data);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const countObjects = curentCart.reduce((acc, obj) => {
      acc[obj.id] = (acc[obj.id] || 0) + 1;
      return acc;
    }, {});

    const arrSet = Array.from(new Set(curentCart));
    const priceAll =
      arrSet.reduce((acc, item, i) => (acc += item.price), 0) *
      Object.values(countObjects).reduce((acc, el) => (acc += el), 0);
    const filter = [arrSet, countObjects, priceAll];

    dispatch(setFilters(filter));
  }, [curentCart]);

  const decriment = (data, id) => {
    setFiltersIncr(data);
  };

  const hendleClick = () => {
    setIsOpen(!isOpen);

    refOne.current.classList.toggle('hiden');
  };

  return (
    <div className="header__actions actions">
      <button className="actions__btn">
        <svg
          width="20.000122"
          height="21.996460"
          viewBox="0 0 20.0001 21.9965"
          fill="#686870"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Vector (Stroke)"
            d="M5.05029 2.05026C6.36304 0.737488 8.14355 0 10.0001 0C11.8566 0 13.6371 0.737488 14.9498 2.05026C16.2626 3.36301 17.0001 5.14349 17.0001 7C17.0001 10.3527 17.7172 12.4346 18.3779 13.6461C18.7097 14.2544 19.0328 14.6535 19.2573 14.8904C19.3698 15.0091 19.4581 15.0878 19.5114 15.1322C19.538 15.1544 19.5558 15.168 19.5635 15.1737C19.5647 15.1746 19.5657 15.1753 19.5664 15.1758C19.9249 15.4221 20.0835 15.8725 19.9572 16.2898C19.8295 16.7115 19.4408 17 19.0001 17L1.00012 17C0.559448 17 0.170654 16.7115 0.0429688 16.2898C-0.083374 15.8725 0.0753174 15.4221 0.433716 15.1758C0.434448 15.1753 0.435425 15.1746 0.436646 15.1737C0.444336 15.168 0.462158 15.1544 0.48877 15.1322C0.541992 15.0878 0.630371 15.0091 0.74292 14.8904C0.967285 14.6535 1.29041 14.2544 1.62219 13.6461C2.28296 12.4346 3.00012 10.3527 3.00012 7C3.00012 5.14349 3.73755 3.36301 5.05029 2.05026ZM0.443848 15.1689C0.44397 15.1689 0.444092 15.1689 0.444092 15.1688C0.444092 15.1688 0.444092 15.1688 0.444092 15.1688L0.443848 15.1689ZM3.14941 15L16.8507 15C16.7747 14.8753 16.6982 14.7434 16.6222 14.6039C15.783 13.0654 15.0001 10.6473 15.0001 7C15.0001 5.67392 14.4733 4.40216 13.5356 3.46448C12.5979 2.52679 11.3262 2 10.0001 2C8.67395 2 7.40222 2.52679 6.4646 3.46448C5.52686 4.40216 5.00012 5.67392 5.00012 7C5.00012 10.6473 4.21716 13.0654 3.37793 14.6039C3.30188 14.7434 3.22546 14.8753 3.14941 15Z"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
          <path
            id="Vector (Stroke)"
            d="M7.77185 19.135C8.24951 18.8578 8.86145 19.0205 9.13855 19.4982C9.22656 19.6498 9.35266 19.7755 9.50452 19.863C9.65625 19.9504 9.82837 19.9965 10.0037 19.9965C10.1788 19.9965 10.351 19.9504 10.5027 19.863C10.6545 19.7755 10.7806 19.6498 10.8687 19.4982C11.1458 19.0205 11.7577 18.8578 12.2354 19.135C12.7131 19.4121 12.8757 20.024 12.5986 20.5018C12.3348 20.9564 11.9564 21.3337 11.501 21.5961C11.0455 21.8584 10.5292 21.9965 10.0037 21.9965C9.47803 21.9965 8.96167 21.8584 8.50623 21.5961C8.05078 21.3337 7.67236 20.9564 7.40857 20.5018C7.13147 20.024 7.29407 19.4121 7.77185 19.135Z"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button className="actions__btn">
        <svg
          width="22.185547"
          height="19.000000"
          viewBox="0 0 22.1855 19"
          fill="#686870"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Vector 272 (Stroke)"
            d="M2.76611 3.88373C2.08679 5.03333 1.86316 6.54025 2.0791 7.83557C2.50378 10.3835 4.71338 12.6795 7.05786 14.4158C8.20117 15.2625 9.31897 15.9341 10.1523 16.3943C10.537 16.6068 10.8591 16.7731 11.0928 16.8898C11.3263 16.7731 11.6484 16.6068 12.0332 16.3943C12.8666 15.9341 13.9844 15.2625 15.1277 14.4158C17.4722 12.6795 19.6818 10.3835 20.1064 7.8356C20.3223 6.54028 20.0988 5.03336 19.4194 3.88373C18.7654 2.77692 17.699 2 16.0928 2C14.4857 2 13.5063 2.78198 12.8928 3.60001C12.5798 4.01721 12.3679 4.43973 12.2346 4.75964C12.1685 4.91827 12.1233 5.048 12.0956 5.13416C12.0818 5.17712 12.0724 5.20892 12.067 5.22769L12.0621 5.24573L12.0625 5.24417C12.0623 5.24521 12.0624 5.24466 12.0621 5.24573C11.9493 5.68872 11.5502 6 11.0928 6C10.6353 6 10.2363 5.68954 10.1237 5.24652L10.1184 5.22766C10.113 5.20889 10.1038 5.17709 10.09 5.13412C10.0623 5.04797 10.017 4.91824 9.95093 4.75961C9.81763 4.4397 9.60571 4.01721 9.29272 3.60001C8.6792 2.78198 7.69995 2 6.09265 2C4.48645 2 3.42004 2.77695 2.76611 3.88373ZM11.0928 5C10.1226 5.24252 10.1227 5.24295 10.1228 5.24338L10.1233 5.24539L10.1237 5.24652L11.0928 5ZM11.0928 2.68094C11.0299 2.58783 10.9633 2.49399 10.8927 2.39999C10.0062 1.21799 8.4856 0 6.09265 0C3.69873 0 2.01514 1.22308 1.04419 2.86627C0.0985107 4.46667 -0.177856 6.45975 0.106323 8.16443C0.668091 11.5349 3.4585 14.2389 5.86755 16.023C7.10083 16.9364 8.2981 17.6551 9.18555 18.1451C9.63025 18.3907 9.99927 18.5801 10.2593 18.709C10.3893 18.7734 10.4922 18.8229 10.5637 18.8567C10.5995 18.8736 10.6274 18.8867 10.647 18.8957L10.67 18.9063L10.6768 18.9094L10.679 18.9103C10.6792 18.9105 10.6802 18.9109 11.0928 18L10.6802 18.9109C10.9424 19.0297 11.243 19.0297 11.5052 18.9109L11.0928 18C11.5052 18.9109 11.505 18.9111 11.5052 18.9109L11.5087 18.9094L11.5154 18.9063L11.5385 18.8957C11.5581 18.8867 11.5861 18.8736 11.6218 18.8567C11.6934 18.8229 11.7961 18.7734 11.9263 18.709C12.1862 18.5801 12.5553 18.3907 12.9999 18.1452C13.8873 17.6552 15.0847 16.9365 16.318 16.023C18.7271 14.2389 21.5175 11.5349 22.0792 8.1644C22.3633 6.45972 22.0869 4.46664 21.1412 2.86627C20.1703 1.22308 18.4867 0 16.0928 0C13.7 0 12.1793 1.21802 11.2927 2.39999C11.2223 2.49399 11.1556 2.58783 11.0928 2.68094Z"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button className="actions__btn">
        <svg
          width="24.000000"
          height="24.000000"
          viewBox="0 0 24 24"
          fill="#686870"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <desc>Created with Pixso.</desc>
          <defs>
            <clipPath id="clip3_10487">
              <rect id="Component 642" width="24.000000" height="24.000000" fillOpacity="0" />
            </clipPath>
          </defs>
          <rect id="Component 642" width="24.000000" height="24.000000" fillOpacity="0" />
          <g clipPath="url(#clip3_10487)">
            <path
              id="Vector (Stroke)"
              d="M4.46448 15.4645C5.4021 14.5268 6.67395 14 8 14L16 14C17.326 14 18.5979 14.5268 19.5355 15.4645C20.4733 16.4022 21 17.6739 21 19L21 21C21 21.5523 20.5522 22 20 22C19.4478 22 19 21.5523 19 21L19 19C19 18.2043 18.684 17.4413 18.1213 16.8787C17.5587 16.3161 16.7957 16 16 16L8 16C7.20435 16 6.44128 16.3161 5.87866 16.8787C5.31604 17.4413 5 18.2043 5 19L5 21C5 21.5523 4.55225 22 4 22C3.44775 22 3 21.5523 3 21L3 19C3 17.6739 3.52673 16.4022 4.46448 15.4645Z"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
            <path
              id="Vector (Stroke)"
              d="M12 4C10.3431 4 9 5.34314 9 7C9 8.65686 10.3431 10 12 10C13.6569 10 15 8.65686 15 7C15 5.34314 13.6569 4 12 4ZM7 7C7 4.23859 9.23853 2 12 2C14.7615 2 17 4.23859 17 7C17 9.76141 14.7615 12 12 12C9.23853 12 7 9.76141 7 7Z"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </button>
      <button
        onClick={() => hendleClick()}
        className={s.cartAdd + ' actions__btn' + ' actions__btn_bp'}>
        <span>Корзина</span>
        {curentCart.length > 0 && <p className={s.counter}>{curentCart.length}</p>}
        <svg
          width="24.000000"
          height="24.000000"
          viewBox="0 0 24 24"
          fill="#686870"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <desc>Created with Pixso.</desc>
          <defs>
            <clipPath id="clip3_10500">
              <rect id="Иконка" width="24.000000" height="24.000000" fillOpacity="0" />
            </clipPath>
          </defs>
          <rect id="Иконка" width="24.000000" height="24.000000" fillOpacity="0" />
          <g clipPath="url(#clip3_10500)">
            <path
              id="Vector (Stroke)"
              d="M5.19995 1.39999C5.38879 1.14819 5.6853 1 6 1L18 1C18.3147 1 18.6111 1.14819 18.8 1.39999L21.8 5.39999C21.9298 5.57309 22 5.78363 22 6L22 20C22 20.7957 21.684 21.5587 21.1213 22.1213C20.5587 22.684 19.7957 23 19 23L5 23C4.20435 23 3.44128 22.684 2.87866 22.1213C2.31604 21.5587 2 20.7957 2 20L2 6C2 5.78363 2.07019 5.57309 2.19995 5.39999L5.19995 1.39999ZM6.5 3L4 6.33334L4 20C4 20.2652 4.10535 20.5196 4.29285 20.7071C4.48047 20.8947 4.73474 21 5 21L19 21C19.2653 21 19.5195 20.8947 19.7072 20.7071C19.8947 20.5196 20 20.2652 20 20L20 6.33334L17.5 3L6.5 3Z"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
            <path
              id="Vector (Stroke)"
              d="M2 6C2 5.44772 2.44775 5 3 5L21 5C21.5522 5 22 5.44772 22 6C22 6.55228 21.5522 7 21 7L3 7C2.44775 7 2 6.55228 2 6Z"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
            <path
              id="Vector (Stroke)"
              d="M8 9C8.55225 9 9 9.44772 9 10C9 10.7957 9.31604 11.5587 9.87866 12.1213C10.4413 12.6839 11.2043 13 12 13C12.7957 13 13.5587 12.6839 14.1213 12.1213C14.684 11.5587 15 10.7957 15 10C15 9.44772 15.4478 9 16 9C16.5522 9 17 9.44772 17 10C17 11.3261 16.4733 12.5978 15.5355 13.5355C14.5979 14.4732 13.326 15 12 15C10.674 15 9.4021 14.4732 8.46448 13.5355C7.52673 12.5978 7 11.3261 7 10C7 9.44772 7.44775 9 8 9Z"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </button>

      {isOpen && (
        <div className={isOpen ? 'active cart' : 'cart'}>
          <div className="cart__top">
            <div className="cart__title">Ваш заказ</div>
            <button onClick={() => hendleClick()} className="cart__close">
              X
            </button>
          </div>
          <div className="cart__body">
            <ul className="cart__list">
              {status == 'resolve' ? (
                filters[0].map((el) => (
                  <li key={el.id} className="cart__item">
                    <div className="cart__left">
                      <img src={el.src} alt="img" />
                      <div className="cart__text-title">
                        <a href="#">{el.title}</a>
                        <p>Вес: {el.wt}</p>
                      </div>
                    </div>
                    <div className="cart__price-count">
                      <div className="cart__price-count_p">
                        {el.price * filters[1][el.id]}
                        <span>руб</span>
                      </div>
                      <div className="cart__price-count_couner">
                        <button onClick={() => dispatch(setCurentCart(el))}>-</button>
                        {filters[1][el.id]}
                        <button onClick={() => dispatch(setCurentCart(el))}>+</button>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <h5>Корзина пуста</h5>
              )}
            </ul>
          </div>
          <div className="cart__bottom">
            <div className="cart__final-price">
              {filters[2]} <span>руб</span>
            </div>
            <button className="cart__btn">Оформить заказ</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderActions;
