import React from "react";
import { Badge, DisplayText } from "@shopify/polaris";

export default function GiveGiftBlurb() {
  return (
    <Badge status="info">
      <i>
        <DisplayText size="medium">
          Give a special gift by donating to an appropriate charity on their
          behalf,
        </DisplayText>
        <br />
        <DisplayText size="medium">
          and then send them a greeting card for that special occasion to send
          them your best wishes and to tell them about the donation.
        </DisplayText>
      </i>

      <br />
      <p>You will receive a taxable deduction tax receipt.</p>
    </Badge>
  );
}
