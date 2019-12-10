import React from "react";
import { Navigation } from "@shopify/polaris";
import {
  //  ArrowLeftMinor,
  HomeMajorMonotone
  //OrdersMajorTwotone
} from "@shopify/polaris-icons";

import CategoriesSection from "./categories/CategoriesSection";

export default function NavigationMarkup() {
  return (
    <Navigation location="/">
      {/* <Navigation.Section
        items={[
          {
            label: "Back to Shopify",
            icon: ArrowLeftMinor
          }
        ]}
      /> */}
      <Navigation.Section
        separator
        items={[
          {
            url: "/Welcome",
            label: "Welcome to Happy World",
            icon: HomeMajorMonotone,
            exactMatch: false
          }
        ]}
      />
      <CategoriesSection />
    </Navigation>
  );
}
