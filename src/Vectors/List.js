import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_VECTORS } from "../graphql/Queries";

function VectorList() {
  const { loading, error, data } = useQuery(QUERY_VECTORS);
  let incremental_id = 1;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>species</th>
        </tr>
      </thead>
      <tbody>
        {data.vectors.map(({ id, species_name }) => (
          <tr key={id}>
            <td>{incremental_id++}</td>
            <td>{species_name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default VectorList;
