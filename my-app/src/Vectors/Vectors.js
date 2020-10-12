import React from "react";
import { Row, Col, ListGroup, Badge } from "react-bootstrap";
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
      <div>
        <div className="row border bg-light text-dark sticky-top">
          <div className="col">
            <h2 className="display-3 text-center">Mosquito Feeding Cycle</h2>
            <button type="button" class="btn btn-outline-primary">
              LLINs
            </button>{" "}
            <button type="button" class="btn btn-outline-secondary">
              IRS(working)
            </button>
            <button type="button" class="btn btn-outline-info float-right">
              Papers <span class="badge badge-light">2</span>
            </button>
            <button type="button" class="btn btn-outline-dark float-right">
              Papameters
            </button>
            <MosquitoFeedingCycle />
            <div className="hide">
              <span class="badge badge-pill badge-primary">HBI</span>
              <span class="badge badge-pill badge-secondary">
                Host searching dates
              </span>
              <span class="badge badge-pill badge-success">Survival rate</span>
              <span class="badge badge-pill badge-danger">Resting dates</span>
            </div>
          </div>
        </div>
        {/* <Row>
          <Col>
            <Badge pill variant="primary">
              biting
            </Badge>
            <Badge pill>biting</Badge>
            <Badge pill>biting</Badge>
            <div>
              The time distribution of biting in a day(with LLINs / without
              LLINs)
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
        </Row> */}
      </div>
    );
  }
}

export default Vectors;
