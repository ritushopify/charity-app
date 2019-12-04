import React from "react";
import { Layout } from "@shopify/polaris";
import IntroCard from "./IntroCard";
import GiveGiftCard from "./GiveGiftCard";

export default function StartPageMarkup() {
  const titleImg = require("../../assets/mainTitle.png");
  const earth = require("../../assets/earth.jpg");
  const polarBear = require("../../assets/polarBear.jpg");
  const youth = require("../../assets/youth.jpg");
  return (
    <Layout>
      <center>
        <img src={titleImg} alt="A Different Kind of Gift Giving" />
      </center>

      <Layout>
        <Layout.Section>
          {IntroCard()}
          {GiveGiftCard()}
        </Layout.Section>

        <Layout.Section secondary>
          <center>
            <img src={earth} alt="Our Planet Earth" width="175" />
            <img src={polarBear} alt="Polar Bear" width="175" />
            <img src={youth} alt="Youth" width="175" />
          </center>
        </Layout.Section>
      </Layout>
    </Layout>
  );
}
