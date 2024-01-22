import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './Login'
import Header from './Header'
import Browse from './Browse'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Login/>
  },
  {
    path:"/browse",
    element: <Browse/>
  }
])

const Body = () => {
  return (
    <div>
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body