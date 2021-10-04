import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./App.css";
import "./Resp.css";
import Hamburger from "./smallC/Hamburger";
import logo from "./images/logo.png";
import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";



const RespNav = () => {
    return (
      <>
        <header>
       
          <nav id="fuck">
          
            <div className="searchNav flex align-items">
           
              <div className="logo">
                <NavLink to="/">
                  <img src={logo} alt="logo" title="flipcart" width="75" />
                </NavLink>
                <NavLink className="logoL" to="/">
                  Explore <span> plus</span>
                </NavLink>
              </div>
              {/* <div className="searchBox"> */}
              <input
                className="seacrhBox"
                type="text"
                name="search"
                id="search"
                placeholder="Search for products, brands and more"
                autoComplete="off"
              />
              <button className="searchBar">
                <SearchIcon className="sBarIcon" />
              </button>
              {/* </div> */}
              <div className="navLogin">
                <div>
                  <NavLink className="loginBtn" to="/login">
                    Login
                  </NavLink>
                </div>
                <div className="moreBtn">
                  <div className="navLinks">More</div>
                  <ExpandMoreIcon className="mDownArrow" />
                </div>
                <div className="navLinks flex align-items">
                  <ShoppingCartIcon className="sCart" />
                  <div className="more">Cart</div>
                </div>
              </div>
            </div>
            <div className=" burger">
            <Hamburger />
             
              
            </div>
            
          </nav>
        </header>
      
       
      </>
    );
  };
  
  export default RespNav;
  