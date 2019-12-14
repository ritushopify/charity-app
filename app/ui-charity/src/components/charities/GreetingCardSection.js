import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";
import { Card, Button, TextField } from "@shopify/polaris";
import { BLURB_MUTATION } from "../../queries/BlurbMutation";
import { CARD_QUERY } from "../../queries/CardQuery";

export default function GreetingCardSection() {
  const [blurbValue, setBlurbValue] = useState("");

  // Get the card greeting using the card query
  const { data } = useQuery(CARD_QUERY, {
    onCompleted: () => setBlurbValue(data.card.blurb)
  });

  return (
    <Card>
      <Card>
        <Card.Section title="Enter Occcasion">
          <TextField value={"Birthday"} />
        </Card.Section>
        <Card.Section title="Your Greeting">
          <TextField value={blurbValue} onChange={setBlurbValue} />
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
          <Mutation mutation={BLURB_MUTATION} variables={{ blurb: blurbValue }}>
            {blurbMutation => (
              <Button primary onClick={blurbMutation}>
                Send Donation and Card
              </Button>
            )}
          </Mutation>
        </Card.Section>
      </Card>
    </Card>
  );
}
