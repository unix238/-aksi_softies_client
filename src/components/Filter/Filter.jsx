import React, { useState, useEffect } from 'react';
import { Select } from '../Select/Select';
import { SortsAndFilters } from '../../localizations/SortsAndFilters';
import cl from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredItems } from '../../actions/itemsActions';

export const Filter = () => {
  const currentLanguage = useSelector((state) => state.global.currentLanguage);

  const dispatch = useDispatch();
  let [filters, setFilters] = useState({});

  const setFilter = (filter) => {
    setFilters((filters) => ({ ...filters, ...filter }));
  };

  useEffect(() => {
    console.log(filters);
    dispatch(fetchFilteredItems(filters));
  }, [filters]);

  const allOptions = SortsAndFilters[currentLanguage];
  const options = allOptions.map((option) => {
    return { ...option, onClick: setFilter };
  });

  return (
    <div className={cl.container}>
      {options.map((option) => (
        <Select key={`${option.title} in filter.jsx`} option={option} />
      ))}
    </div>
  );
};
