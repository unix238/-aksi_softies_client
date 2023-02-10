import React from 'react';
import { Select } from '../../components/Select/Select';

export const Detail = () => {
    return (
        <div>
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
                            Disney’s Winnie The Pooh Eeyore Plush Rocker
                        </div>
                        <div className='composition'>
                            Who wants a traditional rocking horse when you can
                            have Eeyore instead? Standing at a proud 60cm tall,
                            he's sure to make a super cute (and super soft)
                            addition to any nursery! With his sweet appearance
                            and simple-to-use design, Eeyore is sure to keep the
                            little ones entertained for hours on end. Complete
                            with safety handles to hold on to while they play,
                            this rocker may just become their new best friend.
                            Sorry, Piglet!
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
                        <div className='price'>19 900</div>
                        <div className='btn'>Добавить в корзину</div>
                    </div>
                </div>
                <div className='mid__container'>
                    <div className='description__title'>Описание</div>
                    <div className='description'>
                        Who wants a traditional rocking horse when you can have
                        Eeyore instead? Standing at a proud 60cm tall, he's sure
                        to make a super cute (and super soft) addition to any
                        nursery! With his sweet appearance and simple-to-use
                        design, Eeyore is sure to keep the little ones
                        entertained for hours on end. Complete with safety
                        handles to hold on to while they play, this rocker may
                        just become their new best friend. Sorry, Piglet!
                    </div>
                </div>
            </div>
        </div>
    );
};
