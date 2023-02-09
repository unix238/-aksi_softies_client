import React from 'react';
import { BasketItemCard } from '../../components/BasketItemCard/BasketItemCard';

export const Basket = () => {
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
