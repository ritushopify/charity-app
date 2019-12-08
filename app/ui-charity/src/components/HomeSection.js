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

export default class HomeSection extends React.Component {
  render() {
    console.log("In home page now");
    return (
      <Page title="Test Home Page">
        <Layout>
          <Card title="Hello from Home" />
        </Layout>
      </Page>
    );
  }
}
