import React from "react";
import { Frame } from "@shopify/polaris";

import TopBarMarkup from "./TopBarMarkup";
import NavigationMarkup from "./NavigationMarkup";
import PageMarkup from "./PageMarkup";

export default function MainPage() {
  console.log("In Main Page now");
  return (
    <Frame topBar={TopBarMarkup()} navigation={NavigationMarkup()}>
      {PageMarkup()}
    </Frame>
  );
}
