import React from 'react';
import { ItemCard } from '../../components/ItemCard/ItemCard';

export const Index = () => {
    return (
        <>
            <div className='header'>
                <div className='header_title'>BORN IN(FOR) KAZAKHSTAN</div>
            </div>
            <div className='wrapper'>
                <div className='new__title'>Новые товары</div>
                <div className='new__items'>
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
                <div className='recommendation'>
                    <div className='recommendation__title'>
                        Рекомендуем посмотреть
                    </div>
                </div>
            </div>
        </>
    );
};
