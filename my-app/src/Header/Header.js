import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Malaria Modeling</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link
            href="#home"
            onClick={() => {
              this.props.click("home");
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#Models"
            onClick={() => {
              this.props.click("models");
            }}
          >
            Models
          </Nav.Link>
          <Nav.Link
            href="#papers"
            onClick={() => {
              this.props.click("papers");
            }}
          >
            Papers
          </Nav.Link>
          <Nav.Link
            href="#vectors"
            onClick={() => {
              this.props.click("vectors");
            }}
          >
            Vectors
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default Header;
