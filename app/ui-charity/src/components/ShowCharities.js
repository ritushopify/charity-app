import React from "react";
import { Page } from "@shopify/polaris";

class ShowCharities extends React.Component {
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const id = params.id;
    console.log("id is " + id);
  }

  render() {
    return <Page>{};</Page>;
  }
}

export default ShowCharities;
