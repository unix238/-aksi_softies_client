import React from 'react';
import cl from './ItemCard.module.css';
import image from '../../assets/images/item.jpeg';
import { Cart } from '../Icons/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToBasket } from '../../actions/basketActions';
import { Link } from 'react-router-dom';

export const ItemCard = ({ item }) => {
    const price = item.price[0];
    const currentLanguage = useSelector(
        (state) => state.global.currentLanguage
    );
    const dispatch = useDispatch();
    return (
        <div className={cl.item}>
            <Link
                className='item__link'
                to={`/detail/${item._id}`}
                key={item._id}
            >
                <div className={cl.image}>
                    {/* <img src={image} alt='' /> */}
                    <img src={item.images[0]} alt='' />
                </div>
            </Link>
            <div className={cl.title}>{item.title[currentLanguage]}</div>
            <div className={cl.line}>
                <div className={cl.price}>
                    {price.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                    })}{' '}
                    ₸
                </div>
                <div
                    className={cl.icon}
                    onClick={() => {
                        dispatch(addItemToBasket(item, -1, -1));
                    }}
                >
                    <Cart />
                </div>
            </div>
        </div>
    );
};
