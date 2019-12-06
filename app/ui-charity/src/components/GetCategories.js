import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export default function GetCategories() {
  const CAT_QUERY = gql`
    query {
      categories {
        categoryId
        description
      }
    }
  `;

  const { error, data } = useQuery(CAT_QUERY);
  if (error) {
    console.log("error is " + error);
    return `Error! ${error.message}`;
  }

  return data.categories;
}
