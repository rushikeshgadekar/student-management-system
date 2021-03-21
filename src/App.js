import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import User from "./components/User";
import Logo from "./asset/logo.jpg";
const App = () => {
  return (
    <>
      <div className="logo">
        <BrowserRouter>
          <NavLink className="home-btn" exact to="/">
            <img className="logo-img" src={Logo} alt="" />
          </NavLink>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/user" exact component={User} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
