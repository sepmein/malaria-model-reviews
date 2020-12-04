import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { useQuery } from '@apollo/client'
import { QUERY_HOME } from '../graphql/Queries'

function Home () {
  const { loading, error, data } = useQuery(QUERY_HOME)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <div>
      <Jumbotron>
        <h1>Malaria Modeling</h1>
        <p>This project is for better understanding.</p>
        <p>Papers included: {data.paper_aggregate.aggregate.count}</p>
        <p>Vectors incluede: {data.vector_aggregate.aggregate.count}</p>
      </Jumbotron>
      <h2>Model</h2>
      <h3>Compartmental</h3>
      <p>TODO definition of compartmental model</p>
      <h3>Stochastic</h3>
      <div>
        <h2>Parameters</h2>
        <p>
          A parameter has such property: Core value to describe, Conditions is
          related to individual, is related to time,{' '}
        </p>
        <p>Types of parameters:</p>
        <ul>
          <li>Proportion</li>
          <li>Duration</li>
          <li>Rate</li>
          <li>Probability</li>
          <li>None</li>
        </ul>
        <p>
          if it's an proportion, then the parameter was a part of father
          parameter. if it's an duration type, then the parameter should have
          the duration unit, e.g., days or years. This types of parameter could
          been overlapped with each other.
        </p>
        <p></p>
      </div>
    </div>
  )
}

export default Home
