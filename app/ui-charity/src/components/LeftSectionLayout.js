import React from "react";
import { Layout, Card, DisplayText } from "@shopify/polaris";

export default function LeftSectionLayout() {
  return (
    <Layout>
      <Layout.Section>
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
      </Layout.Section>
      <br />
      <br />
      <Layout.Section>
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
          <p>You will receive a taxable deduction tax receipt</p>
        </Card>
      </Layout.Section>
    </Layout>
  );
}
