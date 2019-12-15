import gql from "graphql-tag";

const CHARITY_QUERY = gql`
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

export { CHARITY_QUERY };
