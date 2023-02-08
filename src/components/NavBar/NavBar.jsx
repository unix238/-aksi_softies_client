import React, { useEffect, useState } from 'react';
import cl from './NavBar.module.css';
import { NavBarTexts } from '../../localizations/NavBarTexts';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../assets/images/logo.png';
import { setCurrentLanguage } from '../../actions/globalActions';
import { Link } from 'react-router-dom';
import { Cart } from '../Icons/Cart';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentLink, setCurrentLink] = useState('/');

  const changeLanguage = (language) => {
    dispatch(setCurrentLanguage(language));
  };

  useEffect(() => {
    console.log(window.location.pathname);
    const currentLocation = window.location.pathname;
    setCurrentLink(currentLocation);
  }, [window.location.pathname]);

  const currentLanguage = useSelector((state) => state.global.currentLanguage);
  return (
    <nav className={'wrapper'}>
      <div className={cl.line}>
        <div className={cl.search__container}>
          <input
            type='text'
            className={cl.search}
            placeholder={NavBarTexts[currentLanguage].searchText}
          />
        </div>
        <div
          className={cl.logo}
          onClick={() => {
            return navigate('/');
          }}
        >
          <img className={cl.img} src={Logo} alt='' />
        </div>
        <div className={cl.right__container}>
          <div className={cl.language__picker}>
            <div
              className={
                currentLanguage === 0 ? cl.languageActive : cl.language
              }
              onClick={() => {
                changeLanguage(0);
              }}
            >
              KZ
            </div>
            <div className='language__divider'>|</div>
            <div
              className={
                currentLanguage === 1 ? cl.languageActive : cl.language
              }
              onClick={() => {
                changeLanguage(1);
              }}
            >
              RU
            </div>
            <div className='language__divider'>|</div>
            <div
              className={
                currentLanguage === 2 ? cl.languageActive : cl.language
              }
              onClick={() => {
                changeLanguage(2);
              }}
            >
              EN
            </div>
          </div>
          <div
            className={cl.basket}
            onClick={() => {
              return navigate('/cart');
            }}
          >
            <Cart />
          </div>
        </div>
      </div>
      <div className={cl.line}>
        <div className={cl.link__container}>
          <Link
            to={'/'}
            className={
              currentLink === '/' || currentLink === '/cart'
                ? cl.activeLink
                : cl.link
            }
          >
            {NavBarTexts[currentLanguage].links[0]}
          </Link>
          <Link
            to={'/catalog'}
            className={currentLink === '/catalog' ? cl.activeLink : cl.link}
          >
            {NavBarTexts[currentLanguage].links[1]}
          </Link>
          <Link
            to={'/how-to-order'}
            className={
              currentLink === '/how-to-order' ? cl.activeLink : cl.link
            }
          >
            {NavBarTexts[currentLanguage].links[2]}
          </Link>
          <Link
            to={'/about'}
            className={currentLink === '/about' ? cl.activeLink : cl.link}
          >
            {NavBarTexts[currentLanguage].links[3]}
          </Link>
          <Link
            to={'/blog'}
            className={currentLink === '/blog' ? cl.activeLink : cl.link}
          >
            {NavBarTexts[currentLanguage].links[4]}
          </Link>
          <Link
            to={'/contacts'}
            className={currentLink === '/contacts' ? cl.activeLink : cl.link}
          >
            {NavBarTexts[currentLanguage].links[5]}
          </Link>
          <Link
            to={'/support'}
            className={currentLink === '/support' ? cl.activeLink : cl.link}
          >
            {NavBarTexts[currentLanguage].links[6]}
          </Link>
        </div>
      </div>
    </nav>
  );
};
