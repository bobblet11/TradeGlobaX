import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import "./LoginPage.css";
import Logo from "../../components/Logo/Logo";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";
import { TbBoxMargin } from "react-icons/tb";

const LoginPage = () => {
  return (
    <div>
      <BackButton />
      <div className="login-body">
        <div className="container">
          <div className="TGX-logo">
            <Logo logoImage="logo3.png" />
          </div>

          <div className="login-title">Log in to TradeGlobaX</div>

          <div className="SM-login">
            <div className="login-button">
              <FacebookLoginButton
                style={{ height: 40, width: 300 }}
                onClick={() => alert("Hello")}
              />
            </div>
            <div className="login-button">
              <GoogleLoginButton
                style={{ height: 40, width: 300 }}
                onClick={() => alert("Hello")}
              />
            </div>
            <div className="login-button">
              <AppleLoginButton
                style={{ height: 40, width: 300 }}
                onClick={() => alert("Hello")}
              />
            </div>
          </div>

          <hr></hr>

          <form>
            <div className="username-container">
              <div className="text-sign">Username or Email</div>
              <input type="text" placeholder="Enter Username" required></input>
            </div>

            <div className="password-container">
              <div className="text-sign">Password</div>
              <input
                type="password"
                placeholder="Enter Password"
                required
              ></input>
              <div className="rem-me">
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
