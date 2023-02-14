import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HowToOrderTexts } from '../../localizations/HowToOrder';

export const HowToOrder = () => {
  useEffect(() => {
    document.title = 'Как заказать';
  }, []);
  const currentLanguage = useSelector((state) => state.global.currentLanguage);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = HowToOrderTexts[currentLanguage].slides;

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
          {slides.map((i, index) => (
            <>
              <div
                key={`sada${index}vector`}
                className={
                  currentSlide === index ? 'active__vector' : 'vector__item'
                }
              ></div>
              <div className='vector__dash'></div>
            </>
          ))}
        </div>
        <div className='how__to__order'>
          <div className='slide'>
            <div className='slide__control' onClick={prevSlide}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
                <path
                  d='M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z'
                  data-name='4-Arrow Left'
                />
              </svg>
            </div>
            <div className='slide__info'>
              <div className='slide__title'>{slides[currentSlide].title}</div>
              <div className='slides__subtitle'>
                {slides[currentSlide].description}
              </div>
            </div>
            <div className='slide__control' onClick={nextSlide}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
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
