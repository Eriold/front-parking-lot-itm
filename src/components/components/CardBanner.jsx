import React from "react";
// import "../../style/components/CardBanner.css";
import "../../style/components/CardBanner.css";
import pisos from "../assets/img/pisos.jpg";
import Carro_lavando1 from "../assets/img/Carro_lavando1.jpg";
import carrobrillante from "../assets/img/carrobrillante.jpg";

const CardBanner = () => {
  return (
    <div id="demo" class="carousel slide" data-ride="carousel">
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={Carro_lavando1}
            alt="Los Angeles"
            // width="1100"
            // height="400"
          />
        </div>
        <div class="carousel-item">
          <img src={pisos} alt="Chicago" width="1100" height="300" />
        </div>
        <div class="carousel-item">
          <img src={carrobrillante} alt="New York" width="1100" height="300" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  );
};
export default CardBanner;
