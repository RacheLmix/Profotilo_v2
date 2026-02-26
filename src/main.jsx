import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import NotFound from './page/NotFound.jsx'
import Snaptik from './page/Snaptik.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loading from './page/Loading.jsx'


const App = React.lazy(() =>
  Promise.all([
    import('./App.jsx'),
    new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', resolve, { once: true });
      }
    }),
    new Promise(resolve => setTimeout(resolve, 2500))
  ]).then(([module]) => module)
);
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <NotFound /> },
  // { path: "/tiktokdownloader", element: <Snaptik /> },
  // { path: "/detail/:id", element: <ProjectDetails /> }
]);

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading />}>
    <RouterProvider router={router} />
  </Suspense>
)
