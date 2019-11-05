import React from "react";
import logo from "../../assets/img/logo192.png";
import "../../../style/view/shared/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-warning font-weight-bold ">
        <a class="navbar-brand active" href="#">
          <img src={logo} alt="Parking lot" className="logo-size" />
        </a>
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
              <a class="nav-link active" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link active " href="#">
                Login
              </a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link active" href="#">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
