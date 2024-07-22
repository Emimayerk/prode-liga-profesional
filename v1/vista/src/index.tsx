import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Footer, Header } from './components';
import { Home, Rules } from './pages';

import './styles/index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home name="home" />,
  },
  {
    path: '/rules',
    element: <Rules name="rules" />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Header title="Prode" />

      <RouterProvider router={router} />

      <Footer />
    </>
  </React.StrictMode>,
);
