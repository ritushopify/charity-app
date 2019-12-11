import React, { useCallback, useState } from "react";
import { Page, Card, Layout, ResourceList } from "@shopify/polaris";
import { Query } from "react-apollo";
import { charityQuery } from "../../queries/CharityQuery";
import CharityItem from "./CharityItem";
import CharityDetailsSection from "./CharityDetailsSection";

export default function CharitiesWithHook(props) {
  const [selectedItems, setSelectedItems] = useState([]);
  // const setSelectedItems = selectedItems => {
  //   console.log("selectedItems is " + JSON.stringify(selectedItems));
  //   charity = selectedItems[0];
  // };
  return (
    <Query query={charityQuery} variables={{ apiId: props.apiId }}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        const charities = data.charitiesForCategory;
        const categoryName = charities[0].categoryName;
        const items = charities.map(charity => {
          return {
            id: charity.employerId,
            name: charity.name,
            url: charity.url
          };
        });

        function findCharity(employerId) {
          const theCharity = charities.filter(
            charity => charity.employerId === employerId
          );
          console.log(
            "findCharity function found " + JSON.stringify(theCharity)
          );
          return theCharity;
        }
        return (
          <Page
            title={"Charities for " + categoryName}
            subtitle={"Click below to learn more about these charities."}
          >
            <Layout>
              <Layout.Section>
                <Card>
                  <ResourceList
                    items={items}
                    renderItem={CharityItem}
                    onSelectionChange={setSelectedItems}
                    selectedItems={selectedItems}
                    selectable
                    resourceName={{
                      singular: "Charity",
                      plural: "Charities"
                    }}
                  />
                </Card>
              </Layout.Section>
              <CharityDetailsSection
                charity={findCharity(selectedItems[0])[0]}
              />
            </Layout>
          </Page>
        );
      }}
    </Query>
  );
}
