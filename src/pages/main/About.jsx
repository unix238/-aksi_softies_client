import React, { useEffect } from 'react';
import { AboutTexts } from '../../localizations/AboutTexts';
import { useSelector } from 'react-redux';

export const About = () => {
  const currentLanguage = useSelector((state) => state.global.currentLanguage);
  useEffect(() => {
    document.title = 'Aksi_kus';
  }, []);
  return (
    <div>
      <div className='about__title'>Aksi_kus</div>
      {/* <div className='author__images'></div> */}
      <div className='wrapper'>
        <div className='about__text'>
          <div className='paragraph'>
            <span className='bold'>{AboutTexts[currentLanguage].hello}</span>
          </div>
          <div className='paragraph'>{AboutTexts[currentLanguage].first}</div>
          <div className='paragraph'>{AboutTexts[currentLanguage].second}</div>
          <div className='paragraph'>{AboutTexts[currentLanguage].third}</div>
          <div className='paragraph'>{AboutTexts[currentLanguage].fourth}</div>
          <div className='paragraph'>{AboutTexts[currentLanguage].fifth}</div>
          <div className='paragraph'>{AboutTexts[currentLanguage].sixth}</div>
          <div className='paragraph'>
            {AboutTexts[currentLanguage].seventh}
            <br /> {AboutTexts[currentLanguage].eighth}
            <br /> {AboutTexts[currentLanguage].ninth}
          </div>
        </div>
      </div>
    </div>
  );
};
