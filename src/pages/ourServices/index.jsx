import React from "react";
import service1 from "../../assets/logo/service1.svg";
import service2 from "../../assets/logo/service2.svg";
import service3 from "../../assets/logo/service3.svg";
import { Col, Container, Row } from "react-bootstrap";
import "./index.css";

const OurServices = () => {
  return (
    <Container
      fluid
      servicelogo
      className="OurservicesContainer"
      style={{
        background:
          "linear-gradient(100.33deg, rgba(201, 228, 222, 0.6) -36.88%, rgba(206, 228, 224, 0.463495) 21.99%, rgba(208, 228, 224, 0.414385) 30.82%, rgba(223, 227, 231, 0) 102.68%)",
      }}
    >
      <h1 className="componentHeading h1-responsive text-center m-5 pt-4">
        Our Services
      </h1>
      <Row className="justify-content-around serviceRow" >
        {/* Service 1 */}
        <Col xl={3} lg={4} md={5} sm={10} className="servicebox mr-sm-3  p-3">
          <img
            src={service1}
            alt=""
            className="img-fluid servicelogo pt-3 pb-3"
            style={{}}
          />
          <h1 className="text-center">Flexible Options</h1>
          <p className="text-center pt-1">
            Dealer/car buyers can choose the loan that fits better with their
            financing budget by loan simulator Find out their loan eligibility
            while they are shopping in dealership Able to choose the best
            financing options among multiple offers from partner banks online
          </p>
        </Col>

        {/* Service 2 */}
        <Col xl={3} lg={4} md={5} sm={10} className="servicebox p-3 ">
          <img
            src={service2}
            alt=""
            className="img-fluid servicelogo pt-3 pb-3"
          />
          <h1 className="text-center"> Finance Partners</h1>
          <p className="text-center  pt-1">
            All financing applications are exclusive for partner banks ID
            verification and E-KYC are done before banks receive loan
            applications and able to pre-screen based on bank criteria Banks can
            offer multiple financing options for upsell or cross sell
          </p>
        </Col>

        {/* Service 3 */}
        <Col xl={3} lg={4} md={5} sm={10} className="servicebox p-3">
          <img
            src={service3}
            alt=""
            className="img-fluid servicelogo pt-3 pb-3"
          />
          <h1 className="text-center">Dealer Management</h1>
          <p className="text-center pt-1">
            Centralized management of salesmen and loan applications Analytics
            for sales, process, banks and customers
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default OurServices;
