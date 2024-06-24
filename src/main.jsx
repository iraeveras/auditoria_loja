import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import CadUser from './pages/CadUSer/CadUser.jsx';
import './index.css';
import CadEmpresa from './pages/CadEmpresa/CadEmpresa.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import CadLoja from './pages/CadLoja/CadLoja.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/CadUser",
        element: <CadUser />,
      },
      {
        path: "/CadEmpresa",
        element: <CadEmpresa />
      },
      {
        path: "/CadLoja",
        element: <CadLoja />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
