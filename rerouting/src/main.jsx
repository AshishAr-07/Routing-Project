import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Service from './Components/Service/Service.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router =createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children :[
      {
        path :"",
        element:<Home/>
      },
      {
        path :"/about",
        element:<About/>
      },
      {
        path :"/service",
        element:<Service/>
      }
    ]
  }


])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
