import React, { useState } from 'react';
import cl from './Select.module.css';

export const Select = ({ option }) => {
    const [currentOption, setCurrentOption] = useState(option.options[0]);

    const handleChange = (e) => {
        setCurrentOption(e.target.value);
        option.onClick(e.target.value);
    };

    return (
        <select
            className={cl.select}
            value={currentOption}
            onChange={handleChange}
        >
            {option.options.map((opt) => (
                <option value={opt} key={`${opt}filters`}>
                    {opt}
                </option>
            ))}
        </select>
    );
};
