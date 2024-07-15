import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import footerlogo from "../../assets/footerlogo.svg";
import footerbg_ from "../../assets/footerbg_.jpeg";
import phone from "../../assets/icon/phone.svg";
import email from "../../assets/icon/email.svg";
import location from "../../assets/icon/location.svg";
import fb from "../../assets/icon/fb.svg";
import instagram from "../../assets/icon/instagram.svg";
import linkdin from "../../assets/icon/linkdin.svg";
import wp from "../../assets/icon/wp.svg";

const Footer = () => {
  return (
    <footer
      className=" py-5 footerContainer"
      style={{
        backgroundImage: `url(${footerbg_})`,
        backgroundSize: "cover",
        paddingLeft: "98px",
        paddingRight: "98px",
      }}
    >
      <Container>
        <img
          src={footerlogo}
          alt="Logo"
          style={{ maxWidth: "300px", height: "111.29px" }}
          className="footerlogo"
        />
        <Row>
          {/* Column 1 */}

          <Col xs={12} sm={6} md={4} lg={5} className="pt-3">
            <div className="d-flex text align-items-center ">
              <div className="">
                <p className=" LinkFooter ">
                  Our mission is to empower individuals and businesses by
                  providing them with the innovative financial process solutions
                  they need to achieve their goals.
                </p>
              </div>
            </div>
            <div className="mt-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link "
              >
                <img src={fb} alt="" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="social-link mx-2"
              >
                <img src={wp} alt="" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link mx-2"
              >
                <img src={linkdin} alt="" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link mx-2"
              >
                <img src={instagram} alt="" />
              </a>
            </div>
          </Col>

          {/* Column 2 */}
          <Col xs={12} sm={6} md={4} lg={3} className="">
          <span className="text-white pb-1"
            style={{
              borderBottom:"1px solid white ",
              width:"50%"
            }}
            >OUR SER</span><span className="text-white">VICES</span>
            
          
            <ul className="list-unstyled">
              <li className="LinkFooter mt-3">Bank Management</li>
              <li className="LinkFooter mt-3">Dealer Management</li>
              <li className="LinkFooter mt-3">Salesmen App</li>
              <li className="LinkFooter mt-3">Car loan Management</li>
            </ul>
          </Col>

          {/* Column 3 */}
          <Col xs={12} sm={6} md={4} lg={4} className="">
            <span className="text-white pb-1"
            style={{
              borderBottom:"1px solid white",
              width:"50%"
            }}
            >CONT</span><span className="text-white">ACT US</span>
            
            <ul className="list-unstyled ">
              <li className="d-flex mt-3">
                <div className="">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link "
                  >
                    <img src={phone} alt="" />
                  </a>
                </div>
                <a
                  href="tel:+84936527275"
                  className="LinkFooter mx-2"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  +84 936 527 275
                </a>
              </li>
              <li className=" d-flex mt-3 ">
                <div className="">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link "
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <img src={email} alt="" />
                  </a>
                </div>
                <a
                  href="mailto:business@platforma.vn"
                  className="LinkFooter mx-2"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  business@platforma.vn
                </a>
              </li>
              <li className=" d-flex mt-3">
                <div className="">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link "
                  >
                    <img src={location} alt="" />
                  </a>
                </div>
                <div className="LinkFooter mx-2">
                  The Hive Thao Dien
                  <br />
                  94 Xuan Thuy Street,
                  <br />
                  Thao Dien Ward, HCMC
                  <br />
                  Vietnam
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
