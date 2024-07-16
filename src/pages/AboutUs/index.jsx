import React from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import about from "../../assets/about.svg";
import ButtonCom from "../../components/Button/index";
import "./index.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const validationSchema = Yup.object().shape({
  yourName: Yup.string()
    .required("Your Name is required"),
  dealerName: Yup.string()
    .required("Dealer Name/Bank Name is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Phone Number is required"),
  emailAddress: Yup.string()
    .email("Invalid email address")
    .required("Email Address is required"),
});

const AboutUsPage = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Log the form values to console
    console.log(values);

    // Example of what you might do next:
    // Call an API, update state, etc.

    setSubmitting(false);
  };

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
                color: "var(--colorDarblack)",
                fontWeight: "400",
                fontSize: "var(--medium)",
                fontFamily: "var(--font-family-dm-sans)",
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
            <Formik
              initialValues={{
                yourName: "",
                dealerName: "",
                phoneNumber: "",
                emailAddress: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <FormikForm
                  style={{
                    borderRadius: "20px",
                    background: "white",
                    paddingLeft: "45px",
                    paddingRight: "45px",
                    paddingTop: "47px",
                    paddingBottom: "47px",
                  }}
                  className="aboutForm"
                  onSubmit={handleSubmit}
                >
                  <Form.Group controlId="yourName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="yourName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.yourName}
                      isInvalid={touched.yourName && !!errors.yourName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.yourName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="dealerName">
                    <Form.Label>Dealer Name/Bank Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="dealerName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.dealerName}
                      isInvalid={touched.dealerName && !!errors.dealerName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.dealerName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phoneNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                      isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phoneNumber}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="emailAddress">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="emailAddress"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.emailAddress}
                      isInvalid={touched.emailAddress && !!errors.emailAddress}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.emailAddress}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-flex justify-content-center">
                  <ButtonCom type="button" name="SEND" margin_top="20px" disabled={isSubmitting}></ButtonCom>

                  </div>
                </FormikForm>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsPage;
