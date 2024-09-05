import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import User from "./Components/User/User";


// const router = createBrowserRouter(
//   [

//     {
//       path :'/',
//       element:<Layout/>,
//       children :[
//         {
//           path:'/',
//           element: <Home/> ,
//         },
//         {
//           path:'about',
//           element: <About/> ,
//         }
//       ]

//     }
//   ]
// )
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:userid" element={<User/>} />

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
