import React from 'react'
import { Table } from 'react-bootstrap'
import { useQuery } from '@apollo/client'
import { QUERY_VECTORS } from '../graphql/Queries'

function VectorList () {
  const { loading, error, data } = useQuery(QUERY_VECTORS)
  // eslint-disable-next-line camelcase
  let incrementalId = 1
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>species</th>
        </tr>
      </thead>
      <tbody>
        {data.vector.map(({ vector_uid: id, species_name: speciesName }) => (
          <tr key={id}>
            <td>{incrementalId++}</td>
            <td>{speciesName}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default VectorList
