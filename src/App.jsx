import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Alltodos from './components/Alltodos/Alltodos'
import AlltodosPage from './pages/AlltodosPage'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Protectrouter from './pages/Protectrouter'
import PageNotFound from './components/error/PageNotFound'
import Detailspage from './pages/Detailspage'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Protectrouter><Layout /> </Protectrouter>,

      children: [
        { path: '/', element: <HomePage /> },
        { path: '/about', element: <About /> },
        { path: '/alltodos', element: <AlltodosPage /> },
        {path:'/details/:id',element:<Detailspage/>},
        { path: '*', element: <PageNotFound /> },
      ]
    },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    // { path: '*', element: <PageNotFound /> }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
