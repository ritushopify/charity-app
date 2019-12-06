import React from "react";
import { Page, Layout, Card } from "@shopify/polaris";

class Charities extends React.Component {
  render() {
    console.log("in charities now");
    const id = this.props.match.params.id;
    console.log(id);
    return (
      <Page title="Charities Page">
        <Layout>
          <Card title="Here we are" />
        </Layout>
      </Page>
    );
  }
}

export default Charities;
