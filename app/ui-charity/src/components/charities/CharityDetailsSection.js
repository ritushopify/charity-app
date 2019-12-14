import React from "react";
import { Card, Link } from "@shopify/polaris";

export default function CharityDetailsSection(props) {
  const charityItem = props.charityItem;

  if (charityItem === undefined) return <Card></Card>;

  const url =
    "https://donate.makemydonation.org/donate/" + charityItem.employerId;

  const name = charityItem.name;

  return (
    <Card>
      {name}
      <br />
      <Link url={url}>{url}</Link>
    </Card>
  );
}
