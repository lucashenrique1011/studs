import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Html from './route/html.tsx'
import Inicio from './route/inicio.tsx'

const router = createBrowserRouter([
  {path:"/",
    element:<App/>,
    //errorElement={}
    children:[
          {
            path:"html",
            element:<Html/>
          } ,{
            path:"/",
            element:<Inicio/>
          } 
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
