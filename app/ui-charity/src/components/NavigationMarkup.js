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
      <Navigation.Section
        separator
        items={[
          {
            url: "/Welcome",
            label: "Welcome to A Happier World",
            icon: HomeMajorMonotone,
            exactMatch: false
          }
        ]}
      />
      <CategoriesSection />
    </Navigation>
  );
}
