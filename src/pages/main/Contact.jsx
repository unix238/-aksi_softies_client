import React, { useEffect } from 'react';
import { ContactTexts } from '../../localizations/ContactTexts';
import { useSelector } from 'react-redux';

export const Contact = () => {
  const currentLanguage = useSelector((state) => state.global.currentLanguage);

  useEffect(() => {
    document.title = ContactTexts[currentLanguage].title;
  }, []);

  return (
    <div className='contact__page'>
      <div className='contact__title'>
        {ContactTexts[currentLanguage].title}
      </div>
      <div className='contact__subtitle'>
        {ContactTexts[currentLanguage].subtitle}
        <a href='https://www.instagram.com/aksi_softies/'> @Aksi_softies</a>
      </div>
      <div className='contact__tg'>
        {ContactTexts[currentLanguage].tg}
        <a href='https://t.me/aksikuschanel'>https://t.me/aksikuschanel</a>
      </div>
      <div className='contact__inst'>
        {ContactTexts[currentLanguage].inst}
        <a href='https://www.instagram.com/aksi_softies/'>@Aksi_softies</a>
      </div>
      <div className='contact__email'>
        {ContactTexts[currentLanguage].email} *позже скоро создам, пока оставь
        свободное место *
      </div>
    </div>
  );
};
