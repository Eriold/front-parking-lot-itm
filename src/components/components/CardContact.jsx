import React from "react";

const CardContact = () => {
  return (
    <div className="container bg-info mt-4">
        <form action="">
              <div class="form-group">
                  <label  className="text-white" for="exampleInputName1">Nombre</label>
                  <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="ingrese nombre"></input>
              </div>
              <div className="form-group">
                <label className="text-white" for="exampleInputLastName1">Apellido</label>
                <input type="password" className="form-control" id="exampleInputLastName1" placeholder="Apellido"></input>
              </div>
              <div className="form-group">
                <label  className="text-white"  for="exampleInputEmail1">Correo</label>
                <input type="password" className="form-control" id="exampleInputEmail1" placeholder="Correo"></input>
              </div>
              <div className="form-group">
                <label  className="text-white" for="exampleInputEmail1">Descripción</label>
                <textarea name="" className="form-control"  id="exampleInputText" cols="30" rows="10"></textarea>
              </div>
              <button type="submit" class="btn btn-dark center-block">Enviar</button>
            </form>
       </div>
  );
};

export default CardContact;
