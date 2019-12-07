import React from "react";
import {
  // Avatar,
  Page,
  Layout,
  Card
  // FormLayout,
  // TextField,
  // ResourceList,
  // ResourceItem
} from "@shopify/polaris";

export default class HomePage extends React.Component {
  render() {
    console.log("In HomePageTest now");
    return (
      <Page title="Test Page">
        <Layout>
          <Card title="Hello" />
        </Layout>
      </Page>
    );
  }
}
