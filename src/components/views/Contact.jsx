import React from "react";

const Contact = () => {
  return (
    <div className="p-5 container">
         <div className="card card-header bg-dark">
          <p>
            <h3>Contacto</h3>
          </p> 
        </div>
         <div className="card card-body">
           <div className="row">
             <div className="col-sx">
             <form action="">
                <div class="form-group">
                    <label for="exampleInputName1">Nombre</label>
                    <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="ingrese nombre"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputLastName1">Apellido</label>
                  <input type="password" className="form-control" id="exampleInputLastName1" placeholder="Apellido"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Correo</label>
                  <input type="password" className="form-control" id="exampleInputEmail1" placeholder="Correo"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Descripción</label>
                  <textarea name="" className="form-control"  id="exampleInputText" cols="30" rows="10"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
               </form>
             </div>
           </div>
         </div>
    </div>
  );
};

export default Contact;
