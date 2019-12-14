import React, { useState } from "react";
import { Card, Layout, Link } from "@shopify/polaris";
import GreetingCardSection from "./GreetingCardSection";

export default function CharityDetailsSection(props) {
  const charityItem = props.charityItem;

  const url =
    charityItem === undefined
      ? ""
      : "https://donate.makemydonation.org/donate/" + charityItem.employerId;

  const name = charityItem === undefined ? "" : charityItem.name;

  return (
    <Layout.Section secondary>
      <Card>
        {name}
        <br />
        <Link url={url}>{url}</Link>
      </Card>
      <GreetingCardSection />
    </Layout.Section>
  );
}
