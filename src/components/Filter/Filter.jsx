import React, { useState, useEffect } from 'react';
import { Select } from '../Select/Select';
import { SortsAndFilters } from '../../localizations/SortsAndFilters';
import cl from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
    const currentLanguage = useSelector(
        (state) => state.global.currentLanguage
    );
    const setFilter = (filter) => {
        console.log(filter);
    };

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
