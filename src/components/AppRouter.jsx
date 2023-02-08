import React, { useEffect, useState } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import axios from 'axios';

import { setUser } from '../actions/authActions';
import { Login } from '../pages/auth/Login';
import { PageWrapper } from './PageWrapper';
import config from '../config/config';

import { Items } from '../pages/main/Items';
import { HowToOrder } from '../pages/main/HowToOrder';
import { NotFound } from '../pages/error/NotFound';

const placeholder = () => {
    return <>placeholder</>;
};

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <PageWrapper Page={placeholder} />,
    },
    {
        path: '/catalog',
        element: <PageWrapper Page={Items} />,
    },
    {
        path: '/how-to-order',
        element: <PageWrapper Page={HowToOrder} />,
    },
    {
        path: '/about',
        element: <PageWrapper Page={placeholder} />,
    },
    {
        path: '/blog',
        element: <PageWrapper Page={placeholder} />,
    },
    {
        path: '/contacts',
        element: <PageWrapper Page={placeholder} />,
    },
    {
        path: '/support',
        element: <PageWrapper Page={placeholder} />,
    },
    {
        path: '/cart',
        element: <PageWrapper Page={placeholder} />,
    },
    {
        path: '*',
        // element: <Navigate to='/' />,
        element: <PageWrapper Page={NotFound} />,
    },
]);

const AuthRoutes = createBrowserRouter([
    {
        path: '/login',
        element: <PageWrapper Page={Login} />,
    },
    {
        path: '/logout',
        element: <>Logout</>,
    },
    {
        path: '*',
        element: <Navigate to='/login' />,
    },
]);

const LoaderRoute = createBrowserRouter([
    {
        path: '*',
        element: <>Checking Authorization</>,
        // element: <AuthenticatedRoutes />,
    },
]);

export const AppRouter = () => {
    const token = Cookies.get('token');
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const dispatch = useDispatch();

    const checkToken = async () => {
        try {
            const response = await axios.post(
                `${config.url}/auth/check`,
                {},
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }
            );

            console.log(response);
            dispatch(setUser(response.data));
            return true;
        } catch (error) {
            return !false;
        }
    };

    useEffect(() => {
        checkToken().then((res) => {
            setIsAuthenticated(res);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <RouterProvider router={LoaderRoute} />;
    }

    return <RouterProvider router={isAuthenticated ? Routes : AuthRoutes} />;
};
