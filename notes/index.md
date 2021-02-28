# Vector resistance
## Vector bioassay
1. discriminating bioassay
definition
data structure

2. intensity bioassay
definition
data structure

## Modelling the vector resistance level

In paper: IRS sysmetatic review, the level of pyrethroid resistance in the mosquito population was described as follows:

$$I = 100 * ( 1 - x)$$

$x$ denote the proportion of mosquitoes dying in a standard pyrethroid discriminating dose bioassay. $I$ denotes the level of resistance. This formula means if the mortality rate of standard discriminating bioassay goes up then the level of resistance goes down. It's straitfoward to give such result. But is insufficient. The result of most standard bioassay in an high resistance level community will be 100%. The discriminating bioassay has limitations.

For a single mosquito, the outcome after contacting some intervention will only be survival and death. The possiblity of death follows *Bernoulli* distribution:

$$Mortality ~ Bernoulli(p)$$
or
$$P(X = k) = p^k p^(1-k)$$

Here, $p$ is the possibility of death. $p$ is affected by current factors:

1. The resistance level
2. The type of insecticide used
3. The concentration of insecticide

If we simplify the situation, suggest only one type of insecticide. Then the factors left for affecting the model is the resistance level of mosquito and the concentration.

If concentration of insecticide was further fixed for simplification. 

$$mortality_rate = f(R, E)$$



