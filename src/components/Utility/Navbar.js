import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar as NavbarContainer,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

const Navbar = () => {
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
        <NavbarContainer.Brand href="#">Webvillee LMS</NavbarContainer.Brand>
        <NavbarContainer.Toggle aria-controls="navbarScroll" />
        <NavbarContainer.Collapse
          id="navbarScroll"
          className="justify-content-end"
        >
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Button onClick={handleLogout}>Logout</Button>
          </Nav>
        </NavbarContainer.Collapse>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
