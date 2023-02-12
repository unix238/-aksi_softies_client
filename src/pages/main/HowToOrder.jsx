import React, { useState, useEffect } from 'react';

export const HowToOrder = () => {
    useEffect(() => {
        document.title = 'Как заказать';
    }, []);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: 'Шаг 1',
            description:
                'Перейти в каталог и выбрать интересующий вас товар. Выбрать размер одежды или постера/модель телефона/вид коллекции',
        },
        {
            title: 'Шаг 2',
            description: 'Нажать кнопку «Добавить в корзину» ',
        },
        {
            title: 'Шаг 3',
            description:
                'Заполнить все контактные данные во всплывающем окне. Если вы хотите связаться с менеджером, то поставьте галочку в поле «хочу подтвердить заказ по телефону» ',
        },
        {
            title: 'Шаг 4',
            description: 'Нажать на кнопку «оформить заказ»',
        },
        {
            title: 'Шаг 5',
            description:
                'Перейти на страницу оплаты, ввести контактные данные и совершить оплату ',
        },
    ];

    const nextSlide = () => {
        if (currentSlide === slides.length - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(slides.length - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <div className='wrapper'>
            <div className='page__center'>
                <div className='vector'>
                    {slides.map((i, _i) => (
                        <>
                            <div
                                key={`${_i}vector`}
                                className={
                                    currentSlide === _i
                                        ? 'active__vector'
                                        : 'vector__item'
                                }
                            ></div>
                            <div className='vector__dash'></div>
                        </>
                    ))}
                </div>
                <div className='how__to__order'>
                    <div className='slide'>
                        <div className='slide__control' onClick={prevSlide}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 32 32'
                            >
                                <path
                                    d='M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z'
                                    data-name='4-Arrow Left'
                                />
                            </svg>
                        </div>
                        <div className='slide__info'>
                            <div className='slide__title'>
                                {slides[currentSlide].title}
                            </div>
                            <div className='slides__subtitle'>
                                {slides[currentSlide].description}
                            </div>
                        </div>
                        <div className='slide__control' onClick={nextSlide}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 32 32'
                            >
                                <path
                                    d='m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z'
                                    data-name='3-Arrow Right'
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
