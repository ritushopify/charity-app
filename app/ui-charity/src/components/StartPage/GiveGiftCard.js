import React from "react";
import { Badge, Card, DisplayText } from "@shopify/polaris";

export default function GiveGiftCard() {
  return (
    <Card>
      <Badge status="info">
        <DisplayText size="medium">
          <i>
            <p>
              Give a special gift by donating to an appropriate charity on their
              behalf,
            </p>
            <br />
            <p>
              and then send them a greeting card for that special occasion to
              send them your best wishes and to tell them about the donation.
            </p>
          </i>
        </DisplayText>
        <br />
        <p>You will receive a taxable deduction tax receipt.</p>
      </Badge>
    </Card>
  );
}
