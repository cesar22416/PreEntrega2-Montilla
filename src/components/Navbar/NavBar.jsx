import CartWidget  from '../CartWidget/CartWidget'
import LogoPage from '../logo/logo'
import {NavLink, Link} from 'react-router-dom'
import '../Style/miAPP.css'
import  "bootstrap/dist/css/bootstrap.min.css"

const NavBar = () =>{
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to='/' navbar-brand="true" >
   <LogoPage/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className=" NavbarBurge collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link"><NavLink to={`/category/motouno`} className='btn btn-warning'>Moto 110</NavLink></Link>
      <Link className="nav-item nav-link" ><NavLink to={`/category/MotoDos`} className='btn btn-warning'>Moto 125</NavLink></Link>
      <Link className="nav-item nav-link" ><NavLink to={`/category/MotoTres`} className='btn btn-warning'>Moto 150</NavLink></Link>
      <Link className="nav-item nav-link"><NavLink to={`/category/MotoCua`} className='btn btn-warning'>Moto 200</NavLink> </Link>
      <Link className="nav-item nav-link "><NavLink to={`/category/MotoCin`} className='btn btn-warning'>Moto 250</NavLink></Link>
    <CartWidget/>
    </div>
    </div>
    
</nav>    
    )
}
export default NavBar
