import React, { useEffect, useState } from 'react';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import { Filter } from '../../components/Filter/Filter';
import { addItemToBasket } from '../../actions/basketActions';

import { useDispatch, useSelector } from 'react-redux';
import { ItemsTexts } from '../../localizations/ItemsTexts';

export const Items = () => {
  useEffect(() => {
    document.title = 'Каталог';
  }, []);
  const currentLanguage = useSelector((state) => state.global.currentLanguage);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const items = useSelector((state) => state.items.items);
  useEffect(() => {
    if (items.length > 0) {
      setIsLoading(false);
    }
  }, [items]);
  return (
    <div className='wrapper'>
      <div className='items__title'>{ItemsTexts[currentLanguage].title}</div>
      <div className='items'>
        <Filter />
        <div className='items__container'>
          {items.length > 0 ? (
            items.map((item, index) => (
              <ItemCard item={item} key={`catalog${item._id}`} />
            ))
          ) : (
            <div className='items__empty'>
              {ItemsTexts[currentLanguage].notFound}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
