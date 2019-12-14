import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Page, Card, Layout, OptionList, Avatar } from "@shopify/polaris";
import { charityQuery } from "../../queries/CharityQuery";
import CharityDetailsSection from "./CharityDetailsSection";

export default function CharitiesSection(props) {
  const [charityItems, setCharityItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  // Run a query to get charities for the given category.
  const { data } = useQuery(charityQuery, {
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
  }

  //  All charity items know their category name. So, select first one.
  const pageTitle =
    charityItems.length === 0
      ? ""
      : `${charityItems[0].categoryName} Charities`;

  return (
    <Page
      title={pageTitle}
      subtitle={"Click below to find out more about these charities."}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <OptionList
              allowMultiple={false}
              options={charityItems}
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
