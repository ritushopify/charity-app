import React, { useCallback } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import { Navigation } from "@shopify/polaris";
import { HomeMajorMonotone } from "@shopify/polaris-icons";

const CAT_QUERY = gql`
  query {
    categories {
      categoryId
      description
    }
  }
`;

export default function GetCategories2() {
  const { loading, error, data } = useQuery(CAT_QUERY);
  if (loading) return "Loading...";
  if (error) {
    console.log("error is " + error);
    return `Error! ${error.message}`;
  }
  console.log("data is" + data.categories);
  return data.categories;
}
