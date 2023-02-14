import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Select } from '../../components/Select/Select';
import { getItemById } from '../../actions/itemsActions';
import { useDispatch } from 'react-redux';
import { addItemToBasket } from '../../actions/basketActions';
import { DetailTexts } from '../../localizations/DetailTexts';

import config from '../../config/config';

export const Detail = () => {
  const currentLanguage = useSelector((state) => state.global.currentLanguage);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentItem, setCurrentItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState({});
  const [currentSize, setCurrentSize] = useState(0);

  const location = window.location.pathname.split('/')[2];
  const dispatch = useDispatch();

  useEffect(() => {
    getItemById(location, setCurrentItem, setIsLoading);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.title = currentItem?.title[currentLanguage];
      setOptions({
        options: currentItem?.sizes.map((size) => ({
          text: size + 'cm',
          value: size,
        })),
      });
    } else {
      setOptions(tempoptions);
    }
  }, [isLoading]);

  const setSize = (e) => {
    console.log(e.target.value);
    setCurrentSize(
      currentItem.sizes.findIndex((size) => size == e.target.value)
    );
  };

  const tempoptions = {
    options: [
      {
        text: '1',
        value: '1',
      },
      {
        text: '2',
        value: '2',
      },
    ],
  };

  const addToBasketHandler = (e) => {
    dispatch(addItemToBasket(currentItem, 1, currentSize));
    alert('Товар добавлен в корзину');
  };

  return (
    <div>
      {isLoading ? (
        <></>
      ) : (
        <div className='wrapper'>
          <div className='top__container'>
            <div className='image__galery'>
              <div className='breadcrumbs' id='style-1'>
                {currentItem.images.map((image, index) => {
                  return (
                    <div
                      className={
                        currentImage === index
                          ? 'breadcrum__image__active'
                          : 'breadcrum__image'
                      }
                      key={`breadcrum${index}`}
                      onClick={() => setCurrentImage(index)}
                    >
                      <img src={config.url + image} alt='' />
                    </div>
                  );
                })}
              </div>
              <div className='main__image'>
                <div className='current__image'>
                  <img
                    src={config.url + currentItem.images[currentImage]}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='top__texts'>
              <div className='top__title'>
                {currentItem.title[currentLanguage]}
              </div>
              <div className='composition'>
                {currentItem.context[currentLanguage]}
              </div>
              <Select option={options} onChange={setSize} />
              <div className='price'>
                {currentItem.price[currentSize].toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}{' '}
                ₸
              </div>
              <div className='btn' onClick={addToBasketHandler}>
                {DetailTexts[currentLanguage].addToBasket}
              </div>
            </div>
          </div>
          <div className='mid__container'>
            <div className='description__container'>
              <div className='description__title'>
                {DetailTexts[currentLanguage].desc}
              </div>
              <div className='description'>
                {currentItem.description[currentLanguage]}
              </div>
            </div>
            <div className='delivery'>
              <div className='description__title'>
                {DetailTexts[currentLanguage].deliveryTitle}
              </div>
              <div className='description'>
                {DetailTexts[currentLanguage].delivery}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
