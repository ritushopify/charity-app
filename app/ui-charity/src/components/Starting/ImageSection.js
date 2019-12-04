import React from "react";
import { Layout } from "@shopify/polaris";

export default function ImageSection() {
  const earth = require("../../assets/earth.jpg");
  const polarBear = require("../../assets/polarBear.jpg");
  const youth = require("../../assets/youth.jpg");

  return (
    <Layout.Section>
      <center>
        <img src={earth} alt="Our Planet Earth" width="175" />
        <img src={polarBear} alt="Polar Bear" width="175" />
        <img src={youth} alt="Youth" width="175" />
      </center>
    </Layout.Section>
  );
}
