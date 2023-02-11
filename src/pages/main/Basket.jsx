import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BasketItemCard } from '../../components/BasketItemCard/BasketItemCard';

export const Basket = () => {
    const basketItems = JSON.parse(
        useSelector((state) => state.basket?.basketItems)
    );

    return (
        <div className='basket'>
            <div className='wrapper'>
                <div className='basket__items'>
                    {basketItems.map((item) => (
                        <BasketItemCard
                            key={`basket${item.item.item._id}`}
                            id={item.item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
