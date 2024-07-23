import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ConvocatoriasProvider } from './context/convocatoriasProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConvocatoriasProvider>
      <RouterProvider router={router}/>
    </ConvocatoriasProvider>
  </React.StrictMode>,
)
