import React, { useEffect } from 'react';

export const Contact = () => {
    useEffect(() => {
        document.title = 'Контакты';
    }, []);
    return (
        <div className='contact__page'>
            <div className='contact__title'>Контакты</div>
            <div className='contact__subtitle'>
                Для связи с автором Aksikus по предложению рекламы свяжитесь
                через инстаграм:{' '}
                <a href='https://www.instagram.com/aksi_softies/'>
                    {' '}
                    @Aksi_softies
                </a>
            </div>
            <div className='contact__tg'>
                Телеграм канал:
                <a href='https://t.me/aksikuschanel'>
                    https://t.me/aksikuschanel
                </a>
            </div>
            <div className='contact__inst'>
                Инстаграм:
                <a href='https://www.instagram.com/aksi_softies/'>
                    @Aksi_softies
                </a>
            </div>
            <div className='contact__email'>
                Почта: *позже скоро создам, пока оставь свободное место *
            </div>
        </div>
    );
};
