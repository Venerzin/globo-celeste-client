import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Ficha from './pages/Ficha';
import Login from './pages/Login';
import Register from './pages/Register';
import Fichas from './pages/Fichas';

import reportWebVitals from './reportWebVitals';

import {loader, loader as rootLoader} from "./utils/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user/:id",
    element: <Fichas />,
    loader: rootLoader,
  },
  {
    path: "/ficha/:id",
    element: <Ficha />,
    loader: rootLoader
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
