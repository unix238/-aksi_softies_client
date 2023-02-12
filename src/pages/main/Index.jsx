import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ItemCard } from '../../components/ItemCard/ItemCard';

export const Index = () => {
    useEffect(() => {
        document.title = 'Главная';
    }, []);
    const items = useSelector((state) => state.items.items);
    return (
        <>
            <div className='header'>
                <div className='header_title'>BORN IN(FOR) KAZAKHSTAN</div>
            </div>
            <div className='wrapper'>
                <div className='new__title'>Новые товары</div>
                <div className='new__items'>
                    {items.map((item, index) =>
                        index < 4 ? (
                            <ItemCard item={item} key={item._id} />
                        ) : null
                    )}
                    {/* <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard /> */}
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
