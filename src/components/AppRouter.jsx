import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import { PageWrapper } from './PageWrapper';

import { Items } from '../pages/main/Items';
import { Basket } from '../pages/main/Basket';
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
        element: <PageWrapper Page={Basket} />,
    },
    {
        path: '*',
        // element: <Navigate to='/' />,
        element: <PageWrapper Page={NotFound} />,
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={Routes} />;
};
