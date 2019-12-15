import gql from "graphql-tag";

const CATEGORY_QUERY = gql`
  query {
    categories {
      apiId
      description
    }
  }
`;

export { CATEGORY_QUERY };
