import React from "react";
import "../../style/components/CardFeature.css";
import Santiago from "../assets/img/Santiago.jpg";
import Daniel from "../assets/img/Daniel.jpg";
import Camilo from "../assets/img/Camilo.jpg";


const CardFeature = () => {
    return (
        <>
   <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-7 col-md-4 col-lg-3">
        <div class="our-team">
          <div class="picture">
            <img class="img-fluid" src={Camilo}></img>
          </div>
          <div class="team-content">
            <h3 class="name">Camilo Sanchez</h3>
            <h4 class="title">Developer front-end</h4>
          </div>
          <ul class="social">
            <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
            <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
            <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
            <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
          </ul>
        </div>
      </div>
          <div class="col-12 col-sm-7 col-md-4 col-lg-3">
        <div class="our-team">
          <div class="picture">
             <img class="img-fluid" src={Santiago}></img>
          </div>
          <div class="team-content">
            <h3 class="name">Santiago Molina</h3>
            <h4 class="title">Developer back-end</h4>
          </div>
          <ul class="social">
            <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
            <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
            <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
            <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
          </ul>
        </div>
      </div>
          <div class="col-12 col-sm-7 col-md-4 col-lg-3">
        <div class="our-team">
          <div class="picture">
             <img class="img-fluid" src={Daniel}></img>
          </div>
          <div class="team-content">
            <h3 class="name">Daniel Rodriguez</h3>
            <h4 class="title">DBA</h4>
          </div>
          <ul class="social">
            <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
            <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
            <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
            <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
          </ul>
        </div>
      </div>
     </div>
  </div>
  </>
    );
};
export default CardFeature;