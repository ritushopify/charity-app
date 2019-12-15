import gql from "graphql-tag";

const UPDATE_CARD_MUTATION = gql`
  mutation updateCard($id: String!, $blurb: String, $message: String) {
    updateCard(
      input: { cardInput: { id: $id, blurb: $blurb, message: $message } }
    ) {
      status
    }
  }
`;

export { UPDATE_CARD_MUTATION };
