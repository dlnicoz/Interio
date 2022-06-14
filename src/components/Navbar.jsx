import React, { useState } from "react";
import "../css/Navbar.css";
import logo from "/mainlogo.png";
import $ from "jquery";
import Login from "../components/Login";
import { Link } from "react-router-dom";

//javascript for the responsive navigation menu
//jquery for toggle dropdown menus
$(document).ready(function () {
  //toggle sub-menus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
  });

  //toggle more-menus
  $(".more-btn").click(function () {
    $(this).next(".more-menu").slideToggle();
  });
});

function Navbar() {
  const [showSide, setSide] = useState(false);
  //javascript for the navigation bar effects on scroll
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <>
      <header>
        <Link to="/">
          <img className="header-img" src={logo} alt="main logo interio" />
        </Link>
        <div className="navigation">
          <ul className={showSide ? "menu active" : "menu"}>
            <div className="close-btn" onClick={() => setSide(!showSide)}></div>
            <li className="menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-item">
              <Link className="sub-btn" to="/Architect1">
                Architect
              </Link>
            </li>
            {/* <li className="menu-item">
              <a className="sub-btn" href="#">
                Customers
              </a>
              <ul className="sub-menu">
                <li className="sub-item">
                  <a href="#">Sub Item 01</a>
                </li>
                <li className="sub-item">
                  <a href="#">Sub Item 02</a>
                </li>
                <li className="sub-item">
                  <a href="#">Sub Item 03</a>
                </li>
                <li className="sub-item">
                  <a href="#">Sub Item 04</a>
                </li>
                <li className="sub-item more">
                  <a className="more-btn" href="#">
                    More Items <i className="fas fa-angle-right"></i>
                  </a>
                  <ul className="more-menu">
                    <li className="more-item">
                      <a href="#">More Item 01</a>
                    </li>
                    <li className="more-item">
                      <a href="#">More Item 02</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> */}
            <li className="menu-item">
              <Link to="/serve">Services</Link>
            </li>
            {/* <li className="menu-item">
              <a href="#">Contact</a>
            </li> */}
            <li className="menu-item">
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/login" className="super-btn">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu-btn" onClick={() => setSide(!showSide)}></div>
      </header>
    </>
  );
}

export default Navbar;
