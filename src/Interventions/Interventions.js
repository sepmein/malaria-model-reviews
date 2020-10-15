import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

function Interventions() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2 className="display-3 text-center">LLINs</h2>
          <div>
            Distribution Strategy
            <span>01</span>coverage
          </div>
          <div>Economics</div>
          <div>
            <h4>Parameters</h4>
            <p>
              <span>01</span>
              The proportion of mosquito-host encounters that occur indoor
              during sleeping hours in the absense of bednets.
            </p>
            <p>
              <span>02</span>
              attrition curve: half life 4 years (TODO: add data and figure,
              related to papers)
            </p>
            <p>Often denoted as pai_i or pai_s</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-3 text-center">IRS</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="display-3 text-center">ACT</h2>
        </div>
      </div>
    </div>
  );
}

export default Interventions;
