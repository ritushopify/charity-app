import React from "react";
import { charityQuery } from "../queries/CharityQuery";
import { useQuery } from "@apollo/react-hooks";
// import { Query } from "react-apollo";
import gql from "graphql-tag";

export default function getCharityItems(apiId) {
  const { loading, error, data } = useQuery(charityQuery, {
    variables: { apiId: apiId }
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const charityItems = data.charities.map(charity => {
    return {
      id: charity.id,
      name: charity.name,
      url: charity.url
    };
  });
}
