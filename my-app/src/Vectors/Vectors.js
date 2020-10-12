import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import VectorList from "./List";

class Vectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "vector",
    };
  }
  handleClick(i) {}
  render() {
    return (
      <Row>
        <Col xs={2}>
          <ListGroup>
            <ListGroup.Item onClick={() => this.handleClick("species")}>
              Species
            </ListGroup.Item>
            <ListGroup.Item onClick={() => this.handleClick("endophily")}>
              endophily
            </ListGroup.Item>
            <ListGroup.Item onClick={() => this.handleClick("bites")}>
              bites
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => this.handleClick("extrinsic incubation period")}
            >
              extrinsic incubation period
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <VectorList />
        </Col>
      </Row>
    );
  }
}

export default Vectors;
