import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Shopify</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{marginLeft:'auto'}}>
              <Nav.Link href="/cart"><i className="fas fa-shopping-cart px-2"></i>Cart</Nav.Link>
              <Nav.Link href="/login"><i className="fas fa-user px-2"></i>Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse> 
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
