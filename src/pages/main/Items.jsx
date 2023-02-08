import React from 'react';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import { Filter } from '../../components/Filter/Filter';

export const Items = () => {
    return (
        <div className='wrapper'>
            <div className='items__title'>Игрушки</div>
            <div className='items'>
                <Filter />
                <div className='items__container'>
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
            </div>
        </div>
    );
};
