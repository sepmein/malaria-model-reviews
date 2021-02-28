```mermaid
flowchart LR
%%{init: {'flowchart': {'useMaxWidth':false}}}%%
subgraph FOI_group [Force of Infection]

  subgraph Human_to_Mosquito
    delayGam((Parasites \n to \n Infectious \n gametocypes))
    FOIvijk[/"FOI \n H-->M \n with \n delay"/]
    FOIv[/FOI \n H->M/]
  end

  subgraph Mosquito_to_human 
    dE((Latent Period))
    FOI_lag((FOI_lag))
    FOI[/"FOI \n M-->H"/]
  end

  dE & FOI_lag --> FOI
  FOIvijk & delayGam --> FOIv
  %% b0 --> FOI_lag
  %%omega --> FOIvijk

end

subgraph EIR_group
  EIR
end
EIR --> FOI

subgraph immunity
  subgraph Immunity_Level_T1
    %%ICM_t1[Maternal \n Immunity] %% maternal
    ICA_t1[Immunity \n Previous Infection] %% previous infection
    %%IC_t1[Clinical \n Immunity] %% clinical immunity
    IB_t1[Infection \n Blocking] %% infection blocking, chances of preventing infection upon receiving infectious bites
    ID_t1[Detection \n Immunity] %% Detection immunity, immunity suppresses parasite densities and make it less likely been diagnostics
  end
  b("P(Infectious Bite --> Disease)")
end
IB_t1 & b --> FOI_lag
FOI --> ID_t1
FOI --> ICA_t1

subgraph 1_human [Human States]
  subgraph human_state_t1
    S_t1[Susceptible_t1]
    A_t1[Asymptomatic_t1]
    T_t1[Treated_t1]
    D_t1[Clear Disease_t1]
    U_t1[Subpatent_t1]
    %%P_t1[Prophylaxis_t1]
  end
  clin_inc[Number of New Cases]
end
FOI --> U_t1
FOI --> A_t1
FOI --> S_t1
FOI --> clin_inc
T_t1 & D_t1 & A_t1 & U_t1 --> FOIvijk

subgraph Intervention
  av_mosq[[Biting Rate \n on All Animal]]
end
av_mosq --> FOIvijk

subgraph Mosquito
  incv[Increased Susceptible \n Mosquito \n Per Unit Time]
end
FOIv --> incv

%% infectiousness from human to mosquito
subgraph infectiousness_h_m ["Infectiousness: Human --> Mosq"]
  cU[/"U-->Mosq"/]
  cD[/"D-->Mosq"/]
  cT[/"T-->Mosq"/]
  gamma1[/gamma1/]
  cA[/"A-->Mosq"/]
end
cU & cD & gamma1 --> cA

subgraph immunity
  p_det("P(Detection by Microscopy)")
end
p_det --> cA
cA & cT & cU & cD --> FOIvijk
```
