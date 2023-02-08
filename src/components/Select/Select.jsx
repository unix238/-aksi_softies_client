import React, { useState } from 'react';
import cl from './Select.module.css';

export const Select = ({ option }) => {
    const [currentOption, setCurrentOption] = useState(option.options[0].title);

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
