import React from "react";
import { Page, Card, Layout } from "@shopify/polaris";

export default function PageMarkup() {
  return (
    <Page title="test">
      <Layout>
        <Card title="hello" />
      </Layout>
    </Page>
  );
}
