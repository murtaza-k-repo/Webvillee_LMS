import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar as NavbarContainer,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import InitialsAvatar from "react-initials-avatar";
import "react-initials-avatar/lib/ReactInitialsAvatar.css";

const Navbar = ({ user, userInfo }) => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <NavbarContainer bg="light" expand="lg">
      <Container fluid>
        <NavbarContainer.Brand>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            Webvillee LMS
          </Link>
        </NavbarContainer.Brand>
        {user && (
          <div className="d-flex justify-content-end">
            <div className="me-2">
              <InitialsAvatar
                name={userInfo?.first_Name + " " + userInfo?.last_Name}
              />
            </div>
            <NavbarContainer.Toggle aria-controls="navbarScroll" />
            <NavbarContainer.Collapse id="navbarScroll">
              <Nav
                className="my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Button onClick={handleLogout}>Logout</Button>
              </Nav>
            </NavbarContainer.Collapse>
          </div>
        )}
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
