import React from "react";
import { Frame } from "@shopify/polaris";

import TopBarMarkup from "./TopBarMarkup";
import NavigationMarkup from "./NavigationMarkup";
import Routes from "../Routes/Routes";

export default function MainPage() {
  console.log("In Main Page now");
  return (
    <Frame topBar={TopBarMarkup()} navigation={NavigationMarkup()}>
      <Routes />
    </Frame>
  );
}
