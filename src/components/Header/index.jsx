import React, { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import Home from "../../pages/Home";
import AboutUs from "../../pages/AboutUs";
import HowWeWork from "../../pages/HowWeWork";
import OurServices from "../../pages/ourServices";
import Button from "../Button";
import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Use useRef to capture the navbar-container element
  const navbarRef = useRef(null);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Function to handle scroll event
  const handleScroll = () => {
    const navbarHeight = navbarRef.current.clientHeight;
    const offsetTop = navbarRef.current.offsetTop;

    if (window.scrollY > offsetTop + navbarHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  // Add scroll event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  return (
    <>
      <div className={`navbar-container ${isSticky ? "sticky" : ""}`}>
        <BootstrapNavbar
          expand="lg"
          className="navbar-container"
          ref={navbarRef}
        >
          <Container className="containernav">
            <BootstrapNavbar.Brand href="#home">
              <img src={logo} alt="" className="logoimg" />
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={toggleMenu}
            />
            <BootstrapNavbar.Collapse
              id="basic-navbar-nav"
              className={`${menuOpen ? "show" : ""}`}
            >
              <Nav className="ml-auto justify-content-between align-items-center  LinkForMobile">
                <Nav.Link
                  as={HashLink}
                  smooth
                  to="#home"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={HashLink}
                  smooth
                  to="#services"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  as={HashLink}
                  smooth
                  to="#how-we-work"
                  onClick={() => setMenuOpen(false)}
                >
                  How we work?
                </Nav.Link>
                <Nav.Link
                  as={HashLink}
                  smooth
                  to="#about"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Nav.Link>
                <Nav.Link className="ContactUS"
                as={HashLink}
                smooth
                to='#about'
                >
                  <Button xs="auto"
                    name="Contact us"
                    bgcolor="#2A6877"
                    color="#FFFFFF"
                    onClick={() => setMenuOpen(false)}
                  />
                </Nav.Link>
              </Nav>
            </BootstrapNavbar.Collapse>
          </Container>
        </BootstrapNavbar>
      </div>
      {/* *********************** */}
      <div id="home">
        <Home />
      </div>
      <div id="services">
        <OurServices />
      </div>
      <div id="how-we-work">
        <HowWeWork />
      </div>
      <div id="about">
        <AboutUs  />
      </div>
    </>
  );
};

export default Navbar;
