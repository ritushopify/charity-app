import React from "react";
import { Navigation } from "@shopify/polaris";
import {
  ArrowLeftMinor
  //  HomeMajorMonotone,
  // OrdersMajorTwotone
} from "@shopify/polaris-icons";

import CategoriesSection from "./CategoriesSection";

export default function NavigationMarkup() {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: "Back to Shopify",
            icon: ArrowLeftMinor
          }
        ]}
      />
      <CategoriesSection />
    </Navigation>
  );
}
