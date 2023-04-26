import React, { useLayoutEffect, useState } from "react";
import { X, Menu } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import logoDark from "../assets/logoDark.png";

export default function Header() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(true);

  function navOpenClose() {
    if (window.innerWidth < 1000) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
  }
  useLayoutEffect(() => {
    navOpenClose();
    window.addEventListener("resize", navOpenClose);
    window.addEventListener("scroll", navOpenClose);
  }, []);
  return (
    <div className="header">
      <div className="header__content">
        <Link
          to="/"
          onClick={() => {
            document.getElementById("Home").checked = true;
          }}
          className="header__content__logo__mbl"
        >
          <img style={{ maxHeight: "100px" }} src={logoDark} alt="logo" />
        </Link>
        {isNavOpen ? (
          <div className="header__content__entry">
            <NavLink to="/rooms">Our Rooms</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/experiences">Experience</NavLink>
            <Link
              to="/"
              onClick={() => {
                document.getElementById("Home").checked = true;
              }}
              style={{ marginTop: 20 }}
              className="header__content__logo"
            >
              <img src={logoDark} alt="logo" />
            </Link>
            <NavLink to="/overnight-experiences-and-booking">Event Booking</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        ) : null}
        <div className="header__content__button">
          <button
            className="header__content__button__secondary"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            {isNavOpen ? (
              <X size={20} color="currentColor" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to ? to : "/"}
      className="header__content__nav__entry__input"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      {children}
    </Link>
  );
}
