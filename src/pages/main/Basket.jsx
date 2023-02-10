import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BasketItemCard } from '../../components/BasketItemCard/BasketItemCard';

export const Basket = () => {
    const basketItems = useSelector((state) => state.basket?.basketItems);
    useEffect(() => {
        console.log(basketItems);
    }, [basketItems]);
    return (
        <div className='basket'>
            <div className='wrapper'>
                <div className='basket__items'>
                    <BasketItemCard />
                </div>
            </div>
        </div>
    );
};
