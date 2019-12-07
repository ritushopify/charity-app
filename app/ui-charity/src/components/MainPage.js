import React from "react";
import { Frame } from "@shopify/polaris";

import TopBarMarkup from "./TopBarMarkup";
import NavigationMarkup from "./NavigationMarkup";
import Routes from "../routes/Routes";
import { BrowserRouter } from "react-router-dom";

export default function MainPage() {
  console.log("In MainPage now");
  return (
    <BrowserRouter>
      <Frame topBar={TopBarMarkup()} navigation={NavigationMarkup()}>
        <Routes />
      </Frame>
    </BrowserRouter>
  );
}
