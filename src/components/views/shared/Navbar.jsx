import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo192.png";
import "../../../style/view/shared/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning font-weight-bold ">
        <Link className="navbar-brand active" exact to="/">
          <img src={logo} alt="Parking lot" className="logo-size" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mr-3">
              <Link className="nav-link active" exact to="/">
                Inicio <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link active" exact to="/About">
                Empresa <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link active" exact to="/Contact">
                Contacto <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link active" exact to="/Services">
                Servicios <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link active" exact to="/Register">
                Registrarse
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link active " exact to="/Login">
                Ingresar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
