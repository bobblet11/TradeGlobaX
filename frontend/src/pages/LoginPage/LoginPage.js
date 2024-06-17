import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div>
      <BackButton />
      <div className="login-title">Log in to TradeGlobaX</div>
      <div className="login-body">
        <div className="container">
          <hr></hr>
          <form>
            <div className="username-container">
              <div className="text-sign">Username</div>
              <input type="text" placeholder="Enter Username" required></input>
            </div>

            <div className="password-container">
              <div className="text-sign">Password</div>
              <input
                type="password"
                placeholder="Enter Password"
                required
              ></input>
              <div>
                <input type="checkbox" checked="checked" name="remember" />{" "}
                Remember me
              </div>
            </div>

            <div className="">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
