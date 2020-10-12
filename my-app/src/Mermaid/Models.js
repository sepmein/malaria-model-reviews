import React from "react";
import Mermaid from "./Mermaid";

// mermaid diagrams

const graph = `
    stateDiagram-v2
        state Human {
        Susceptible --> Infected
        Infected --> Treated
        Infected --> Disease
        Disease --> Asymtomatic
        Asymtomatic --> Subpatent
        Subpatent --> Asymtomatic
        Subpatent --> Susceptible
        Subpatent --> Infected
        Asymtomatic --> Infected
        Treated --> Prophylatic
        Prophylatic --> Susceptible
    }
`;

function ModelMermaid() {
  return <Mermaid id="graph1" content={graph} />;
}

export default ModelMermaid;
