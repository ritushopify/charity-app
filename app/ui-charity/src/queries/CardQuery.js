import gql from "graphql-tag";

const CARD_QUERY = gql`
  query {
    card {
      blurb
      message
    }
  }
`;

export { CARD_QUERY };
