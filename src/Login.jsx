import React from "react";
import { NavLink } from "react-router-dom";
import lg from "./homeImages/login_img_c4a81e.png";
import { Button } from "@material-ui/core";
const Login = () => {
  return (
    <div classnName="lContainer">
      <div className="loginM">
        <div className="rowL1">
          <h1>Login</h1>
          <div className="rH">
            <h3 className="H1">Get access to your Orders,</h3>
            <h3> Wishlist and Recommendations.</h3>
          </div>
          <div className="lLogo flex justify-center align-items">
            <img src={lg} alt="logo" />
          </div>
        </div>

        <div className="rowL2">
          <form action="# ">
            <div className="form-row ">
              <div className="txt-field">
                <input type="text "  autoComplete="off" required />
                <span></span>

                <label htmlFor=" ">Enter Email/Mobile number</label>
           
              </div>

              <div className="txt-field ">
                <input type="text " required autoComplete="off"/>
                <span></span>
                <label htmlFor=" ">Enter Password</label>
                <NavLink to="/">Forget?</NavLink>
              </div>
            </div>
            
          </form>
          <div className="details flex justify-center">
            By Continuing,you agree to FlipKart's &nbsp;
            <NavLink to="/">Terms of Use</NavLink>&nbsp;and&nbsp;{" "}
            <NavLink to="/">Privacy Policy</NavLink>
          </div>
          <div className="lBtn flex justify-center">
            <Button type="submit">Login</Button>
          </div>
          <div className=" flex justify-center oR"> OR</div>
          <div className="lBtn2 flex justify-center">
            <Button>Request OTP</Button>
          </div>
          <div className=" flex justify-center lastF "> <NavLink to="/">New to Flipkart?&nbsp;</NavLink><NavLink to="/">Create an account</NavLink></div>
            
          
        </div>
      </div>
    </div>
  );
};
export default Login;
