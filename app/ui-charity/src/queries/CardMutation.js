import gql from "graphql-tag";

const cardMutation = gql`
  mutation update_card($id: ID!, $blurb: String) {
    updateCard(id: $id, update: { blurb: $blurb }) {
      succeess
    }
  }
`;

export { cardMutation };
