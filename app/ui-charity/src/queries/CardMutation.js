import gql from "graphql-tag";

const CARD_MUTATION = gql`
  mutation updateCard($id: String!, $blurb: String, $message: String) {
    updateCard(input: { id: $id, blurb: $blurb, message: $message }) {
      status
    }
  }
`;

export { CARD_MUTATION };
