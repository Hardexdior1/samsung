import React, { useRef, useState } from "react";
import "../Styles/Header.css";
// import { Navbar } from 'react-bootstrap'
import samsungLogo from "../images/sam2-logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const location = useLocation();
  const nav = useRef();
  const changeBackground = useRef();

  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      // console.log('hello');

      changeBackground.current.classList.remove("navbar");
      changeBackground.current.classList.add("navbarChangeBackGround");
    } else {
      changeBackground.current.classList.add("navbar");
      changeBackground.current.classList.remove("navbarChangeBackGround");
    }
  });

  const showNav = () => {
    nav.current.classList.remove("ul");
    nav.current.classList.add("ulShow");
  };
  const hideNav = () => {
    nav.current.classList.add("ul");
    nav.current.classList.remove("ulShow");
  };

  const more = useRef();
  const showMore = () => {
    if (more.current.classList.contains("hideMore")){
      more.current.classList.remove("hideMore");
      more.current.classList.add("showMore");


    }
    else{
      more.current.classList.add("hideMore");
      more.current.classList.remove("showMore");


    }
  } 
  return (
    <div className="headerWrap">
      <header className="firstHeader">
        <p>8900093033</p>
        <p>example@gmail.com</p>
      </header>

      <nav className="navbar" ref={changeBackground}>
        <div>
          <img className="navLogo" src={samsungLogo} alt="samsung-logo" />
        </div>

        <ul className="ul" ref={nav}>
          <div className="linkWrap">
            <li>
              {" "}
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : "notActive"}
                onClick={() => {
                  hideNav();
                  setToggle(true);
                }}>
                Home
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                to="/About"
                className={
                  location.pathname === "/About" ? "active" : "notActive"
                }
                onClick={() => {
                  hideNav();
                  setToggle(true);
                }}>
                About
              </Link>{" "}
            </li>
            <div>
              <li onClick={showMore}>
                {" "}
                <Link className="more">More </Link>
              </li>

              <div className="hideMore" ref={more}>
               
              <li>
              {" "}
              <Link
                to="/Team"
                className={
                  location.pathname === "/Team" ? "active" : "notActive"
                }
                onClick={() => {
                  hideNav();
                  setToggle(true);
                }}>
                Team
              </Link>{" "}
            </li>

            <li>
              {" "}
              <Link
                to="/Career"
                className={
                  location.pathname === "/Career" ? "active" : "notActive"
                }
                onClick={() => {
                  hideNav();
                  setToggle(true);
                }}>
                Career
              </Link>{" "}
            </li>
              </div>
            </div>
            <li>
              {" "}
              <Link
                to="/Blog"
                className={
                  location.pathname === "/Blog" ? "active" : "notActive"
                }
                onClick={() => {
                  hideNav();
                  setToggle(true);
                }}>
                Blog
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                to="/Contact"
                className={
                  location.pathname === "/Contact" ? "active" : "notActive"
                }
                onClick={() => {
                  hideNav();
                  setToggle(true);
                }}>
                Contact
              </Link>{" "}
            </li>
            
          </div>

          <div className="verifyWrap">
            <Link>
              <button>Verify Claim</button>
            </Link>
            <Link>
              <button>Verify Staff</button>
            </Link>
          </div>
        </ul>

        {toggle ? (
          <div
            className="menu"
            onClick={() => {
              showNav();
              setToggle(false);
            }}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <button
            className="remove"
            onClick={() => {
              hideNav();
              setToggle(true);
            }}>
            x
          </button>
        )}
      </nav>
    </div>
  );
};

export default Header;
