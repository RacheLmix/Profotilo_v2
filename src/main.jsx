import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import NotFound from './page/NotFound.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loading from './page/Loading.jsx'
import Login from './page/Auth/Login.jsx'
import Dashboard from './page/Dashboard/Dashboard.jsx'
import AdminRoute from './middleware/AdminRoute.jsx'
import AdminLayout from './page/Dashboard/AdminLayout.jsx'
import Product from './page/Dashboard/product/Product.jsx'

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
  { path: "/*", element: <NotFound /> },
  { path: "/admin/login", element: <Login /> },
  {path:"/admin",element:(
    <AdminRoute>
      <AdminLayout />
    </AdminRoute>
  ),
  children : [
    {
      path: "dashboard",
      element: <Dashboard />
    },
    {
      path: "projects",
      element: <Product />
    }
  ]
}
]);

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading />}>
    <RouterProvider router={router} />
  </Suspense>
)
