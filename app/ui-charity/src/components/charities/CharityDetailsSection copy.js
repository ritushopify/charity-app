import React, { useState, useCallback } from "react";
import { Card, Button, Layout, Link, TextField } from "@shopify/polaris";
import CharityInfoCard from "./CharittyInfoCard";

export default function CharityDetailsSection(props) {
  const charity = props.charity;
  console.log("in details charity is " + JSON.stringify(charity));
  const [value, setValue] = useState("Happy Birthday!");
  const handleChange = useCallback(newValue => setValue(newValue), []);

  return (
    <Layout.Section secondary>
      {CharityInfoCard(charity)}
      <Card>
        <Card.Section title="Enter Occcasion">
          <TextField value={"Birthday"} />
        </Card.Section>
        <Card.Section title="Your Greeting">
          <TextField value={value} onChange={handleChange} />
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
        <Card.Section title="Please proceed when ready.">
          <Button primary>Send Donation and Card</Button>
        </Card.Section>
      </Card>
    </Layout.Section>
  );
}
