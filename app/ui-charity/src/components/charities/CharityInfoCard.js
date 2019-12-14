import React from "react";
import { Card, Link } from "@shopify/polaris";

export default function charityInfoCard(props) {
  const charity = props.charity;
  if (charity === undefined) {
    return <Card></Card>;
  } else {
    const url =
      "https://donate.makemydonation.org/donate/" + charity.employerId;
    return (
      <Card>
        {console.log("name is " + charity.name)}
        {charity.name}
        <br />
        <Link url={url}>{url}</Link>}
      </Card>
    );
  }
}
