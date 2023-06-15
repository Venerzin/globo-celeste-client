import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Ficha from './pages/Ficha';
import Login from './pages/Login';
import Register from './pages/Register';
import Fichas from './pages/Fichas';

import reportWebVitals from './reportWebVitals';

import { loader as rootLoader } from "./utils/loader";
import Classes from './pages/Classes';
import { adminLoader } from './utils/adminLoader';
import { Page } from './templates/autheticated/page';

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
    element: <Page>
      <Fichas />
    </Page>,
    loader: rootLoader,
  },
  {
    path: "/ficha/:id",
    element: <Page>
      <Ficha />
    </Page>,
    loader: rootLoader
  },
  {
    path: "/admin/classes",
    element: <Page>
      <Classes />
    </Page>,
    loader: adminLoader
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
