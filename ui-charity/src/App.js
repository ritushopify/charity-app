import React from "react";
import { Frame, Navigation } from "@shopify/polaris";
import {
  ArrowLeftMinor,
  HomeMajorMonotone,
  OrdersMajorTwotone
} from "@shopify/polaris-icons";

import topBarMarkup from "./topBarMarkup";

const categorySelected = () => {
  console.log("Selected category");
};

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
          selected: { categorySelected }
        },
        {
          label: "Animals",
          icon: OrdersMajorTwotone,
          selected: { categorySelected }
        }
      ]}
    />
  </Navigation>
);

function App() {
  return <Frame topBar={topBarMarkup()} navigation={navigationMarkup} />;
}

export default App;
