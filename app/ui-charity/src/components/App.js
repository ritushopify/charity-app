import React from "react";
import { Page } from "@shopify/polaris";
import StartPageMarkup from "./StartPage/StartPageMarkup";

export default function App() {
  return <Page>{StartPageMarkup()}</Page>;
}
