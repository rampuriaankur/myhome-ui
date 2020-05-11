import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BsFillGrid3X3GapFill as menuIcon } from "react-icons/bs";

function Header() {
  return (
    <Navbar className="fixed-nav" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/favicon.ico"
          width="40"
          height="40"
          className="d-inline-block align-top "
        />{" "}
        <span className=" text-brand-nav pl-2 pt-5">PARIS 2.0</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mr-auto text-nav">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="/Appliances">Appliances</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
