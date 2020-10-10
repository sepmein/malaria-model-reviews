import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header/Header";
import Papers from "./Papers/Papers";
let content_switcher = 1;

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Papers></Papers>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
