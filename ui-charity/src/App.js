import React, { useCallback } from "react";
import {
  ArrowLeftMinor,
  ConversationMinor,
  HomeMajorMonotone,
  OrdersMajorTwotone
} from "@shopify/polaris-icons";

// import "./App.css";
import { TopBar, Frame, Navigation } from "@shopify/polaris";

const userMenuMarkup = (
  <TopBar.UserMenu name="Ritu" detail="Shopify, Inc." initials="RS" />
);

const categorySelected = () => {
  console.log("Selected category");
};

// const handleNavigationToggle = useCallback(() => {
//   console.log("toggle navigation visibility");
// }, []);

const topBarMarkup = (
  <TopBar
    showNavigationToggle
    userMenu={userMenuMarkup}
    //    onNavigationToggle={handleNavigationToggle}
  />
);

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
          onClick: { categorySelected }
        },
        {
          label: "Animals",
          icon: OrdersMajorTwotone,
          onClick: { categorySelected }
        }
      ]}
    />
  </Navigation>
);

class App extends React.Component {
  render() {
    return <Frame topBar={topBarMarkup} navigation={navigationMarkup}></Frame>;
  }
}

export default App;
