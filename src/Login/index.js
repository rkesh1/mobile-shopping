import React, { useState, useContext } from "react";
import loginContext from "../context/loginContext";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { isLogin, setIsLogin } = useContext(loginContext);

  const submitForm = () => {
    console.log("submit", email, pass);
    if (email === "demo@demo.com" && pass === "123456789") {
      setIsLogin(true);
    }
  };

  const reset = () => {
    setEmail("");
    setPass("");
  };
  const update = (type, target) => {
    if (type === "email") {
      setEmail(target.value);
    } else if (type === "password") {
      setPass(target.value);
    }
  };
  return (
    <div className="form-container">
      {!isLogin && <h2 className="m20">Login form</h2>}
      {!isLogin ? (
        <form>
          <div className="form-group m20">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => update("email", e.target)}
            />
          </div>
          <div className="form-group m20">
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pwd"
              onChange={(e) => update("password", e.target)}
            />
          </div>
          <div className="m20">
            <button
              type="button"
              className="btn btn-default btn-primary m20"
              onClick={submitForm}
            >
              Submit
            </button>
            <button type="button" className="btn btn-default btn-primary m20">
              Reset
            </button>
          </div>
        </form>
      ) : (
        <h2 className="center m20">You are logged in.</h2>
      )}
    </div>
  );
};
export default Login;
