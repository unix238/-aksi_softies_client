import React, { useEffect, useState } from 'react';
import cl from './BasketItemCard.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { fetchItems, getItemById } from '../../actions/itemsActions';
import { removeItemFromBasket } from '../../actions/basketActions';

export const BasketItemCard = ({ id }) => {
    const currentLanguage = useSelector(
        (state) => state.global.currentLanguage
    );
    const [currentItem, setCurrentItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getItemById(id.item._id, setCurrentItem, setIsLoading);
    }, []);

    const dispatch = useDispatch();
    const removeItemFromBasketHandler = () => {
        dispatch(removeItemFromBasket(id.item._id));
        console.log('pressed');
    };

    return isLoading ? (
        <></>
    ) : (
        <>
            <div className={cl.item}>
                <div className={cl.left}>
                    <div className={cl.image}>
                        <img src={currentItem.images[0]} />
                    </div>
                    <div className={cl.texts}>
                        <div className={cl.title}>
                            Игрушка{' '}
                            <span className={cl.bold}>
                                {currentItem.title[currentLanguage]}
                            </span>
                        </div>
                        <div className={cl.size}>Размер: {id.size}</div>
                    </div>
                </div>
                <div className={cl.mid}>
                    <div className={cl.quantity}>
                        <span className={cl.bold}>{id.quantity}шт.</span>
                    </div>
                </div>
                <div className={cl.price}>
                    <div className={cl.price__text}>
                        <span className={cl.bold}>
                            {currentItem.price[0].toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                            })}{' '}
                            ₸
                        </span>
                    </div>
                    <div
                        className={cl.button}
                        onClick={removeItemFromBasketHandler}
                    >
                        Удалить
                    </div>
                </div>
            </div>

            <div className={cl.line}></div>
        </>
    );
};
