import gql from "graphql-tag";

const CARD_QUERY = gql`
  query {
    card {
      id
      blurb
      message
    }
  }
`;

export { CARD_QUERY };
