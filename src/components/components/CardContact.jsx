import React from "react";
import useForm from "react-hook-form";
import { contactVisitor } from "../api/contact.js";

const CardContact = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
    contactVisitor(data);
  };

  console.log(errors);

  return (
    <div className="container bg-info mt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="text-white" for="exampleInputName1">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
            placeholder="ingrese nombre"
            name="contactName"
            ref={register}
            required
          ></input>
        </div>
        <div className="form-group">
          <label className="text-white" for="exampleInputLastName1">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputLastName1"
            placeholder="Apellido"
            name="contactLastName"
            ref={register}
            required
          ></input>
        </div>
        <div className="form-group">
          <label className="text-white" for="exampleInputEmail1">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Correo"
            name="contactEmail"
            ref={register}
            required
          ></input>
        </div>
        <div className="form-group">
          <label className="text-white" for="exampleInputEmail1">
            Descripción
          </label>
          <textarea
            className="form-control"
            id="exampleInputText"
            cols="30"
            rows="10"
            name="contactDescription"
            ref={register}
            required
          ></textarea>
        </div>
        <input
          type="submit"
          className="btn btn-dark center-block"
          value="Enviar"
        />
      </form>
    </div>
  );
};

export default CardContact;
