import React, { useState, useCallback, useQuery } from "react";
import { Card, Button, Layout, Link, TextField } from "@shopify/polaris";
//import CharityInfoCard from "./CharityInfoCard";
import { cardQuery } from "../../queries/CardQuery";

export default function CharityDetailsSection(props) {
  const charity = props.charity;
  console.log("in details charity is " + JSON.stringify(charity));
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

  const [value, setValue] = useState("Happy Birthday!");
  function charityInfoCard() {
    if (charity === undefined || charity === []) {
      return <Card></Card>;
    } else {
      const url =
        "https://donate.makemydonation.org/donate/" + charity.employerId;
      return (
        <Card>
          {console.log("name is " + charity.name)}
          {charity.name}
          <br />
          <Link url={url}>{url}</Link>}
        </Card>
      );
    }
  }

  function saveButtonClicked() {
    console.log("save button clicked");
  }

  return (
    <Layout.Section secondary>
      {charityInfoCard()}
      <Card>
        <Card.Section title="Enter Occcasion">
          <TextField value={"Birthday"} />
        </Card.Section>
        <Card.Section title="Your Greeting">
          <TextField value={value} onChange={setValue} />
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
          <Button primary onClick={saveButtonClicked}>
            Send Donation and Card
          </Button>
        </Card.Section>
      </Card>
    </Layout.Section>
  );
}
