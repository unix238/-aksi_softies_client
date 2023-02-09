import React from 'react';
import cl from './Footer.module.css';

import callIcon from '../../assets/icons/call.svg';
import instIcon from '../../assets/icons/inst.svg';
import telegramIcon from '../../assets/icons/tg.svg';
import whatsAppIcon from '../../assets/icons/wa.svg';

import { FooterTexts } from '../../localizations/FooterTexts';
import { useSelector } from 'react-redux';

export const Footer = () => {
    const currentLanguage = useSelector(
        (state) => state.global.currentLanguage
    );
    return (
        <div className={cl.container}>
            <div className='wrapper'>
                <div className={cl.blocks__contaier}>
                    <div className={cl.block}>
                        <div className={cl.blockItems}>
                            <div className={cl.item}>
                                <div className={cl.title}>
                                    {FooterTexts[currentLanguage].titles[0]}
                                </div>
                                <div className={cl.texts}>
                                    {FooterTexts[currentLanguage].address.map(
                                        (option) => {
                                            return (
                                                <div
                                                    key={`${option}key for footer`}
                                                    className={[
                                                        cl.text,
                                                        cl.links,
                                                    ].join(' ')}
                                                >
                                                    {option}
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                            <div className={cl.item}>
                                <div className={cl.title}>
                                    {FooterTexts[currentLanguage].titles[1]}
                                </div>
                                <div className={cl.texts}>
                                    <div className={cl.text}>
                                        <img src={callIcon} />
                                        {
                                            FooterTexts[currentLanguage]
                                                .contact[0]
                                        }
                                    </div>
                                    <div className={cl.text}>
                                        <img src={whatsAppIcon} />
                                        {
                                            FooterTexts[currentLanguage]
                                                .contact[1]
                                        }
                                    </div>
                                    <div className={cl.text}>
                                        <img src={telegramIcon} />
                                        {
                                            FooterTexts[currentLanguage]
                                                .contact[2]
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={cl.item}>
                                <div className={cl.title}>
                                    {FooterTexts[currentLanguage].titles[2]}
                                </div>
                                <div className={cl.texts}>
                                    <div className={cl.text}>
                                        <img src={instIcon} />
                                        {FooterTexts[currentLanguage].follow[0]}
                                    </div>
                                    <div className={cl.text}>
                                        <img src={instIcon} />
                                        {FooterTexts[currentLanguage].follow[1]}
                                    </div>
                                </div>
                            </div>
                            <div className={cl.item}>
                                <div className={cl.title}>
                                    {FooterTexts[currentLanguage].titles[3]}
                                </div>
                                <div className={cl.texts}>
                                    {FooterTexts[currentLanguage].support.map(
                                        (option) => {
                                            return (
                                                <div
                                                    key={`${option}key for footer`}
                                                    className={[
                                                        cl.text,
                                                        cl.links,
                                                    ].join(' ')}
                                                >
                                                    {option}
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cl.button__container}>
                        <div className={cl.handmade}>Handmade</div>
                        <div className={cl.btn}>
                            {FooterTexts[currentLanguage].button}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
