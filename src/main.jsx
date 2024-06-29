import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import CadUser from './pages/CadUser/CadUser.jsx';
import CadEmpresa from './pages/CadEmpresa/CadEmpresa.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import CadLoja from './pages/CadLoja/CadLoja.jsx';
import CadAuditor from './pages/CadAuditor/CadAuditor.jsx';
import CadCausa from './pages/CadCausa/CadCausa.jsx';
import CadTipoDocReg from './pages/CadTipoDocReg/CadTipoDocReg.jsx';
import CadCausaPerda from './pages/CadCausaPerda/CadCausaPerda.jsx';
import Signin from './pages/Signin/Signin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home/>, },
      { path: "/CadUser", element: <CadUser/>, },
      { path: "/CadEmpresa", element: <CadEmpresa/>, },
      { path: "/CadLoja", element: <CadLoja/>,},
      { path: "/CadAuditor", element: <CadAuditor/>, },
      { path: "/CadCausa", element: <CadCausa/> },
      { path: "/TipoDocReg", element: <CadTipoDocReg/>, },
      { path: "/CausaPerda", element: <CadCausaPerda/>, },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
