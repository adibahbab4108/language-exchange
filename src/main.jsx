import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routers/router';

import { RouterProvider } from "react-router-dom";
import AuthProvider from './provider/AuthProvider';
import DataProvider from './provider/DataProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </DataProvider>
  </StrictMode>,
)
