import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import application from "../../assets/application.svg";
import loan from "../../assets/loan.svg";
import chooseBank from "../../assets/chooseBank.svg";
import Disbursed from "../../assets/Disbursed.svg";
import two from "../../assets/number/two.svg";
import one from "../../assets/number/one.svg";
import three from "../../assets/number/three.svg";
import four from "../../assets/number/four.svg";
import "./index.css";

const HowWeWork = () => {
  return (
    <Container fluid id="howWeWork" className="p-lg-5 ">
      <h1
        className="text-center "
        style={{
          color: "rgba(42, 104, 119, 1)",
          fontWeight: "700",
        }}
      >
        How we works ?
      </h1>
      <div
        className="howtoworkRowdiv"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <p className="howtoworkRowP text-center " style={{}}>
          This is a process, how dealer salesmen support customers with Loan
          Options.
        </p>
      </div>
      <div className="m-lg-5">
        <Row className="align-items-center mb-4 mt-4">
          <Col
            xs={12}
            md={6}
            lg={5}
            xl={6}
            className="mb-md-0 mb-4 px-md-0 p-5 d-flex justify-content-center "
          >
            <Image
              src={application}
              alt="Application Icon "
              fluid
              className="justify-content-end"
            />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={7}
            xl={6}
            className="px-md-0 pl-lg-5 justify-content-center"
          >
            <Image src={one}></Image>
            <h2 className="howtoworkRowHeading mx-5">Application</h2>
            <p className="howtoworkRowP mx-5">
              Dealer salesmen collect borrowers details and submits a loan
              application to the connected banks on Platform A Salesmen App. The
              application includes personal and financial information, such as
              income, employment type/history, loan amount, loan tenor, LTV, and
              Car details.
            </p>
          </Col>
        </Row>

        {/* ******************** 2 ********************* */}
        <Row className="align-items-center mb-4">
          <Col
            xs={12}
            md={6}
            lg={5}
            xl={6}
            className="mb-md-0 mb-4 order-md-2 px-md-0 pr-lg-5 justify-content-center d-flex"
          >
            <Image src={loan} alt="Loan Icon" fluid />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={7}
            xl={6}
            className="order-md-1 px-md-0 pl-lg-5"
          >
            <Image src={two}></Image>
            <h2 className="howtoworkRowHeading mx-5">Loan Processing</h2>
            <p className="howtoworkRowP mx-5">
              Multiple Bank check the eligibility and Provides Approval with
              letter on the Platform A Bank Portal which is further notified on
              the Salesmen App.
            </p>
          </Col>
        </Row>

        {/* ********************3************************* */}
        <Row className="align-items-center mb-4 ">
          <Col
            xs={12}
            md={6}
            lg={5}
            xl={6}
            className="mb-md-0 mb-4 px-md-0 pr-lg-5 justify-content-center d-flex"
          >
            <Image src={chooseBank} alt="Choose Bank Icon" fluid />
          </Col>
          <Col xs={12} md={6} lg={7} xl={6} className="px-md-0 pl-lg-5">
            <Image src={three}></Image>
            <h2 className="howtoworkRowHeading mx-5">Choose Bank</h2>
            <p className="howtoworkRowP mx-5">
              Dealer Salesmen confirm with customers on the finance options
              approved and proceed with chosen Bank option to confirm the
              Approved Loan application to the Bank Partner
            </p>
          </Col>
        </Row>

        {/* *******************4********* */}

   
        <Row className="align-items-center mb-4">
          <Col
            xs={12}
            md={6}
            lg={5}
            xl={6}
            className="mb-md-0 mb-4 order-md-2 px-md-0 pr-lg-5 justify-content-center d-flex"
          >
            <Image src={Disbursed} alt="Loan Icon" fluid />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={7}
            xl={6}
            className="order-md-1 px-md-0 pl-lg-5"
          >
            <Image src={four}></Image>
            <h2 className="howtoworkRowHeading mx-5">Disbursed</h2>
            <p className="howtoworkRowP mx-5">
            After borrower register the car and submit original registration to bank, bank disburse loan to the Dealer.
            </p>
          </Col>
        </Row>

      </div>
    </Container>
  );
};

export default HowWeWork;
