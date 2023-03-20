import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { router } from './AppRoutes';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
   {/* <BrowserRouter>
    <Routes>
      <Route path='*' element={<App/>} />
    </Routes>
    </BrowserRouter> */}
    <RouterProvider router={router} />
    
  
  </React.Fragment>
);


reportWebVitals();
