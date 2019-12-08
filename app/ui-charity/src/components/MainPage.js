import React from "react";
import { Frame } from "@shopify/polaris";
import { BrowserRouter } from "react-router-dom";

import TopBarMarkup from "./TopBarMarkup";
import NavigationMarkup from "./NavigationMarkup";
import FrameRoutes from "../routes/FrameRoutes";

export default function MainPage() {
  return (
    <BrowserRouter>
      <Frame topBar={TopBarMarkup()} navigation={NavigationMarkup()}>
        <FrameRoutes />
      </Frame>
    </BrowserRouter>
  );
}
