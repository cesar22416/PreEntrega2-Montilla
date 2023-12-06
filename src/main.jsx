import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/Navbar/NavBar.jsx'
import './components/Style/miAPP.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import  "bootstrap/dist/css/bootstrap.min.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <NavBar/>
     <ItemListContainer text={'Bienvenido'}/>
    </>
  </React.StrictMode>,
)
