import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-root">
      <div className="home">
        <h1 className="home-heading">Student Management System</h1>
      </div>
      <div className="links">
        <NavLink className="navlink" to="/register">
          <button className="nav-btn">Register</button>
        </NavLink>
        <NavLink className="navlink" to="/user">
          <button className="nav-btn">User</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
