import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login";
import "./Login.css";

import ScrollToTop from "./smallC/ScrollToTop";
const App = () => {
  return (
    <>
      <ScrollToTop/>
      <Navbar />
      

      <Switch>
        <Route exact path="/" component={Home} smooth={true}/>
        <Route exact path="/login" component={Login} smooth={true}/>
        <Redirect to="/" />;
      </Switch>
      <Footer/>
    </>
  );
};

export default App;
