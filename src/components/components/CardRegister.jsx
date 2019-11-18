import React from "react";
import "../../style/components/cardRegister.css";

const CardRegister = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="content-register login-div">
            <div class="log-register"></div>
            <div class="title">User Register</div>
            <div class="sub-title">Parking-lot</div>
            <div class="field">
              <div class="user">
                <input type="text" class="user-input" placeholder="Name" />
                <input type="text" class="user-input" placeholder="Last Name" />
              </div>
              <div class="user">
                <input type="text" class="user-input" placeholder="ID" />
                <input type="email" class="user-input" placeholder="Email" />
              </div>
              <div class="user">
                <input
                  type="username"
                  class="user-input"
                  placeholder="Username"
                />
              </div>
              <div class="pass">
                <input
                  type="password"
                  class="user-input"
                  placeholder="Password"
                />
                <input
                  type="password"
                  class="pass-input"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <button class="register-button">REGISTER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRegister;
