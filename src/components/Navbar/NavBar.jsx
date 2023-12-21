import CartWidget  from '../CartWidget/CartWidget'
import LogoPage from '../logo/logo'
import {NavLink, Link} from 'react-router-dom'
import '../Style/miAPP.css'
const NavBar = () =>{
    return (
<nav className="navbar navbar-expand-lg ">
  <Link to='/'>
 <LogoPage/>
  </Link>
  <div className="container-fluid">
   <NavLink to={`/category/motouno`} className='btn btn-warning'>Moto 110</NavLink> 
   <NavLink to={`/category/MotoDos`} className='btn btn-warning'>Moto 125</NavLink> 
   <NavLink to={`/category/MotoTres`} className='btn btn-warning'>Moto 150</NavLink>
   <NavLink to={`/category/MotoCua`} className='btn btn-warning'>Moto 200</NavLink> 
    <NavLink to={`/category/MotoCin`} className='btn btn-warning'>Moto 250</NavLink>
  </div>
  <CartWidget />
</nav>    
    )
}

export default NavBar