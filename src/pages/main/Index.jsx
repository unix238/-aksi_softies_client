import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import { IndexTexts } from '../../localizations/IndexTexts';

export const Index = () => {
  useEffect(() => {
    document.title = 'Главная';
  }, []);
  const currentLanguage = useSelector((state) => state.global.currentLanguage);
  const items = useSelector((state) => state.items.items);
  return (
    <>
      <div className='header'>
        <div className='header_title'>BORN IN(FOR) KAZAKHSTAN</div>
      </div>
      <div className='wrapper'>
        <div className='new__title'>{IndexTexts[currentLanguage].title}</div>
        <div className='new__items'>
          {items.map((item, index) =>
            index < 4 ? <ItemCard item={item} key={item._id} /> : null
          )}
        </div>
        <div className='recommendation'>
          <div className='recommendation__title'>
            {IndexTexts[currentLanguage].recomend}
          </div>
          <div className='new__items'>
            {items.map((item, index) =>
              index > 4 && index < 9 ? (
                <ItemCard item={item} key={item._id} />
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
};
