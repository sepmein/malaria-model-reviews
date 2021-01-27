# Immunity

```mermaid
flowchart LR
%%{init: {'flowchart': {'useMaxWidth':false}}}%%
    subgraph immunity

      %%subgraph immunity_decay_scale
        %%dCM[[Decay \n Maternal]]
        %%dCA[[Decay \n Clinical]]
        %%dID[[Decay \n Detection]]
        %%dB[[Decay \n Infection \n Blocking]]
        %%uB[/Scale \n Infection \n Blocking/]
        %%uCA[/Scale \n Clinical/]
        %%uD[/Scale \n ID/]
        %%PM[/immunity \n constant/]
      %%end

      subgraph Immunity_Level_T0
        ICM_t0[Maternal \n Immunity] %% maternal
        ICA_t0[Immunity \n Previous Infection] %% previous infection
        IC_t0[Clinical \n Immunity] %% clinical immunity
        IB_t0[Infection \n Blocking] %% infection blocking, chances of preventing infection upon receiving infectious bites
        ID_t0[Detection \n Immunity] %% Detection immunity, immunity suppresses parasite densities and make it less likely been diagnostics
      end

      subgraph Immunity_Level_T1
        ICM_t1[Maternal \n Immunity] %% maternal
        ICA_t1[Immunity \n Previous Infection] %% previous infection
        IC_t1[Clinical \n Immunity] %% clinical immunity
        IB_t1[Infection \n Blocking] %% infection blocking, chances of preventing infection upon receiving infectious bites
        ID_t1[Detection \n Immunity] %% Detection immunity, immunity suppresses parasite densities and make it less likely been diagnostics
      end

      %% phi
      phi("P(Clinical Infection)")
      
      %% b: probability of infection from a infectious bite
      b("P(Infectious Bite --> Disease)")

      %% probability of detection by microscopy
      p_det("P(Detection by Microscopy)")

      ICM_t0 & ICA_t0--> ICM_t1
      ICA_t0 --> ICA_t1
      ICM_t0 & ICA_t0 --> IC_t1
      IB_t0 --> IB_t1
      ID_t0 --> ID_t1

      %% immunity_decay_scale ==> level

      %% phi
      %% phi0[/phi0/] & phi1[/phi1/] & kC[/kC/] --> phi
      IC_t1 --> phi

      %% b0[/b0/] & b1[/b1/] & kB[/kB/] & IB0[/IB0/] --> b("P(Infectious Bite --> Disease)")
      IB_t0 --> b

      %% ID detection immunity

      %% aD[[aD] % fD0[[fD0]] % gammaD[[gammaD]] % d1[[d1]] % ID0[[ID0]] % kD[[kD]]
      %% fD0 & aD & gammaD --> fd
      %% d1 & fd & ID & ID0 & kD --> p_det
      ID_t0 --> p_det

end


subgraph FOI_group [Force of Infection]
  FOI[/"FOI \n M-->H"/]
 
  %% FOI
  %% EIR & IB & b --> FOI_lag((FOI_lag))
  %% b0 --> FOI_lag

  %%omega --> FOIvijk

  %% Force of infection from Human to Mosquito

end
b --> FOI
FOI --> ICA_t1
FOI --> ID_t1
IB_t1 --> FOI
  
subgraph human
  subgraph human_state_t1
    A_t1[Asymptomatic_t1]
  end
  clin_inc[Number of New Cases]

end
  
phi --> A_t1 & clin_inc
  
subgraph EIR_group [Entomology Innoculation Rate]
  %% EIR
  EIR
end
EIR --> IB_t1
```
