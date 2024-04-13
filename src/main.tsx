import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import About from './pages/About.tsx'
import Cart from './pages/Cart.tsx'
import Products from './pages/Products.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><App /><Footer /></>,
  },
  {
    path: "/about",
    element: <><Navbar /><About /><Footer /></>,
  },
  {
    path: "/products",
    element: <><Navbar /><Products /><Footer /></>,
  },
  {
    path: "/cart",
    element: <><Navbar /><Cart /><Footer /></>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
