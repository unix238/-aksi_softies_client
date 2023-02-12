import React, { useEffect, useState } from 'react';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import { Filter } from '../../components/Filter/Filter';
import { addItemToBasket } from '../../actions/basketActions';

import { useDispatch } from 'react-redux';

export const Items = ({ items }) => {
    useEffect(() => {
        document.title = 'Каталог';
    }, []);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
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
                    {items.map((item, index) => (
                        <ItemCard item={item} key={`catalog${item._id}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};
