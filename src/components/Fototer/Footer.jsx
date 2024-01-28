import  "bootstrap/dist/css/bootstrap.min.css" 
import Faceboock from './Facebook.svg'
import Instagram from './Instagram.svg'
import Youtube from './Youtube.svg'
import Telephone from './Telephone.svg'
import Correo from './Correo.svg'
import Geo from './Geo.svg'
import logo from '../logo/assets/logo.svg'
import './Footer.css'
import { Link } from "react-router-dom"

const Footer = ()=>{
    return(
    <footer className="FooterBoxM ">

  <div className="container-fluid FooterBoxP" >

    <Link className="navbar-brand" href="#">
    <img src={logo} alt='Icomlogo' className="FooterLogo" />
    </Link>

  </div>
  <div className="container-fluid FooterBoxH" >
 <span>
    <Link className="navbar-brand" href="#">
    <img src={Faceboock} alt='IcomFacebook' className="FooterIcom"/>
    </Link>
 </span>
 <span>
    <Link className="navbar-brand" href="#">
    <img src={Instagram} alt='IcomInstagram'  className="FooterIcom" />
    </Link>
 </span>
 <span>
    <Link className="navbar-brand" href="#">
    <img src={Youtube} alt='IcomYoutube'  className="FooterIcom" />
    </Link>
 </span>
 <span>
    <Link className="navbar-brand" href="#">
    <img src={Telephone} alt='IcomTelephone'  className="FooterIcom" />
    </Link>
 </span>
 <span>
    <Link className="navbar-brand" href="#">
    <img src={Correo} alt='IcomCorreo'  className="FooterIcom" />
    </Link>
    </span>
 <span>
    <Link className="navbar-brand" href="#">
    <img src={Geo} alt='IcomGeo'  className="FooterIcom"/>
    </Link>
</span>
  </div>


</footer>
    )

}
 export default Footer



