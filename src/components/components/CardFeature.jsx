/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "../../style/components/CardFeature.css";
import Santiago from "../assets/img/Santiago.jpg";
import Daniel from "../assets/img/Daniel.jpg";
import Camilo from "../assets/img/Camilo.jpg";

const CardFeature = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-7 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={Camilo} />
              </div>
              <div className="team-content">
                <h3 className="name">Camilo Sanchez</h3>
                <h4 className="title">Developer front-end</h4>
              </div>
              <ul className="social">
                <li>
                  <Link
                    href="#"
                    className="fa fa-facebook"
                    aria-hidden={true}
                  ></Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="fa fa-twitter"
                    aria-hidden={true}
                  ></Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="fa fa-google-plus"
                    aria-hidden={true}
                  ></Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="fa fa-linkedin"
                    aria-hidden={true}
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-7 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={Santiago}></img>
              </div>
              <div className="team-content">
                <h3 className="name">Santiago Molina</h3>
                <h4 className="title">Developer back-end</h4>
              </div>
              <ul className="social">
                <li>
                  <Link
                    href="#"
                    className="fa fa-facebook"
                    aria-hidden={true}
                  ></Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="fa fa-twitter"
                    aria-hidden={true}
                  ></Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="fa fa-google-plus"
                    aria-hidden={true}
                  ></Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="fa fa-linkedin"
                    aria-hidden={true}
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-7 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={Daniel}></img>
              </div>
              <div className="team-content">
                <h3 className="name">Daniel Rodriguez</h3>
                <h4 className="title">DBA</h4>
              </div>
              <ul className="social">
                <li>
                  <Link
                    href="#"
                    className="fa fa-facebook"
                    aria-hidden={true}
                  ></Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="fa fa-twitter"
                    aria-hidden={true}
                  ></Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="fa fa-google-plus"
                    aria-hidden={true}
                  ></Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="fa fa-linkedin"
                    aria-hidden={true}
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardFeature;
