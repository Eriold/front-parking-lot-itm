import React from "react";
import parqueo from "../assets/img/parqueo.jpg";
import images from "../assets/img/images.jpg";
// import "../../style/view/services.css";

const CardServices = () => {
  return (
    <div id="service">
      <div id="service" className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center mb-2"> Servicios que prestamos </h1>
            <div className="row justify-content-center">
              <div className="col-5 col-md-5">
                <div className="card bg-dark text-white card-header">
                  <h3>Servicios de parqueadero</h3>
                </div>
                <div className="card card-body">
                  <img className="img-Services" src={parqueo} alt="" />
                  <hr />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae sint commodi natus assumenda, rem eveniet asperiores
                    dicta temporibus ullam repellendus voluptatum sapiente
                    tenetur laboriosam saepe suscipit veritatis ut unde
                    explicabo. Fugiat veritatis maiores quae, vel pariatur
                    voluptas itaque animi nobis, quo repudiandae vero recusandae
                    tempore! Tenetur alias, perspiciatis voluptate sequi ipsam
                    ab sunt sapiente. Magni ullam similique unde repellendus
                    exercitationem. Pariatur tempora beatae aliquam sunt sit
                    vel! Impedit ipsa omnis fugiat tempore debitis voluptate
                    obcaecati fugit temporibus at voluptatum perspiciatis
                    sapiente doloremque voluptatem eum sed illum, consequatur ea
                    laborum optio?
                  </h6>
                  <button
                    type="submit"
                    className="btn btn-block bg-dark text-white "
                  >
                    Solicitar Servicio
                  </button>
                </div>
              </div>
              <div className="col-5 col-md-5">
                <div className="card bg-dark text-white card-header">
                  <h3>Servicios de Lavado</h3>
                </div>
                <div className="card card-body">
                  <img className="img-Services" src={images} alt="" />
                  <hr />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae sint commodi natus assumenda, rem eveniet asperiores
                    dicta temporibus ullam repellendus voluptatum sapiente
                    tenetur laboriosam saepe suscipit veritatis ut unde
                    explicabo. Fugiat veritatis maiores quae, vel pariatur
                    voluptas itaque animi nobis, quo repudiandae vero recusandae
                    tempore! Tenetur alias, perspiciatis voluptate sequi ipsam
                    ab sunt sapiente. Magni ullam similique unde repellendus
                    exercitationem. Pariatur tempora beatae aliquam sunt sit
                    vel! Impedit ipsa omnis fugiat tempore debitis voluptate
                    obcaecati fugit temporibus at voluptatum perspiciatis
                    sapiente doloremque voluptatem eum sed illum, consequatur ea
                    laborum optio?
                  </h6>
                  <button
                    type="submit"
                    className="btn btn-block bg-dark text-white "
                  >
                    Solicitar Servicio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
