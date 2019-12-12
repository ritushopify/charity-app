import React from "react";
import { Navigation } from "@shopify/polaris";
import { HomeMajorMonotone } from "@shopify/polaris-icons";

import CategoriesSection from "./categories/CategoriesSection";

export default function NavigationMarkup() {
  return (
    <Navigation location="/">
      <Navigation.Section
        separator
        items={[
          {
            url: "/Welcome",
            label: "Welcome to Happy World, Inc.",
            icon: HomeMajorMonotone,
            exactMatch: false
          }
        ]}
      />
      <CategoriesSection />
    </Navigation>
  );
}
