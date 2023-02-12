import React from 'react';
import logo from '../../assets/images/logo.png';

export const NotFound = () => {
    return (
        <div className='error_404'>
            <div className='logo__img'>
                <img src={logo} alt='' />
            </div>
            <div className='error__line__first'>
                Ошибка 404: Страница не найдена
            </div>
            <div className='error__line'>
                Извините, страницу которую вы ищите, тут нет
            </div>
            <div className='error__line__last'>
                Пожалуйста откройте любую страницу из главного меню
            </div>
        </div>
    );
};
