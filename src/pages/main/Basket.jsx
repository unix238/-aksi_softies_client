import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BasketItemCard } from '../../components/BasketItemCard/BasketItemCard';

export const Basket = () => {
    const basketItems = useSelector((state) => state.basket?.basketItems);
    // const basketItems = JSON.parse(items);

    // console.log(items);

    return (
        <div className='basket'>
            <div className='wrapper'>
                {basketItems.length > 0 ? (
                    <div className='basket__items'>
                        {basketItems.map((item) => (
                            <BasketItemCard
                                key={`basket${item.item.item._id}`}
                                id={item.item}
                            />
                        ))}
                    </div>
                ) : (
                    <div className='basket__empty'>Ваша корзина пуста :(</div>
                )}
            </div>
        </div>
    );
};
