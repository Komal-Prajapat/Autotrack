import React from "react";
import "./index.css";
import homeimg from "../../assets/homeimage.svg";
import ButtonCom from "../../components/Button";
import { Button, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
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
        justifyContent:"Center",
        justifyItems:"Center",
        display:"flex"
      }}>
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
              color: "rgba(42, 104, 119, 1)",
              fontWeight: "700",
             
            }}
            
          >
         Quick and Easy Loan options for Car Dealers to serve car buyers
          </h1>
          <p
            style={{
              color: "#424545",
              lineHeight: "23.44px",
              fontSize: "18px",
              fontWeight: "400",
             letterSpacing:"0.5px",
             marginTop:"16px"
            
            }}
          >
           Our enterprise SaaS platform offers a hassle-free and streamlined financing experience, providing Car Dealers with the Finance Partner options to fund their customers need in a timely manner to meet the financial requirements. Get started
          </p>
        <button className="getStartedbtn"> Get started</button>
        </Col>

        {/* Right Side Image */}
        <Col xs={12} sm={12} md={6} lg={4} xl={5}
          style={{
        justifyContent:"Center",
        justifyItems:"Center",
        display:"flex"
      }}>
          <img src={homeimg} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
