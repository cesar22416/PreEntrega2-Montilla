import { Link } from 'react-router-dom'
import logo from './assets/logo.svg'

const LogoPage = () => {
   return(
    <Link className="navbar-brand" href="#">
<img src={logo} alt='cart-wdiget' className='Nav-logo' style={{ width:"100px" , height:"60px"}}/>
    </Link>
    
   )
}


export default LogoPage





