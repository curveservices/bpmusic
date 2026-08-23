import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuToggle from "../../components/menuToggle";
import Socials from "../../components/socials";
import Button from "../../components/button";
import "./index.scss";
import {
  faCalendar,
  faEnvelope,
  faHouse,
  faImage,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${scrolled ? "navbar-scroll navbar-hidden" : ""} ${showNav ? "menu-open" : ""}`}
      >
        <NavLink to="/" aria-label="home-page">
          <div className="title-container">
            <img
              src={logo}
              alt="Penisular big band in Kent, North Kent"
              className="mobile-logo"
            />
          </div>
          <img
            src={logo}
            alt="Penisular big band in Kent, North Kent"
            className="logo"
          />
        </NavLink>
        <nav className={`navbar ${showNav ? "mobile-show" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faHouse} className="mobile-icon" />
              <div className="text">Home</div>
            </div>
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faUsers} className="mobile-icon" />
            <div className="text">About</div>
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faCalendar} className="mobile-icon" />
            <div className="text">Events</div>
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faImage} className="mobile-icon" />
            <div className="text">Gallery</div>
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mobile-icon" />
            <div className="text">Contact</div>
          </NavLink>
        </nav>
        <Button text="Book The Band" />
        <MenuToggle showNav={showNav} setShowNav={setShowNav} />
      </header>
    </>
  );
};

export default Navbar;
