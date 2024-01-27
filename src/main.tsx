import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  AboutPage,
  ContactPage,
  HomePage,
  RatesPage,
  Root
} from 'routes';

import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{
      path: "/",
      element: <HomePage />
    }, {
      path: "/about",
      element: <AboutPage />
    }, {
      path: "/contact",
      element: <ContactPage />
    }, {
      path: "/rates",
      element: <RatesPage />
    }]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
