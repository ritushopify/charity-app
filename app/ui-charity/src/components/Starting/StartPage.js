import React from "react";
import { Layout, Button, DisplayText, Badge, Page } from "@shopify/polaris";
import IntroBlurb from "./IntroBlurb";
import GiveGiftBlurb from "./GiveGiftBlurb";
import ImageSection from "./ImageSection";
const titleImg = require("../../assets/mainTitle.png");

// Most of the Layouts below are there to allow me to get spacing between
// components (I'm avoiding css stylesheetss for now.)

export default function StartPage() {
  // const startClicked = useCallback(() => {
  //   console.log("Start Clicked");
  // }, []);
  return (
    <Page>
      <Layout>
        <center>
          <img src={titleImg} alt="A Different Kind of Gift Giving" />
        </center>

        <Layout>
          <Layout.Section>
            <Layout.Section>{IntroBlurb()}</Layout.Section>
            <Layout.Section>{GiveGiftBlurb()}</Layout.Section>
          </Layout.Section>
          <Layout.Section secondary>{ImageSection()}</Layout.Section>
        </Layout>

        <Layout.Section>
          <Badge status="attention">
            <center>
              <DisplayText size="large">
                Begin by exploring the available charities and card designs.
                Then enter a donation amount to send your donation.
              </DisplayText>
              {/* <Button onClick={startClicked}>START</Button> */}
              <Button accessiblityLabel="Start" url="/main" size="large">
                Start
              </Button>
            </center>
          </Badge>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
