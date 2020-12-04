import React from 'react'
import { Table } from 'react-bootstrap'
import { useQuery } from '@apollo/client'
import { QUERY_PAPERS } from '../graphql/Queries'

function Papers () {
  const { loading, error, data } = useQuery(QUERY_PAPERS)
  let incrementalId = 1
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
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
        {data.paper.map(
          ({ paper_uid: paperUid, title, publish_at: publishAt, url }) => (
            <tr key={paperUid}>
              <td>{incrementalId++}</td>
              <td>{title}</td>
              <td>{publishAt}</td>
              <td>
                <a href={url}>@</a>
              </td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  )
}

export default Papers
