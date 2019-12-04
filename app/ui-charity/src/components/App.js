import React from "react";
import { Page, Layout, Card, DisplayText } from "@shopify/polaris";

export default function App() {
  const titleImg = require("../assets/mainTitle.png");
  return (
    <Page>
      <center>
        <img src={titleImg} alt="A Different Kind of Gift Giving" />
      </center>
      <br />
      <br />
      <Card>
        <DisplayText size="medium">
          <i>
            <p> For the person who already has everything.</p>
            <br />
            <p>
              Or for someone who is passionate about a cause (such as the
              environment, youth development, and many other kinds).
            </p>
          </i>
        </DisplayText>
      </Card>
      <br />
      <br />
      <Card>
        <DisplayText size="medium">
          <i>
            <p>
              Give a special gift by donating to an appropriate charity on their
              behalf.
            </p>
            <br />
            <p>
              And send them a greeting card on that special occasion tellng them
              about your donation and sending them best wishes.
            </p>
          </i>
        </DisplayText>
        <br />
        <p>You will receive a taxable deduction tax receipt</p>
      </Card>
    </Page>
  );
}
