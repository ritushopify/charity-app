import React from "react";
import { Page } from "@shopify/polaris";

export default class CharityDetails extends React.Component {
  render() {
    const employer_id = this.props.match.employer_id;
    return (
      <Page>
        {console.log("In Charity Details with employer id  = " + employer_id)}
        Charity Details Page
      </Page>
    );
  }
}
