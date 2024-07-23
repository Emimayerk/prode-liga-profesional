import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Footer, Header } from './components';
import { ProdeProvider } from './context/prode';
import data from './data/matches.json';
import { Home, Rules } from './pages';
import { predictionBuilder } from './utils/predictionBuilder';

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

const { prode } = predictionBuilder({
  matches: data,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <ProdeProvider defaultProde={prode}>
        <Header title="Prode" />

        <RouterProvider router={router} />

        <Footer />
      </ProdeProvider>
    </>
  </React.StrictMode>,
);
