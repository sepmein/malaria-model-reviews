import { gql } from '@apollo/client'

const QUERY_HOME = gql`
  query HomeQuery {
    papers_aggregate {
      aggregate {
        count(columns: id)
      }
    }
    vectors_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`

const QUERY_PAPERS = gql`
  query GetPapers {
    papers(order_by: { created_at: desc }) {
      id
      publish_at
      title
      updated_at
      url
      created_at
    }
  }
`

const QUERY_VECTORS = gql`
  query GetVectors {
    vectors(order_by: { species_name: desc }) {
      id
      species_name
    }
  }
`

export { QUERY_HOME, QUERY_PAPERS, QUERY_VECTORS }
