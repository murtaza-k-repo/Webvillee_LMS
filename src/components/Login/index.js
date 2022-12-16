import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "./index.css";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Utility/LoadingSpinner";

const Login = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();

  const navigate = useNavigate();

  const user = useSelector((state) => state.userReducer.user);

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha("+" + number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      console.log(err);
      setError("Please verify the Recaptha!");
    }
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      result
        .confirm(otp)
        .then(() => navigate("/", { replace: true }))
        .catch((err) => {
          setError("Invalid OTP! Please try again...");
        });
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  });

  return !user ? (
    <Container className="centerElement">
      <Row className="justify-content-center">
        <Col lg={5}>
          <Card style={{ display: !flag ? "block" : "none" }}>
            <Card.Header>
              <h4>Login</h4>
            </Card.Header>

            <Form onSubmit={getOtp}>
              <Card.Body>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  {error && (
                    <Alert
                      variant="danger"
                      onClose={() => setError("")}
                      dismissible
                    >
                      {error}
                    </Alert>
                  )}
                  <Form.Group controlId="formBasicEmail">
                    <PhoneInput
                      country={"in"}
                      value={number}
                      onChange={setNumber}
                      placeholder="Enter Phone Number"
                    />
                    <div id="recaptcha-container" className="mt-3"></div>
                  </Form.Group>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="button-right">
                  <Button type="submit" variant="primary">
                    Send OTP
                  </Button>
                </div>
              </Card.Footer>
            </Form>
          </Card>
          <Card style={{ display: flag ? "block" : "none" }}>
            <Card.Header>
              <h4>Webvillee LMS</h4>
            </Card.Header>

            <Form onSubmit={verifyOtp}>
              <Card.Body>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  {error && (
                    <Alert
                      variant="danger"
                      onClose={() => setError("")}
                      dismissible
                    >
                      {error}
                    </Alert>
                  )}
                  <Form.Group className="mb-3" controlId="formBasicOtp">
                    <Form.Control
                      type="otp"
                      placeholder="Enter OTP"
                      onChange={(e) => setOtp(e.target.value)}
                      className={"text-center "}
                    />
                  </Form.Group>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="button-right">
                  <Link to="/">
                    <Button variant="secondary">Cancel</Button>
                  </Link>
                  &nbsp;
                  <Button type="submit" variant="primary">
                    Verify
                  </Button>
                </div>
              </Card.Footer>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  ) : (
    <LoadingSpinner />
  );
};

export default Login;
