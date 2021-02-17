```mermaid
flowchart LR
%%{init: {'flowchart': {'useMaxWidth':false}}}%%
%% EIR
subgraph EIR_group [Entomology Innoculation Rate]
  foi_age[/FOI for age group/]
  rel_foi[[Rate FOI]]
  foi_age & rel_foi --> EIR
  %%omega -->EIR
end

subgraph Mosquito
  Iv[Infectious Mosquito]
end

Iv --> EIR

subgraph Intervention
av_human[[Biting Rate \n on Humans \n in each int. cat.]]
end

av_human --> EIR
  subgraph immunity
    subgraph Immunity_Level_T1
      ICM_t1[Maternal \n Immunity] %% maternal
      ICA_t1[Immunity \n Previous Infection] %% previous infection
      IC_t1[Clinical \n Immunity] %% clinical immunity
      IB_t1[Infection \n Blocking] %% infection blocking, chances of preventing infection upon receiving infectious bites
      ID_t1[Detection \n Immunity] %% Detection immunity, immunity suppresses parasite densities and make it less likely been diagnostics
    end
end

EIR --> IB_t1

subgraph FOI_group [Force of Infection]
  subgraph Mosquito_to_human 
    FOI_lag((FOI_lag))
  end
end

EIR --> FOI_lag
```

