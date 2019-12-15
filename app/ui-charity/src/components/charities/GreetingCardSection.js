import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";
import { Card, Button, TextField } from "@shopify/polaris";
import { CARD_MUTATION } from "../../queries/CardMutation";
import { CARD_QUERY } from "../../queries/CardQuery";

export default function GreetingCardSection() {
  const [blurbValue, setBlurbValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [id, setId] = useState();

  // Get the card greeting using the card query
  const { data } = useQuery(CARD_QUERY, {
    onCompleted: () => {
      setId(data.card.id);
      setBlurbValue(data.card.blurb);
      setMessageValue(data.card.message);
    }
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
            multiline
            value={messageValue}
            onChange={setMessageValue}
          />
        </Card.Section>
      </Card>
      <Card>
        <Card.Section title="Please proceed when ready.">
          <Mutation
            mutation={CARD_MUTATION}
            variables={{
              id: id,
              blurb: blurbValue,
              message: messageValue
            }}
          >
            {cardMutation => (
              <Button primary onClick={cardMutation}>
                Send Donation and Card
              </Button>
            )}
          </Mutation>
        </Card.Section>
      </Card>
    </Card>
  );
}
