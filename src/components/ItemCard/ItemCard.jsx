import React from 'react';
import cl from './ItemCard.module.css';
import image from '../../assets/images/item.jpeg';
import { Cart } from '../Icons/Cart';

export const ItemCard = () => {
    const price = 15000;
    return (
        <div className={cl.item}>
            <div className={cl.image}>
                <img src={image} alt='' />
            </div>
            <div className={cl.title}>Игрушка</div>
            <div className={cl.line}>
                <div className={cl.price}>
                    {price.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                    })}{' '}
                    ₸
                </div>
                <div className={cl.icon}>
                    <Cart />
                </div>
            </div>
        </div>
    );
};
