import React, { useState } from "react";
import { Page, Card, Layout, OptionList, Avatar } from "@shopify/polaris";
import { Query } from "react-apollo";
import { charityQuery } from "../../queries/CharityQuery";
import CharityDetailsSection from "./CharityDetailsSection";

export default function CharitiesWithHook(props) {
  const [selectedItem, setSelectedItem] = useState([]);
  function mixedCase(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return (
    <Query query={charityQuery} variables={{ apiId: props.apiId }}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        const charities = data.charitiesForCategory;
        const categoryName = charities[0].categoryName;
        const items = charities.map(charity => {
          const name = charity.name;
          const media = <Avatar customer size="medium" name={name} />;
          return {
            value: charity.employerId,
            label: `${name} [${mixedCase(charity.city)}, ${mixedCase(
              charity.state
            )}]`,
            media: media
          };
        });
        function findCharity(employerId) {
          const matching = charities.filter(
            charity => charity.employerId === employerId
          );
          const theCharity = matching[0];
          console.log(
            "findCharity function found " + JSON.stringify(theCharity)
          );
          return theCharity;
        }
        return (
          <Page
            title={`${categoryName} Charities`}
            subtitle={"Find out more about the charities below."}
          >
            <Layout>
              <Layout.Section>
                <Card>
                  <OptionList
                    options={items}
                    // renderItem={CharityItem}
                    onChange={setSelectedItem}
                    selected={selectedItem}
                  />
                </Card>
              </Layout.Section>
              <CharityDetailsSection charity={findCharity(selectedItem[0])} />
            </Layout>
          </Page>
        );
      }}
    </Query>
  );
}
