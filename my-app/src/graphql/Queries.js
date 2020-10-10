import { gql } from "@apollo/client";

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
`;

export { QUERY_PAPERS };
