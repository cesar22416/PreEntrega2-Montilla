import  "bootstrap/dist/css/bootstrap.min.css" 
import Faceboock from './Facebook.svg'
import Instagram from './Instagram.svg'
import Youtube from './Youtube.svg'
import Telephone from './Telephone.svg'
import Correo from './Correo.svg'
import Geo from './Geo.svg'
import logo from '../logo/assets/logo.svg'
import './Footer.css'

const Footer = ()=>{
    return(
    <footer className="FooterBoxM ">

  <div className="container-fluid FooterBoxP" >
    <a className="navbar-brand" href="#">
    <img src={logo} alt='Icomlogo' className="FooterLogo" />
    </a>
  </div>
  <div className="container-fluid FooterBoxH" >
    <a className="navbar-brand" href="#">
    <img src={Faceboock} alt='IcomFacebook' className="FooterIcom"/>
    </a>
    <a className="navbar-brand" href="#">
    <img src={Instagram} alt='IcomInstagram'  className="FooterIcom" />
    </a>
    <a className="navbar-brand" href="#">
    <img src={Youtube} alt='IcomYoutube'  className="FooterIcom" />
    </a>
    <a className="navbar-brand" href="#">
    <img src={Telephone} alt='IcomTelephone'  className="FooterIcom" />
    </a>
    <a className="navbar-brand" href="#">
    <img src={Correo} alt='IcomCorreo'  className="FooterIcom" />
    </a>
    <a className="navbar-brand" href="#">
    <img src={Geo} alt='IcomGeo'  className="FooterIcom"/>
    </a>
  </div>


</footer>
    )

}
 export default Footer



