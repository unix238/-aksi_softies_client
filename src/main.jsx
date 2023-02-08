import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { AppRouter } from './components/AppRouter';
import { store } from './store/store';

import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <RouterProvider router={AppRouter()} /> */}
    <AppRouter />
  </Provider>
);
