import React from "react";
import { Layout, DisplayText, Badge, Page } from "@shopify/polaris";
import IntroBlurb from "./IntroBlurb";
import GiveGiftBlurb from "./GiveGiftBlurb";
import ImageSection from "./ImageSection";

const titleImg = require("../../assets/mainTitle.png");

// Most of the Layouts below are there to allow me to get spacing between
// components (I'm avoiding css stylesheetss for now.)

export default function WelcomePage() {
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
            <i>
              <center>
                <DisplayText size="large">
                  Begin by exploring the charities in the categories on the
                  left.
                </DisplayText>

                <DisplayText size="large">
                  Then enter a donation amount, your card, and the date that you
                  want your gift to be sent.
                </DisplayText>
              </center>
            </i>
          </Badge>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
