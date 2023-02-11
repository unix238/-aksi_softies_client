import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from './NavBar/NavBar';

import { fetchItems } from '../actions/itemsActions';
import { LOAD_CURRENT_LANGUAGE } from '../actions/globalActions';
import { Footer } from './Footer/Footer';

export const PageWrapper = ({ Page }) => {
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);
    useEffect(() => {
        dispatch({ type: LOAD_CURRENT_LANGUAGE });
        dispatch(fetchItems(setItems));
    }, []);
    return (
        <div>
            <NavBar />
            {<Page items={items} />}
            <Footer />
        </div>
    );
};
