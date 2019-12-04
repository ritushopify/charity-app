import React from "react";
import { Badge, Card, DisplayText } from "@shopify/polaris";

export default function IntroCard() {
  return (
    <Card>
      <Badge status="success">
        <DisplayText size="medium">
          <i>
            <p> For the person who already has everything.</p>
            <br />
            <p>Or for someone you know who is passionate about a cause.</p>
          </i>
        </DisplayText>
        <p>
          <br />
          Environment, Youth Development, Sustainable Growth., and many more
          ways to improve the world we live in.
        </p>
      </Badge>
    </Card>
  );
}
