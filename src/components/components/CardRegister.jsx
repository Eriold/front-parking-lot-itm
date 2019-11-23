import React from "react";
import useForm from "react-hook-form";
import "../../style/components/cardRegister.css";
import { userRegister } from "../api/user"; //Api axios

const CardRegister = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    if (data.userPassword === data.userConfirmPass) {
      //Data save with the name ot "input name", please confirm with backend is equally
      userRegister(data);
      alert("Registro exitoso");
      e.target.reset();
    } else {
      //Error if password is diferent
      alert("Por favor comprueba que la contraseña sea la misma");
    }
  };

  console.log(errors);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="content-register login-div">
              <div className="log-register"></div>
              <div className="title">User Register</div>
              <div className="sub-title">Parking-lot</div>
              <div className="field">
                <div className="user">
                  <input
                    type="text"
                    className="user-input"
                    placeholder="Name"
                    name="userName"
                    ref={register}
                  />
                  <input
                    type="text"
                    className="user-input"
                    placeholder="Last Name"
                    name="userLasteName"
                    ref={register}
                  />
                </div>
                <div className="user">
                  <input
                    type="number"
                    className="user-input"
                    placeholder="ID"
                    name="userID"
                    ref={register}
                  />
                  <input
                    type="email"
                    className="user-input"
                    placeholder="Email"
                    name="userEmail"
                    ref={register}
                  />
                </div>
                <div className="user">
                  <input
                    type="username"
                    className="user-input"
                    placeholder="Username"
                    name="user"
                    ref={register}
                  />
                </div>
                <div className="pass">
                  <input
                    type="password"
                    className="user-input"
                    placeholder="Password"
                    name="userPassword"
                    ref={register}
                  />
                  <input
                    type="password"
                    className="pass-input"
                    placeholder="Confirm Password"
                    name="userConfirmPass"
                    ref={register}
                  />
                </div>
              </div>
              <input
                type="submit"
                value="REGISTRO"
                className="register-button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardRegister;
