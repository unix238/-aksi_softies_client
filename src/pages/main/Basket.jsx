/** @format */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BasketItemCard } from '../../components/BasketItemCard/BasketItemCard';
import { Modal } from '../../components/Modal/Modal';
import { BasketTexts } from '../../localizations/BasketTexts';

export const Basket = () => {
  const basketItems = useSelector((state) => state.basket?.basketItems);
  let [total, setTotal] = useState(
    basketItems.reduce((acc, item) => {
      return (acc += Number(item.item.item.price[item.item.size]));
    }, 0)
  );

  const currentLanguage = useSelector((state) => state.global.currentLanguage);
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    document.title = BasketTexts[currentLanguage].title;
    console.log(basketItems);
  }, []);

  useEffect(() => {
    setTotal(
      basketItems.reduce((acc, item) => {
        return (acc += Number(item.item.item.price[item.item.size]));
      }, 0)
    );
  }, [basketItems]);

  return (
    <div className='basket'>
      <div className='wrapper'>
        {basketItems.length > 0 ? (
          <>
            <div className='basket__items'>
              {basketItems.map((item) => (
                <BasketItemCard
                  key={`basket${item.item.item._id}`}
                  id={item.item}
                />
              ))}
              <div className='basket__total'>
                <div
                  className='btn btn__basket'
                  onClick={(e) => {
                    console.log(e);
                    setIsModalActive(true);
                    console.log('dsadsa');
                  }}
                >
                  {BasketTexts[currentLanguage].buy}
                </div>
                <div className='total'>
                  {BasketTexts[currentLanguage].total}{' '}
                  {total.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}{' '}
                  ₸
                </div>
              </div>
            </div>
            {isModalActive && <Modal setIsModalActive={setIsModalActive} />}
          </>
        ) : (
          <div className='basket__empty'>
            {BasketTexts[currentLanguage].empty}
          </div>
        )}
      </div>
    </div>
  );
};
