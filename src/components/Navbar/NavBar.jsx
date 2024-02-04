import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import LogoPage from '../logo/logo';
import '../Style/miAPP.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" navbar-brand="">
        <LogoPage />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
        aria-controls="navbarNavAltMarkup"
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`NavbarBurge collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <span className="nav-item nav-link">
            <NavLink to={`/category/motouno`} className="btn btn-warning">
              Moto 110
            </NavLink>
          </span>
          <span className="nav-item nav-link">
            <NavLink to={`/category/MotoDos`} className="btn btn-warning">
              Moto 125
            </NavLink>
          </span>
          <span className="nav-item nav-link">
            <NavLink to={`/category/MotoTres`} className="btn btn-warning">
              Moto 150
            </NavLink>
          </span>
          <span className="nav-item nav-link">
            <NavLink to={`/category/MotoCua`} className="btn btn-warning">
              Moto 200
            </NavLink>
          </span>
          <span className="nav-item nav-link">
            <NavLink to={`/category/MotoCin`} className="btn btn-warning">
              Moto 250
            </NavLink>
          </span>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
