import gql from "graphql-tag";

const charityQuery = gql`
  query charitiesForCategory($apiId: String!) {
    charitiesForCategory(apiId: $apiId) {
      employerId
      name
      url
      city
      state
      categoryName
    }
  }
`;

export { charityQuery };
