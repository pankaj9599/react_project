import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Details from './components/Details'
import Favorites from './components/Favorite'


function App() {

const router = createBrowserRouter([
 {
   path:"/",
   element: (
     <div>
       <Navbar />
       <Home />
     </div>
   ),
 },
 {
   path: "/favorite",
   element: (
     <div>
       <Navbar />
       <Favorites />
     </div>
   ),
 },
 {
   path: "/recipe_item/:id",
   element: (
     <div>
       <Navbar />
       <Details />
     </div>
   ),
 }
]);
  return (
    
     <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
<RouterProvider router={router} />
   </div>

  )
}

export default App










