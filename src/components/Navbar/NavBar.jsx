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
   <NavLink to={`/mi_app/src/asyncMock.jsx/category/Moto_110`} className={({isActive}) => isActive? 'ActiveOption' : 'Option'}>Moto 110</NavLink> 
   <NavLink to={`/category/Moto_125`} className={({isActive}) => isActive? 'ActiveOption' : 'Option'}>Moto 125</NavLink> 
   <NavLink to={`/category/Moto_150`} className={({isActive}) => isActive? 'ActiveOption' : 'Option'}>Moto 150</NavLink> 

  </div>
  <CartWidget />
</nav>    
    )
}

export default NavBar