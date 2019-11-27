import React, { useCallback } from "react";
import { Frame, Navigation } from "@shopify/polaris";
import {
  ArrowLeftMinor,
  HomeMajorMonotone,
  OrdersMajorTwotone
} from "@shopify/polaris-icons";

import TopBarMarkup from "./TopBarMarkup";

export default function App() {
  const categorySelected = useCallback(value => {
    console.log("Selected category " + value);
  }, []);

  const navigationMarkup = (
    <Navigation location="/">
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
  return <Frame topBar={TopBarMarkup()} navigation={navigationMarkup} />;
}
