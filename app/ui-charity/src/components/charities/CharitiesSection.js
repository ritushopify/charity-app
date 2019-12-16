import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Page, Card, Layout, OptionList, Avatar } from "@shopify/polaris";
import { CHARITY_QUERY } from "../../queries/CharityQuery";
import CharityDetailsSection from "./CharityDetailsSection";
import GreetingCardSection from "./GreetingCardSection";

export default function CharitiesSection(props) {
  const [charityItems, setCharityItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [pageTitle, setPageTitle] = useState("");

  // Run a query to get charities for the given category.
  const { data } = useQuery(CHARITY_QUERY, {
    variables: { apiId: props.apiId },
    onCompleted: () => charitiesChanged(data.charitiesForCategory)
  });

  function charitiesChanged(charities) {
    // Re-build the charity items from the new charities.
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
    setCharityItems(items);
    setPageTitle(`${items[0].categoryName} Charities`);
  }

  return (
    <Page
      title={pageTitle}
      subtitle={"Click below to find out more about these charities."}
    >
      <Layout>
        <Layout.Section primary>
          <Card>
            <OptionList
              options={charityItems}
              onChange={setSelectedItems}
              selected={selectedItems}
            />
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <CharityDetailsSection charityItem={selectedItems[0]} />
          <GreetingCardSection />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
