import React, { useCallback } from "react";
import { Navigation } from "@shopify/polaris";
import {
  ArrowLeftMinor,
  HomeMajorMonotone,
  OrdersMajorTwotone
} from "@shopify/polaris-icons";

import Categories from "./Categories";

export default function NavigationMarkup() {
  const categorySelected = useCallback(value => {
    console.log("Selected category " + value);
  }, []);

  return (
    <Navigation location="/">
      <Categories />
      <Navigation.Section
        items={[
          {
            label: "Back to Shopify",
            icon: ArrowLeftMinor
          }
        ]}
      />
      <Navigation.Section
        separator
        title="Categories"
        items={[
          {
            url: "/Environment",
            label: "Environment",
            icon: HomeMajorMonotone,
            onClick: categorySelected
          },
          {
            label: "Animals",
            icon: OrdersMajorTwotone,
            onClick: categorySelected
          }
        ]}
      />
    </Navigation>
  );
}
