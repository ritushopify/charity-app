import React from "react";
import { Frame } from "@shopify/polaris";

import TopBarMarkup from "./TopBarMarkup";
import NavigationMarkup from "./NavigationMarkup";
import FrameRoutes from "../routes/FrameRoutes";
import { BrowserRouter } from "react-router-dom";

export default function MainPage() {
  console.log("In MainPage now");
  return (
    <BrowserRouter>
      <Frame topBar={TopBarMarkup()} navigation={NavigationMarkup()}>
        <FrameRoutes />
      </Frame>
    </BrowserRouter>
  );
}
