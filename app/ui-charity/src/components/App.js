import React, { useCallback } from "react";
import { Frame } from "@shopify/polaris";

import TopBarMarkup from "./TopBarMarkup";
import NavigationMarkup from "./NavigationMarkup";
import PageMarkup from "./PageMarkup";

export default function App() {
  return (
    <Frame topBar={TopBarMarkup()} navigation={NavigationMarkup()}>
      {PageMarkup()}
    </Frame>
  );
}
