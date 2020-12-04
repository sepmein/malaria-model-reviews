import { gql } from '@apollo/client'

const QUERY_HOME = gql`
  query MyQuery {
    paper_aggregate {
      aggregate {
        count(columns: paper_uid)
      }
    }
    vector_aggregate {
      aggregate {
        count(columns: vector_uid)
      }
    }
  }
`

const QUERY_PAPERS = gql`
  query GetPapers {
    paper(order_by: { created_at: desc }) {
      paper_uid
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
    vector(order_by: { species_name: desc }) {
      vector_uid
      species_name
    }
  }
`

export { QUERY_HOME, QUERY_PAPERS, QUERY_VECTORS }
