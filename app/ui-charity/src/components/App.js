import React from "react";
import { Page, Layout, Card, DisplayText } from "@shopify/polaris";
import LeftSectionLayout from "./LeftSectionLayout";

export default function App() {
  const titleImg = require("../assets/mainTitle.png");
  const earth = require("../assets/earth.jpg");
  const polarBear = require("../assets/polarBear.jpg");
  const youth = require("../assets/youth.jpg");
  return (
    <Page>
      <center>
        <img src={titleImg} alt="A Different Kind of Gift Giving" />
      </center>
      <br />
      <br />
      {/* {LeftSectionLayout} */}
      <Layout>
        <Layout.Section>
          <Card>
            <DisplayText size="medium">
              <i>
                <p> For the person who already has everything.</p>
                <br />
                <p>
                  Or for someone you know who is passionate about a cause (such
                  as the environment, youth development, and many other kinds).
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
                  Give a special gift by donating to an appropriate charity on
                  their behalf.
                </p>
                <br />
                <p>
                  And send them a greeting card on that special occasion tellng
                  them about your donation and sending them best wishes.
                </p>
              </i>
            </DisplayText>
            <br />
            <p>You will receive a taxable deduction tax receipt.</p>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <center>
            <img src={earth} alt="Our Planet Earth" width="175" />
            <img src={polarBear} alt="Polar Bear" width="175" />
            <img src={youth} alt="Youth" width="175" />
          </center>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
