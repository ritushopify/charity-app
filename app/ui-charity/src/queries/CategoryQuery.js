import gql from "graphql-tag";

const categoryQuery = gql`
  query {
    categories {
      apiId
      description
    }
  }
`;

export { categoryQuery };
