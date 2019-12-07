import gql from "graphql-tag";

const charityQuery = gql`
  query Charities($apiId: String) {
    charitiesForCategory(apiId: $apiId) {
      employerId
      name
      url
    }
  }
`;

export { charityQuery };
