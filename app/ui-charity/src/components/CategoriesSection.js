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

export default function CategoriesSection() {
  const { loading, error, data } = useQuery(CAT_QUERY);
  if (loading) return "Loading...";
  if (error) {
    console.log("error is " + error);
    return `Error! ${error.message}`;
  }
  console.log("data is" + data.categories);
  const items = data.categories.map(category => {
    return {
      url: "charities",
      label: category.description,
      icon: HomeMajorMonotone
      //    onClick: selectedCategory(category.categoryId)
    };
  });
  return <Navigation.Section separator title="Categories" items={items} />;
}
