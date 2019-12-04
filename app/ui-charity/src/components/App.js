import React from "react";
import { Page } from "@shopify/polaris";
import StartPage from "./Starting/StartPage";

export default function App() {
  return <Page>{StartPage()}</Page>;
}
