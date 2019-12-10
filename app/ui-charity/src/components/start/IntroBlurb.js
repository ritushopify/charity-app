import React from "react";
import { Badge, DisplayText } from "@shopify/polaris";

export default function IntroBlurb() {
  return (
    <Badge status="success">
      <DisplayText size="medium">
        For the person who already has everything.
      </DisplayText>
      <br />
      <DisplayText size="medium">
        Or for someone you know who is passionate about a cause.
      </DisplayText>

      <p>
        <br />
        Environment, Youth Development, Sustainable Growth., and many more ways
        to improve the world we live in.
      </p>
    </Badge>
  );
}
