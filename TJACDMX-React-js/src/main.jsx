import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ConvocatoriasProvider } from './context/convocatoriasProvider'
import { ConsultaProvider } from './context/consultaProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConvocatoriasProvider>
      <ConsultaProvider>
        <RouterProvider router={router}/>
      </ConsultaProvider>
    </ConvocatoriasProvider>
  </React.StrictMode>,
)
