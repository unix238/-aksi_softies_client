import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import { PageWrapper } from './PageWrapper';

import { Items } from '../pages/main/Items';
import { Basket } from '../pages/main/Basket';
import { HowToOrder } from '../pages/main/HowToOrder';
import { NotFound } from '../pages/error/NotFound';
import { Detail } from '../pages/main/Detail';
import { Index } from '../pages/main/Index';
import { Contact } from '../pages/main/Contact';
import { About } from '../pages/main/About';

const placeholder = () => {
    return <>placeholder</>;
};

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <PageWrapper Page={Index} />,
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
        element: <PageWrapper Page={About} />,
    },
    {
        path: '/contacts',
        element: <PageWrapper Page={Contact} />,
    },
    {
        path: '/cart',
        element: <PageWrapper Page={Basket} />,
    },
    {
        path: '/detail/:id',
        element: <PageWrapper Page={Detail} />,
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
