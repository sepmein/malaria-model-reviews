```mermaid
stateDiagram-v2
  h: Host-seeking
  e: Host encountered
  b: Biting
  r: Resting
  o: ovipositing
  h --> e
  e --> b
  b --> r
  r --> o
  o --> h
```
