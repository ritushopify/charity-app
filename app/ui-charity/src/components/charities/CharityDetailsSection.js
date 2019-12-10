import React from "react";
import { Card, Layout, FormLayout, TextField } from "@shopify/polaris";

export default class CharityDetailsSection extends React.Component {
  render() {
    // const employer_id = this.props.match.employer_id;
    return (
      <Layout.Section secondary>
        <Card>
          This charitable organization works towards protecting the Amazon
          forest.
        </Card>
        <Card>
          <FormLayout>
            <TextField label="Enter Occasion" value={"Birthday"} />
            <TextField label="Your greeting" value="Happy Birthday!" />
            <TextField
              label="Your optional message"
              value="I know how much you care about these things,
              so I hope you will be happy to know that I have
              contributed to this charity on your behalf."
              multiline
            />
          </FormLayout>
        </Card>
      </Layout.Section>
    );
  }
}
