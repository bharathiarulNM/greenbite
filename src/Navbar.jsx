import React, { useState } from "react";

function Navbar() {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  return (
    <>
      <nav className="d-flex justify-content-between position-fixed">
        <div className="d-flex">
          <h1 className="m-1">GreenBite</h1>
        </div>
        <div className="mx-2 nav-element">
          <ul className="d-flex gap-4 my-3 p-1 ul text-success">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#benefit">Benefits</a>
            </li>
            <li>
              <a href="#product">Products</a>
            </li>
            <li>
              <a href="#review">Reviews</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <i
          className="bi bi-list toggle"
          onClick={() => setShowSideNavbar(true)}
        ></i>
      </nav>
      {showSideNavbar && (
        <div className="sidenavbar fixed-top  min-vh-100 ms-auto animate-slide-in">
          <i
            className="bi bi-x-lg "
            onClick={() => setShowSideNavbar(false)}
          ></i>
          <div className="mx-2 text-center">
            <ul className="d-grid gap-4 my-3 p-1 ul">
              <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#benefit">Benefits</a>
            </li>
            <li>
              <a href="#product">Products</a>
            </li>
            <li>
              <a href="#review">Reviews</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            </ul>
          </div>
          <img
            className="sidebarimg m-2 my-2"
            src="sidebarlogo.png"
            alt="pic"
          />{" "}
        </div>
      )}
    </>
  );
}

export default Navbar;
