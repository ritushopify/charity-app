import React from "react";
import { Card, Button, Layout, Link, TextField } from "@shopify/polaris";

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
          <Card.Section title="Enter Occcasion">
            <TextField value={"Birthday"} />
          </Card.Section>
          <Card.Section title="Your Greeting">
            <TextField value="Happy Birthday!" />
          </Card.Section>
          <Card.Section title="Your Optional Message">
            <TextField
              value="I know how much you care about the planet,
              so I hope you will be happy to know that I have
              contributed to this charity on your behalf."
              multiline
            />
          </Card.Section>
        </Card>
        <Card>
          <Card.Section title="Please proceed when ready:">
            <center>
              <Button>Send Donation and Card</Button>
            </center>
          </Card.Section>
        </Card>
      </Layout.Section>
    );
  }
}
