import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import VectorList from "./List";
import { MosquitoFeedingCycle } from "../Mermaid/Models";

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
          <h4>Mosquito Feeding Cycle</h4>
          <MosquitoFeedingCycle />
          <div>
            The time distribution of biting in a day(with LLINs / without LLINs)
          </div>
          <div>The location distribution of biting(indoor/outdoor)</div>
          extrinsic incubation period Resistance
          <p>Phenotypic Plasticity:</p>
          behaviour resistance: shifts from nocturnal towards crespula
          <p>
            Behavioural resistance: behaviour-related ability to be unaffected
            by something. If there is genetic basis for it, then the species
            will evole under selective pressure.
          </p>
          <VectorList />
        </Col>
      </Row>
    );
  }
}

export default Vectors;
