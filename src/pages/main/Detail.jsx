import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Select } from '../../components/Select/Select';
import { getItemById } from '../../actions/itemsActions';

export const Detail = () => {
    const currentLanguage = useSelector(
        (state) => state.global.currentLanguage
    );
    const [currentItem, setCurrentItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const location = window.location.pathname.split('/')[2];
    useEffect(() => {
        getItemById(location, setCurrentItem, setIsLoading);
    }, []);
    useEffect(() => {
        document.title = currentItem.title[currentLanguage];
    }, [currentItem]);

    return (
        <div>
            {isLoading ? (
                <></>
            ) : (
                <div className='wrapper'>
                    <div className='top__container'>
                        <div className='images'>
                            <div className='main__images'>
                                <div className='main__image'>
                                    <img
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcScPfuAh-KHB_mGH6J84UN_qA6BJEo9mRUgxXSFxVHK1IAiYW445VEfco0s1jshCT7ww&usqp=CAU'
                                        alt=''
                                    />
                                </div>

                                <div className='main__image'>
                                    <img
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcScPfuAh-KHB_mGH6J84UN_qA6BJEo9mRUgxXSFxVHK1IAiYW445VEfco0s1jshCT7ww&usqp=CAU'
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div className='bottom__images'>
                                <div className='bottom__image'>
                                    <img
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcScPfuAh-KHB_mGH6J84UN_qA6BJEo9mRUgxXSFxVHK1IAiYW445VEfco0s1jshCT7ww&usqp=CAU'
                                        alt=''
                                    />
                                </div>

                                <div className='bottom__image'>
                                    <img
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcScPfuAh-KHB_mGH6J84UN_qA6BJEo9mRUgxXSFxVHK1IAiYW445VEfco0s1jshCT7ww&usqp=CAU'
                                        alt=''
                                    />
                                </div>

                                <div className='bottom__image'>
                                    <img
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcScPfuAh-KHB_mGH6J84UN_qA6BJEo9mRUgxXSFxVHK1IAiYW445VEfco0s1jshCT7ww&usqp=CAU'
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='top__texts'>
                            <div className='top__title'>
                                {currentItem.title[currentLanguage]}
                            </div>
                            <div className='composition'>
                                {currentItem.context[currentLanguage]}
                            </div>
                            <Select
                                option={{
                                    title: 'title1',
                                    options: [
                                        {
                                            text: '1',
                                            value: '1',
                                            title: 'title1',
                                        },
                                        {
                                            text: '2',
                                            value: '2',
                                            title: 'title2',
                                        },
                                    ],
                                }}
                            ></Select>
                            <div className='price'>
                                {currentItem.price[0].toLocaleString(
                                    undefined,
                                    {
                                        maximumFractionDigits: 2,
                                    }
                                )}{' '}
                                ₸
                            </div>
                            <div className='btn'>Добавить в корзину</div>
                        </div>
                    </div>
                    <div className='mid__container'>
                        <div className='description__title'>Описание</div>
                        <div className='description'>
                            {currentItem.description[currentLanguage]}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
