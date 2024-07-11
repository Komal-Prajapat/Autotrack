import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagramSquare,
  FaPhoneVolume,
} from "react-icons/fa";
import footerlogo from "../../assets/footerlogo.svg";
import footerbg_ from "../../assets/footerbg_.jpeg";
import "./index.css";
import { FaSquareTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline, MdPhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
const Footer = () => {
  return (
    <footer
      className=" py-5 footerContainer"
      style={{ backgroundImage: `url(${footerbg_})`, backgroundSize: "cover",
      paddingLeft:"98px",
      paddingRight:"98px",
      
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

          <Col xs={12} sm={6} md={4} lg={5} className="mt-3">
            <div className="d-flex text align-items-center juc">
              <div className="">
                <p className="ml-3 LinkFooter">
                Our mission is to empower individuals and  businesses by providing them with the innovative financial process solutions they need to achieve their goals.
                </p>
              </div>
            </div>
            <div className="mt-3 footericon">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link "
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link "
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link "
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagramSquare />
              </a>
            </div>
          </Col>

          {/* Column 2 */}
          <Col xs={12} sm={6} md={4} lg={3} className=" mt-3" >
            <h5 className="LinkFooter">OUR SERVICES</h5>
            <ul className="list-unstyled">
              <li className="LinkFooter">Bank Management</li>
              <li className="LinkFooter">Dealer Management</li>
              <li className="LinkFooter">Salesmen App</li>
              <li className="LinkFooter">Car loan Management</li>
            </ul>
          </Col>

          {/* Column 3 */}
          <Col xs={12} sm={6} md={4} lg={4} className="mt-3">
            <h5 className="text-white">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="d-flex">
                <div className=" footericon">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link "
                  >
                  <MdPhoneInTalk />
                  </a>
                </div>
                <a href="tel:+84936527275" className="LinkFooter mx-2"
                style={{
                  textDecoration:"none"
                }}
                >
                  +84 936 527 275
                </a>
              </li>
              <li className=" d-flex mt-3 ">
              <div className=" footericon">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link "
                    style={{
                  textDecoration:"none"
                }}
                  >
                   <MdOutlineMailOutline />
                  </a>
                </div>
                <a href="mailto:business@platforma.vn" className="LinkFooter mx-2"
                style={{
                  textDecoration:"none"
                }}>
                  business@platforma.vn
                  
                </a>
              </li>
              <li className=" d-flex mt-3">
              <div className=" footericon">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link "
                  >
                <CiLocationOn />
                  </a>
                </div>
               <div className="LinkFooter mx-2"> 
                The Hive Thao Dien
                <br />
                94 Xuan Thuy Street,
                <br />
                Thao Dien Ward, HCMC
                <br />
                Vietnam</div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
