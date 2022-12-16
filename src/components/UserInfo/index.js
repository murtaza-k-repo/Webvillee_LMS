import axios from "axios";
import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserInfo = ({ user }) => {
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userForm);

    try {
      await axios.post(
        `${process.env.REACT_APP_LMS_API}/create-user-info`,
        {
          uid: user?.uid,
          first_Name: userForm.firstName,
          last_Name: userForm.lastName,
          email_id: userForm.email,
          mobile_Number: user?.phoneNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      navigate("/", { replace: true });
    } catch (err) {
      setError(err?.response?.data?.msg);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} md={6} lg={4}>
          <Card className="centerElement" style={{ width: "inherit" }}>
            <Card.Body>
              <Card.Title>
                <h4 className="mb-4">Profile</h4>
              </Card.Title>

              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicfName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={userForm.firstName}
                    onChange={(e) =>
                      setUserForm({ ...userForm, firstName: e.target.value })
                    }
                    placeholder="Enter First Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiclName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={userForm.lastName}
                    onChange={(e) =>
                      setUserForm({ ...userForm, lastName: e.target.value })
                    }
                    placeholder="Enter Last Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMobile">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="tel" value={user?.phoneNumber} disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email Address"
                    value={userForm.email}
                    onChange={(e) =>
                      setUserForm({ ...userForm, email: e.target.value })
                    }
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
