import React, { useState } from "react";
import { Page, Card, Layout, OptionList, Avatar } from "@shopify/polaris";
import { Query } from "react-apollo";
import { charityQuery } from "../../queries/CharityQuery";
import CharityDetailsSection from "./CharityDetailsSection";

export default function CharitiesSection(props) {
  const [selectedItem, setSelectedItem] = useState([]);
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
            label: `${name} [${charity.city}, ${charity.state}]`,
            media: media
          };
        });
        function findCharity(employerId) {
          const matching = charities.filter(
            charity => charity.employerId === employerId
          );
          const theCharity = matching[0];
          return theCharity;
        }
        return (
          <Page
            title={`${categoryName} Charities`}
            subtitle={"Click below to find out more about these charities."}
          >
            <Layout>
              <Layout.Section>
                <Card>
                  <OptionList
                    options={items}
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
