import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NotFound from './page/NotFound.jsx'
import Snaptik from './page/Snaptik.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "*", element: <NotFound />},
  {path: "/tiktokdownloader", element: <Snaptik />},
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    
  </RouterProvider>,
)
