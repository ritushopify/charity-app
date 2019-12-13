import gql from "graphql-tag";

const cardQuery = gql`
  query {
    card {
      id
      blurb
      message
    }
  }
`;

export { cardQuery };
