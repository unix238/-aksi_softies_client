import React, { useState } from 'react';
import cl from './Select.module.css';

export const Select = ({ option, onChange }) => {
  const [currentOption, setCurrentOption] = useState(option.options[0].title);

  const filters = {
    sort: ['popularity', 'price-desc', 'price-asc', 'new'],
    size: ['5-10', '10-15', '15-20', '20-25', '25-30'],
    price: [
      '0-5000',
      '5000-10000',
      '10000-15000',
      '20000-25000',
      '25000-30000',
    ],
    material: [
      '63e92cca9dc24cb8dde6ca3b',
      '63e92cdb9dc24cb8dde6ca3d',
      '63e92cfc9dc24cb8dde6ca3f',
    ],
    category: ['all', 'toys', 'schemes'],
  };

  const handleChange = (e) => {
    setCurrentOption(e.target.value);
    for (let filter in filters) {
      if (filters[filter].includes(e.target.value)) {
        option.onClick({ [filter]: e.target.value });
      }
    }
  };

  return (
    <select
      className={cl.select}
      value={currentOption}
      onChange={onChange ? onChange : handleChange}
    >
      {option.options.map((opt) => (
        <option
          className={cl.option}
          value={opt.value}
          key={`${opt.value}filters`}
        >
          {opt.text}
        </option>
      ))}
    </select>
  );
};
