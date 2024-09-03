import React from "react";
import "./index.css";
import homeimg from "../../assets/homeimage.svg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderMain from "../../components/Header/headerMain";

const Home = () => {
  return (
  <>
  {/* <HeaderMain/> */}
    <Container
      className="homePageContainer "
      style={{
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      {/* Left Side Content */}
      <Row
        style={{
          justifyContent: "Center",
          justifyItems: "Center",
          display: "flex",
        }}
      >
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={7}
          xl={7}
          className="text-left text-md-left"
        >
          <h1
            className="h1-responsive homeheading"
            style={{
              color: "var(--colorprimary)",
              fontWeight: "700",
            }}
          >
            Quick and Easy Loan options for Car Dealers to serve car buyers
          </h1>
          <p
            style={{
              color: "var(--colorblack)",
              lineHeight: "23.44px",
              fontSize: "var(--small)",
              fontWeight: "400",
              letterSpacing: "0.5px",
              marginTop: "16px",
              fontFamily: "var(--font-family-dm-sans)",
            }}
          >
            Our enterprise SaaS platform offers a hassle-free and streamlined
            financing experience, providing Car Dealers with the Finance Partner
            options to fund their customers need in a timely manner to meet the
            financial requirements. Get started
          </p>
          <Link    to="#GetStarted">
          <button className="getStartedbtn"> Get started</button>
          </Link>
        </Col>

        {/* Right Side Image */}
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={5}
          style={{
            justifyContent: "Center",
            justifyItems: "Center",
            display: "flex",
          }}
        >
          <img src={homeimg} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default Home;
