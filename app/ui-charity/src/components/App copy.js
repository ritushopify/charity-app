import React from "react";
import { Frame } from "@shopify/polaris";

import TopBarMarkup from "./TopBarMarkup";
import NavigationMarkup from "./NavigationMarkup";
import Routes from "../Routes";

export default function App() {
  return (
    <Frame topBar={TopBarMarkup()} navigation={NavigationMarkup()}>
      <Routes />
    </Frame>
  );
}
