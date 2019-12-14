import gql from "graphql-tag";

const BLURB_MUTATION = gql`
  mutation updateBlurb($blurb: String!) {
    updateBlurb(input: { blurb: $blurb }) {
      status
    }
  }
`;

export { BLURB_MUTATION };
