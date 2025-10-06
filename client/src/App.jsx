import { useState } from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Main from './components/Main'
import Quiz from './components/Quiz'
import Result from './components/Result'

const router= createBrowserRouter([
  {
    path:'/',
    element:<Main/>
  },
  {
    path:'/quiz',
    element:<Quiz/>
  },
  {
    path:'/result',
    element:<Result/>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
