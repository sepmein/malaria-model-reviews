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
            href="#Model"
            onClick={() => {
              this.props.click("model");
            }}
          >
            Model
          </Nav.Link>
          <Nav.Link
            href="#Paper"
            onClick={() => {
              this.props.click("paper");
            }}
          >
            Paper
          </Nav.Link>
          <Nav.Link
            href="#Vector"
            onClick={() => {
              this.props.click("vector");
            }}
          >
            Vector
          </Nav.Link>
          <Nav.Link
            href="#Intervention"
            onClick={() => {
              this.props.click("intervention");
            }}
          >
            Intervention
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
