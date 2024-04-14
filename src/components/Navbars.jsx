import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Statue from "../img/statua.jpg";
import Image from "react-bootstrap/Image";

function Navbars() {
  const expand = false;
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className="bg-body-tertiary bg-opacity-75  Navbar-container"
      >
        <Container fluid>
          <Navbar.Brand href="/Home">New York</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton className="offCanvas-header">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Image
                  src={Statue}
                  style={{
                    maxWidth: "9rem",
                    border: "5px solid black",
                    borderRadius: "50%",
                  }}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
                <NavDropdown
                  title="Info"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item>Contatti</NavDropdown.Item>
                  <NavDropdown.Item>Linkedin</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item disabled>Admin@admin.com</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
