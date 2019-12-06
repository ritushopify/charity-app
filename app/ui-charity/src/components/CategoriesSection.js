import React, { useCallback } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Navigation } from "@shopify/polaris";
import { HomeMajorMonotone } from "@shopify/polaris-icons";
import { categoryQuery } from "./CategoryQuery";

export default function CategoriesSection() {
  const { loading, error, data } = useQuery(categoryQuery);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const categories = data.categories;
  const items = categories.map(category => {
    return {
      url: "charities",
      label: category.description,
      icon: HomeMajorMonotone
    };
  });
  return <Navigation.Section separator title="Categories" items={items} />;
}
