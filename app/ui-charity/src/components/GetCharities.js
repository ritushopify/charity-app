import React from "react";
//import { charityQuery } from "../queries/CharityQuery";
//import { useQuery } from "@apollo/react-hooks";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default function getCharities(id) {
  console.log("id in getCharities is " + id);
  const QUERY_CHARITIES = gql`
    query GetCharities($apiId: String) {
      charitiesForCategory(apiId: apiId) {
        name
        url
        city
        state
      }
    }
  `;

  return (
    <Query query={QUERY_CHARITIES} variables={id}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        console.log(data.charities);
        return data.charities;
      }}
    </Query>
  );
}
