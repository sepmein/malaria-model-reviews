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

const mosquito_feeding_cycle = `
  stateDiagram-v2
    state vector {
      [*] --> mosquito
      mosquito --> animal_blood: 1 - HBI
      mosquito --> human: HBI
      human --> with_ITN
      human --> without_ITN
      with_ITN --> Survived
      with_ITN --> [*]: Death Rate
      state join_resting <<join>>
      without_ITN --> join_resting
      join_resting --> resting_and_oviposition
      animal_blood --> join_resting
      with_ITN --> join_resting
      Survived --> join_resting
      resting_and_oviposition --> mosquito: repeat
    }
`;

function ModelMermaid() {
  return <Mermaid id="graph1" content={graph} />;
}

function MosquitoFeedingCycle() {
  return (
    <Mermaid
      id="moquito_feeding_cycle_mermaid"
      content={mosquito_feeding_cycle}
    />
  );
}
export { ModelMermaid, MosquitoFeedingCycle };
