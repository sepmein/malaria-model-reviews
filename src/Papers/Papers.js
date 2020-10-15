import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_PAPERS } from "../graphql/Queries";

function Papers() {
  const { loading, error, data } = useQuery(QUERY_PAPERS);
  let incremental_id = 1;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>publish date</th>
          <th>link</th>
        </tr>
      </thead>
      <tbody>
        {data.papers.map(({ id, title, publish_at, url }) => (
          <tr key={id}>
            <td>{incremental_id++}</td>
            <td>{title}</td>
            <td>{publish_at}</td>
            <td>
              <a href={url}>@</a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Papers;
