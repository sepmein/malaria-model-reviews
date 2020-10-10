import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Malaria Modeling</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Models">Models</Nav.Link>
        <Nav.Link href="#papers">Papers</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Header;
