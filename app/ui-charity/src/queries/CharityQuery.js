import gql from "graphql-tag";

const categoryQuery = gql`
  query {
    categories {
      categoryId
      description
    }
  }
`;

export { categoryQuery };
