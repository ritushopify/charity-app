import gql from "graphql-tag";

const cardQuery = gql`
  query {
    card {
      blurb
      message
    }
  }
`;

export { cardQuery };
