import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Page, Card, Layout, OptionList, Avatar } from "@shopify/polaris";
import { charityQuery } from "../../queries/CharityQuery";
import { cardQuery } from "../../queries/CardQuery";
import CharityDetailsSection from "./CharityDetailsSection";

export default function CharitiesSection(props) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [charities, setCharities] = useState([]);
  const [card, setCard] = useState([]);

  // run a query to get charities for the given category
  const { data } = useQuery(charityQuery, {
    variables: { apiId: props.apiId },
    onCompleted: () => setCharities(data.charitiesForCategory)
  });

  // run a query to get the card
  // const { data2 } = useLazyQuery(cardQuery, {
  //   onCompleted: () => setCard(data2.card)
  // });

  const items = charities.map(charity => {
    const name = charity.name;
    const media = <Avatar customer size="medium" name={name} />;
    return {
      key: charity.employerId,
      value: charity,
      label: `${name} [${charity.city}, ${charity.state}]`,
      categoryName: charity.categoryName,
      media: media
    };
  });

  return (
    <Page
      //     title={`${categoryName} Charities`}
      subtitle={"Click below to find out more about these charities."}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <OptionList
              allowMultiple={false}
              options={items}
              onChange={setSelectedItems}
              selected={selectedItems}
            />
          </Card>
        </Layout.Section>
        <CharityDetailsSection charity={selectedItems[0]} />
      </Layout>
    </Page>
  );
}
