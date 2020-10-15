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
        <div className="row border bg-light text-dark p-3">
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
        <div className="row bg-dark text-white border p-3">
          <div className="row  mx-auto">
            <div className="col display-4 m-3">Behavioural Resistance</div>
          </div>
          <div className="row">
            {" "}
            <div className="col-4 text-center">
              <p>
                <strong>Against LLINs:</strong> Mosquitos tend to bite during
                when human are not under the nets. Mosquitoes shifts host
                searching from nocturnal towards crepuscular.
              </p>
              <p>
                The phenotypic plasticity may have a genetic basis. If the
                vector groups that tend to bite when user are not under the nets
                have a higher survival rates, then the alleles asociated with
                crepuscular biting will have a higher expression in the longer
                time.
              </p>
            </div>
            <div className="col-8">
              <h5 className="text-center text-white">
                Uniform exposure / Non-uniform exposure
              </h5>
              <div>
                <span class="badge badge-secondary float-left">LOW</span>
                <span class="badge badge-success float-right">HIGH</span>
                <p class="text-center">LLINs effectiveness</p>
              </div>
              <div class="progress">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="mt-3 mb-5">
                <span class="badge badge-info float-left">NON-Uniform</span>
                <span class="badge badge-info float-right">Uniform</span>
              </div>
              <div className="mt-3">
                <p>
                  - <strong>Non-Uniform</strong>: Mosquitos that bite during
                  times user are not under net survived and never try to bite
                  users under net again, hence no chance to contact LLINs again.
                </p>
                <p>
                  - <strong>Uniform</strong>: Mosquitos always have the same
                  stochastic probability to seek for a human blood, e.g.
                  compared to last time or last generation, survived mosquito
                  have the same tendencyto seek for human blood under the nets.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row .overflow bg-light border p-3">
          <div className="col">
            <p className="text-center">
              <strong>Vector Species List</strong>
            </p>
            <VectorList />
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
          </Col>
        </Row> */}
      </div>
    );
  }
}

export default Vectors;
