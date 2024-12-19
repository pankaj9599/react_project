import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Navbar from './pages/Navbar'

function App() {
  const router=createBrowserRouter(
    [
      {
        path:'/',
        element:<div>
            <Navbar/>
          <Home/>
        </div>
      },
      {
        path:'/cart',
        element:
        <div>
   <Navbar/>
          <Cart/>
        </div>
      },
    ]
  )



  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
