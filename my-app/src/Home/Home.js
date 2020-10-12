import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_HOME } from "../graphql/Queries";

function Home() {
  const { loading, error, data } = useQuery(QUERY_HOME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <Jumbotron>
        <h1>Malaria Modeling</h1>
        <p>This project is for better understanding.</p>
        <p>Papers included: {data.papers_aggregate.aggregate.count}</p>
        <p>Vectors incluede: {data.vectors_aggregate.aggregate.count}</p>
      </Jumbotron>
      <h2>Model</h2>
      <h3>Compartmental</h3>
      <p>TODO definition of compartmental model</p>
      <h3>Stochastic</h3>
    </div>
  );
}

export default Home;
