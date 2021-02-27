```mermaid
stateDiagram-v2
  s: Mosquito Salivary Gland
  l: Liver Stage
  r: Red Blood Cell Cycle
  g: Gametocytes
  z: Zygote
  o: Oocyst
  sp: Sporozoites
  s --> l
  l --> r 
  r --> r
  r --> g
  g --> z
  z --> o
  o --> sp
  sp --> s
```
