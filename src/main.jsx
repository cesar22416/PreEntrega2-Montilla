import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/Style/miAPP.css'
import  "bootstrap/dist/css/bootstrap.min.css"
import ItemCount from './components/ItemCount/ItemCount.jsx' 
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <App/>
     <ItemCount />
    </>
  </React.StrictMode>,
)
