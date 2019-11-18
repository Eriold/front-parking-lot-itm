import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo192.png";
import "../../../style/view/shared/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-warning font-weight-bold ">
        <Link class="navbar-brand active" exact to="/">
          <img src={logo} alt="Parking lot" className="logo-size" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item mr-3">
              <Link class="nav-link active" exact to="/">
                Inicio <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item mr-3">
              <Link class="nav-link active" exact to="/About">
                Empresa <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item mr-3">
              <Link class="nav-link active" exact to="/Contact">
                Contacto <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item mr-3">
              <Link class="nav-link active" exact to="/Services">
                Servicios <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item mr-3">
              <Link class="nav-link active" exact to="/Register">
                Registrarse
              </Link>
            </li>
            <li class="nav-item mr-3">
              <Link class="nav-link active " exact to="/Login">
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
