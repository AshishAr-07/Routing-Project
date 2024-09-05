import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import About from './Component/About/About.jsx'
import Services from './Component/Services/Services.jsx'
import Home from './Component/Home/Home.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
<Route path='' element ={<Home/>}  />
<Route path='/about' element ={<About/>}  />
<Route path='/service' element ={<Services/>}  />
<Route path='/service/:serId' element ={<Services/>}  />





    </Route>
  )
)
// const router= createBrowserRouter([
// {
//   path :"/",
//   element :<Layout/>,
//   children :[
//     {
//       path:"/",
//       element :<Home/>
//     },
//     {
//       path:"/about",
//       element:<About/>
//     },
//     {
//       path:"/service",
//       element:<Services/>,
    
//     }
//   ]
// }

// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
