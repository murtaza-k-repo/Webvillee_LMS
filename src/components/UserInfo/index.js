import React from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Image,
  Form,
  Button,
} from "react-bootstrap";

const UserInfo = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} md={6} lg={4}>
          <Card className="centerElement" style={{ width: "inherit" }}>
            <Card.Body>
              <Card.Title>
                <h4 className="mb-4">Profile</h4>
              </Card.Title>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicfName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiclName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMobile">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="tel" value={"9685741245"} disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email Address"
                  />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserInfo;
