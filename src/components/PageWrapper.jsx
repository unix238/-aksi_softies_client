import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from './NavBar/NavBar';

import { fetchItems } from '../actions/itemsActions';
import { LOAD_CURRENT_LANGUAGE } from '../actions/globalActions';
import { Footer } from './Footer/Footer';

export const PageWrapper = ({ Page }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchItems());
        dispatch({ type: LOAD_CURRENT_LANGUAGE });
    }, []);
    return (
        <div>
            <NavBar />
            {<Page />}
            <Footer />
        </div>
    );
};
