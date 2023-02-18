import React, { useState } from 'react';
import cl from './Modal.module.css';
import { sendOrder } from '../../actions/basketActions';
import { useSelector } from 'react-redux';

export const Modal = ({ setIsModalActive }) => {
  const items = useSelector((state) => state.basket.basketItems).map((item) => {
    return {
      id: item.item.item._id,
      size: item.item.size,
      quantity: item.quantity,
    };
  });
  const payHandler = () => {
    const data = {
      name,
      email,
      phone,
      social,
      city,
      street,
      zip,
      message,
    };
    console.log(data);
    let isValid = true;

    Object.keys(data).forEach((key) => {
      if (!data[key]) {
        isValid = false;
      }
    });

    if (!isValid) {
      alert('Заполните все поля');
      return;
    }

    sendOrder({ userData: data, items });
    alert('Заказ отправлен');
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [social, setSocial] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zip, setZip] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={cl.modal}>
      <div className={cl.form}>
        <div className={cl.top__menu}>
          <div className={cl.title}>Заполните форму</div>
          <div
            className={cl.x}
            onClick={() => {
              setIsModalActive(false);
            }}
          >
            x
          </div>
        </div>
        <div className={cl.input}>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type='text'
            placeholder='ФИО'
          />
        </div>
        <div className={cl.input}>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type='email'
            placeholder='Электронная почта'
          />
        </div>
        <div className={cl.input}>
          <input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type='phone'
            placeholder='Номер телефона'
          />
        </div>
        <div className={cl.input}>
          <input
            value={social}
            onChange={(e) => {
              setSocial(e.target.value);
            }}
            type='text'
            placeholder='Инстаграм, телеграм, ватсап'
          />
        </div>
        <div className={cl.input}>
          <input
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type='text'
            placeholder='Город'
          />
        </div>
        <div className={cl.input}>
          <input
            value={street}
            onChange={(e) => {
              setStreet(e.target.value);
            }}
            type='text'
            placeholder='Улица, номер дома и квартиры'
          />
        </div>
        <div className={cl.input}>
          <input
            value={zip}
            onChange={(e) => {
              setZip(e.target.value);
            }}
            type='text'
            placeholder='ZIP'
          />
        </div>
        <div className={cl.input}>
          <textarea
            name='message'
            placeholder='Коментарий'
            id=''
            cols='30'
            rows='10'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
        <div className='btn' onClick={payHandler}>
          Оплатить
        </div>
      </div>
    </div>
  );
};
