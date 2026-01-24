import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import NotFound from './page/NotFound.jsx'
import Snaptik from './page/Snaptik.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loading from './page/Loading.jsx'
const App = React.lazy(() => import('./App.jsx'))
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <NotFound /> },
  // { path: "/tiktokdownloader", element: <Snaptik /> },
]);

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading />}>
    <RouterProvider router={router} />
  </Suspense>
)
