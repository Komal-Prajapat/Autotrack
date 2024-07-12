import React from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import about from "../../assets/about.svg";
import ButtonCom from "../../components/Button/index";
import './index.css'
const AboutUsPage = () => {
  return (
    <div
      style={{
        padding: "45px 47px 45px 47px",
        gap: "28px",
        background:
          "linear-gradient(100.33deg, rgba(201, 228, 222, 0.6) -36.88%, rgba(206, 228, 224, 0.463495) 21.99%, rgba(208, 228, 224, 0.414385) 30.82%, rgba(223, 227, 231, 0) 102.68%)",
      }}
      className="AboutContainer"
    >
      <Container fluid>
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col md={6} xs={12} lg={5} xl={6}>
            <h2 className="componentHeading">About Us</h2>
            <Image
              src={about}
              alt="About Us"
              fluid
              style={{
                height: "300px",
              }}
            />
            <p
              style={{
                marginTop: "24px",
              }}
            >
              Platform A - Your trusted platform of dealers and financial
              partners for Car loans. Platform A streamlined the process of
              financial approvals, competitive loan options, and personalized
              solutions designed to meet your unique needs. Empowering you to
              achieve your goals. Apply online to be a partner today!
            </p>
          </Col>

          <Col xs={12} md={6} lg={5} xl={6}>
            <Form
              style={{
                borderRadius: "20px",
                background: "white",
                paddingLeft: "45px",
                paddingRight: "45px",
                paddingTop: "47px",
                paddingBottom: "47px",
              }}
              className="aboutForm"
            >
              <Form.Group
                style={{
                  marginTop: "7px",
                }}
                controlId="yourName"
              >
                <Form.Label style={{
                  fontSize:"16px",
                  fontWeight:"400"
                  ,
                  lineHeight:"18.78px"
                }}> Your Name</Form.Label>
                <Form.Control
                  type="text"
                  style={{
                    border: "1px solid #756E6E",
                    borderRadius:"20px"
                  }}
                />
              </Form.Group>
              <Form.Group
                style={{
                  marginTop: "7px",
                }}
                controlId="dealerName"
              >
                <Form.Label style={{
                  fontSize:"16px",
                  fontWeight:"400"
                  ,
                  lineHeight:"18.78px"
                }}>Dealer Name/Bank Name</Form.Label>
                <Form.Control
                  type="text"
                  style={{
                    border: "1px solid #756E6E",
                    borderRadius:"20px"
                  }}
                />
              </Form.Group>
              <Form.Group
                style={{
                  marginTop: "7px",
                }}
                controlId="phoneNumber"
              >
                <Form.Label style={{
                  fontSize:"16px",
                  fontWeight:"400"
                  ,
                  lineHeight:"18.78px"
                }}>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  style={{
                    border: "1px solid #756E6E",
                    borderRadius:"20px"
                  }}
                />
              </Form.Group>
              <Form.Group
                style={{
                  marginTop: "7px",
                }}
                controlId="emailAddress"
              >
                <Form.Label style={{
                  fontSize:"16px",
                  fontWeight:"400"
                  ,
                  lineHeight:"18.78px"
                }}>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  style={{
                    border: "1px solid #756E6E",
                    borderRadius:"20px"
                  }}
                />
              </Form.Group>

              <ButtonCom
                name="Send"
                color="rgba(255, 255, 255, 1)"
                bgcolor="rgba(42, 104, 119, 1)"
                margin_top="20px"
              ></ButtonCom>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsPage;
