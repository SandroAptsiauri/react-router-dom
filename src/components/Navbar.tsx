import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/users"}>users</Link>
      <Link to={"/form-page"}>Form</Link>
      <Outlet />
    </div>
  );
};

export default Navbar;
