import React from "react";
import { Card, Link } from "@shopify/polaris";

export default function CharityDetailsSection(props) {
  const charityItem = props.charityItem;

  if (charityItem === undefined) return <Card></Card>;

  const url =
    "https://donate.makemydonation.org/donate/" + charityItem.employerId;

  return (
    <Card>
      {charityItem.name}
      <br />
      <Link url={url}>{url}</Link>
    </Card>
  );
}
