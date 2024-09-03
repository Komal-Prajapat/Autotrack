
// import React, { useState, useEffect, useRef } from "react";
// import { HashLink } from "react-router-hash-link";
// import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
// import logo from "../../assets/logo.png";
// import Button from "../Button";
// import "./index.css";
// import { useNavigate } from "react-router-dom";

// const HeaderMain = ({services}) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const navbarRef = useRef(null);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleScroll = () => {
//     const navbarHeight = navbarRef.current.clientHeight;
//     const offsetTop = navbarRef.current.offsetTop;

//     setIsSticky(window.scrollY > offsetTop + navbarHeight);
//   };

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (navbarRef.current && !navbarRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleHome = () => {
//     navigate("/");
//     // Optional: Smooth scroll to top of the page
//     // window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className={`navbar-container ${isSticky ? "sticky" : ""}`}>
//       <BootstrapNavbar expand="lg" ref={navbarRef} className="navbar-container">
//         <Container className="containernav">
//           <BootstrapNavbar.Brand>
//             <img
//               src={logo}
//               alt="Logo"
//               className="logoimg"
//               onClick={handleHome}
//             />
//           </BootstrapNavbar.Brand>
//           <BootstrapNavbar.Toggle
//             aria-controls="basic-navbar-nav"
//             onClick={toggleMenu}
//           />
//           <BootstrapNavbar.Collapse
//             id="basic-navbar-nav"
//             className={`${menuOpen ? "show" : ""}`}
//           >
//             <Nav className="ml-auto justify-content-between align-items-center LinkForMobile">
//               <Nav.Link  smooth     onClick={handleHome}>
//                 Home
//               </Nav.Link>
//               <Nav.Link  smooth   id="#services" onClick={handleHome}>
//                 Services
//               </Nav.Link>
//               <Nav.Link  smooth       onClick={handleHome}>
//                 How we work?
//               </Nav.Link>
//               <Nav.Link  smooth     onClick={handleHome}>
//                 About Us
//               </Nav.Link>
            //   <Nav.Link
            //     className="ContactUS"
                
            //     smooth
            //         onClick={handleHome}
            //   >
            //     <Button
            //       xs="auto"
            //       name="Contact us"
            //       bgcolor="#2A6877"
            //       color="#FFFFFF"
            //     />
            //   </Nav.Link>
//             </Nav>
//           </BootstrapNavbar.Collapse>
//         </Container>
//       </BootstrapNavbar>
//     </div>
//   );
// };

// export default HeaderMain;








import React, { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import Button from "../Button";
import "./index.css";
import { useNavigate } from "react-router-dom";

const HeaderMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const navbarHeight = navbarRef.current.clientHeight;
    const offsetTop = navbarRef.current.offsetTop;
    setIsSticky(window.scrollY > offsetTop + navbarHeight);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (path, id) => {
    if (path) {
      navigate(path);
    }
    if (id) {
      // Delay scrolling to ensure the page has loaded
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setMenuOpen(false); // Close the menu if open
  };

  return (
    <div className={`navbar-container ${isSticky ? "sticky" : ""}`}>
      <BootstrapNavbar expand="lg" ref={navbarRef} className="navbar-container">
        <Container className="containernav">
          <BootstrapNavbar.Brand>
            <img
              src={logo}
              alt="Logo"
              className="logoimg"
              onClick={() => handleNavigation("/", "home")}
            />
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleMenu}
          />
          <BootstrapNavbar.Collapse
            id="basic-navbar-nav"
            className={`${menuOpen ? "show" : ""}`}
          >
            <Nav className="ml-auto justify-content-between align-items-center LinkForMobile">
              <Nav.Link onClick={() => handleNavigation("/", "home")}>
                Home
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigation("/", "services")}>
                Services
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigation("/", "how-we-work")}>
                How we work?
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigation("/", "about")}>
                About Us
              </Nav.Link>
              {/* <Nav.Link onClick={() => handleNavigation("/", "contact")}>
                <Button
                  xs="auto"
                  name="Contact us"
                  bgcolor="#2A6877"
                  color="#FFFFFF"
                />
              </Nav.Link> */}
                            <Nav.Link
                className="ContactUS"
                
                smooth
                onClick={() => handleNavigation("/", "about")}>
                <Button
                  xs="auto"
                  name="Contact us"
                  bgcolor="#2A6877"
                  color="#FFFFFF"
                />
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </div>
  );
};

export default HeaderMain;
