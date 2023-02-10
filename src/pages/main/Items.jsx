import React from 'react';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import { Filter } from '../../components/Filter/Filter';
import { addItemToBasket } from '../../actions/basketActions';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const Items = () => {
    const dispatch = useDispatch();
    const items = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
    ];
    return (
        <div className='wrapper'>
            <div className='items__title'>Игрушки</div>
            <div className='items'>
                <Filter />
                <div className='items__container'>
                    {items.map((item, index) => (
                        <Link
                            className='item__link'
                            to={`/detail/${index}`}
                            key={index}
                        >
                            <ItemCard />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
