import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };

  return (
    <>
      <header id="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item navbar-brand">
              <NavLink to="/" activeStyle={activeStyle} exact>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item navbar-brand">
              <NavLink to="/Appliances" activeStyle={activeStyle}>
                <span> Appliances </span>
              </NavLink>
            </li>
            <li className="nav-item navbar-brand">
              <NavLink to="/about" activeStyle={activeStyle}>
                <span>About</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
