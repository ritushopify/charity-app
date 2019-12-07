import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Navigation } from "@shopify/polaris";
import { HomeMajorMonotone } from "@shopify/polaris-icons";
import { categoryQuery } from "../queries/CategoryQuery";

export default function CategoriesSection() {
  const { loading, error, data } = useQuery(categoryQuery);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  {
    console.log("in categories, data was " + data);
  }
  const categories = data.categories;
  const items = categories.map(category => {
    return {
      url: "/charities/" + category.apiId,
      label: category.description,
      icon: HomeMajorMonotone,
      exactMatch: false
    };
  });
  return <Navigation.Section separator title="Categories" items={items} />;
}
