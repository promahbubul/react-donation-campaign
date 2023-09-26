import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="div flex justify-between flex-row my-10 items-center">
        <img src="/images/Logo.png" alt="" className="" />
        <div className="space-x-5 font-medium">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/donations"}>Donation</NavLink>
          <NavLink to={"/statistics"}>Statistics</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
