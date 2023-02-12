import React, { useEffect, useState } from 'react';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import { Filter } from '../../components/Filter/Filter';
import { addItemToBasket } from '../../actions/basketActions';

import { useDispatch, useSelector } from 'react-redux';

export const Items = () => {
    useEffect(() => {
        document.title = 'Каталог';
    }, []);
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
            <div className='items__title'>Игрушки</div>
            <div className='items'>
                <Filter />
                <div className='items__container'>
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <ItemCard item={item} key={`catalog${item._id}`} />
                        ))
                    ) : (
                        <div className='items__empty'>
                            Нет товаров по заданным параметрам
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
