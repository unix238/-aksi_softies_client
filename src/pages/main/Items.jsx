import React from 'react';
import { ItemCard } from '../../components/ItemCard/ItemCard';

export const Items = () => {
  return (
    <div className='wrapper'>
      <div className='items__title'>Каталог</div>
      <div className='items'>
        <div className='items__subTitle'>Игрушки</div>
        <div className='items__container'>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
};
