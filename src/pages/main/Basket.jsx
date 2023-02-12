import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BasketItemCard } from '../../components/BasketItemCard/BasketItemCard';

export const Basket = () => {
    const basketItems = useSelector((state) => state.basket?.basketItems);
    let [total, setTotal] = useState(
        basketItems.reduce((acc, item) => {
            return (acc += Number(item.item.item.price[item.item.size]));
        }, 0)
    );

    // const basketItems = JSON.parse(items);

    // console.log(items);
    useEffect(() => {
        document.title = 'Корзина';
        console.log(basketItems);
    }, []);
    return (
        <div className='basket'>
            <div className='wrapper'>
                {basketItems.length > 0 ? (
                    <>
                        <div className='basket__items'>
                            {basketItems.map((item) => (
                                <BasketItemCard
                                    key={`basket${item.item.item._id}`}
                                    id={item.item}
                                />
                            ))}
                            <div className='basket__total'>
                                <div className='btn'>Купить</div>
                                <div className='total'>
                                    Итого:{' '}
                                    {total.toLocaleString(undefined, {
                                        maximumFractionDigits: 2,
                                    })}{' '}
                                    ₸
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='basket__empty'>Ваша корзина пуста :(</div>
                )}
            </div>
        </div>
    );
};
