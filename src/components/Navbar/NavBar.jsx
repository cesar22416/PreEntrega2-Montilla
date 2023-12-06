import CartWidget  from '../CartWidget/CartWidget'
import LogoPage from '../logo/logo'
import '../Style/miAPP.css'
import boton from './Button'



const NavBar = () =>{
    return (
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
   <LogoPage/>
    {boton({text:'Moto 110'})}
    {boton({text:'Moto 125'})}
    {boton({text:'Moto 150'})}
   <CartWidget />
  </div>
  
</nav>






















        
    )
}

export default NavBar