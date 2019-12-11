import React from "react";
import { Card, Layout, Link, TextField } from "@shopify/polaris";

export default class CharityDetailsSection extends React.Component {
  render() {
    const charity = this.props.charity;
    var name;
    var url;
    function charityInfoCard() {
      if (charity === undefined) {
        return <Card></Card>;
      } else {
        name = charity.name;
        url = "https://donate.makemydonation.org/donate/" + charity.employerId;
        return (
          <Card>
            {name}
            <br />
            <Link url={url}>{url}</Link>}
          </Card>
        );
      }
    }
    return (
      <Layout.Section secondary>
        {charityInfoCard()}
        <Card>
          <TextField label="Enter Occasion" value={"Birthday"} />
          <TextField label="Your greeting" value="Happy Birthday!" />
          <TextField
            label="Your optional message"
            value="I know how much you care about these things,
              so I hope you will be happy to know that I have
              contributed to this charity on your behalf."
            multiline
          />
        </Card>
      </Layout.Section>
    );
  }
}
