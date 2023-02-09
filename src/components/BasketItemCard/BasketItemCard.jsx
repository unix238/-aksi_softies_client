import React from 'react';
import cl from './BasketItemCard.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../../actions/itemsActions';

export const BasketItemCard = ({ card }) => {
    return (
        <>
            <div className={cl.item}>
                <div className={cl.left}>
                    <div className={cl.image}>
                        <img src='https://m.media-amazon.com/images/I/51cGCBxqrRL._SL1000_.jpg' />
                    </div>
                    <div className={cl.texts}>
                        <div className={cl.title}>
                            Игрушка <span className={cl.bold}>Медведь</span>
                        </div>
                        <div className={cl.size}>Размер: 48</div>
                    </div>
                </div>
                <div className={cl.mid}>
                    <div className={cl.quantity}>
                        <span className={cl.bold}>1шт.</span>
                    </div>
                </div>
                <div className={cl.price}>
                    <div className={cl.price__text}>
                        <span className={cl.bold}>19.900</span>
                    </div>
                    <div className={cl.button}>Удалить</div>
                </div>
            </div>

            <div className={cl.line}></div>
        </>
    );
};
