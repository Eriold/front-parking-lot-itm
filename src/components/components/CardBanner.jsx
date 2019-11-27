import React from "react";
// import "../../style/components/CardBanner.css";
import "../../style/components/CardBanner.css";
import pisos from "../assets/img/pisos.jpg";
import Carro_lavando1 from "../assets/img/Carro_lavando1.jpg";
import carrobrillante from "../assets/img/carrobrillante.jpg";

const CardBanner = () => {
  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active bg-warning"></li>
        <li data-target="#demo" data-slide-to="1" className="bg-warning"></li>
        <li data-target="#demo" data-slide-to="2" className="bg-warning"></li>
      </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Carro_lavando1} alt="Los Angeles" />
        </div>
        <div className="carousel-item">
          <img src={pisos} alt="Chicago" />
        </div>
        <div className="carousel-item">
          <img src={carrobrillante} alt="New York" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon text-warning"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon text-warning"></span>
      </a>
    </div>
  );
};
export default CardBanner;
