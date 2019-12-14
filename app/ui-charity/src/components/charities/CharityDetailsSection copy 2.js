import React, { useState, useMutation, useLazyQuery } from "react";
import { Mutation } from "react-apollo";
import { Card, Button, Layout, Link, TextField } from "@shopify/polaris";
//import CharityInfoCard from "./CharityInfoCard";
import { cardQuery } from "../../queries/CardQuery";
import { BLURB_MUTATION } from "../../queries/BlurbMutation";

export default function CharityDetailsSection(props) {
  const charityItem = props.charityItem;
  console.log("in details charity is " + JSON.stringify(charityItem));
  // const [card, setCard] = useState();
  // const [blurb, setBlurb] = useState("");

  // const blurbChanged = useCallback(newBlurb => setBlurb(newBlurb), []);
  // run a query to get the card

  // const { data } = useQuery(cardQuery, {
  //   onCompleted: () => cardChanged(data.card)
  // });

  // function cardChanged(card) {
  //   setValue(card.blurb);
  // }

  const [blurbValue, setBlurbValue] = useState("Happy Birthday!");
  function charityInfoCard() {
    if (charityItem === undefined || charityItem === []) {
      return <Card></Card>;
    } else {
      const url =
        "https://donate.makemydonation.org/donate/" + charityItem.employerId;
      return (
        <Card>
          {console.log("name is " + charityItem.name)}
          {charityItem.name}
          <br />
          <Link url={url}>{url}</Link>}
        </Card>
      );
    }
  }
  const blurbChanged = newValue => {
    setBlurbValue(newValue);
    console.log("type of blurb value is " + typeof blurbValue);
  };

  return (
    <Layout.Section secondary>
      {charityInfoCard()}
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
    </Layout.Section>
  );
}
