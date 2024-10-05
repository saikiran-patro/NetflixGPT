import React from 'react'
import Login from './Login'
import Browse from './Browse'
import SignUp from './SignUp'
import Home from './Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {

  
  




  const router = createBrowserRouter([
    {
      path:'/', 
      element:<Home/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    }
  ])
  return (
    <>
    
    <RouterProvider  router={router} />
    </>
  )
}

export default Body