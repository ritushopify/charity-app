import React from "react";
import {
  Page,
  Card,
  Layout,
  FormLayout,
  TextField,
  ResourceList,
  TextContainer
} from "@shopify/polaris";
import { Query } from "react-apollo";
import { charityQuery } from "../../queries/CharityQuery";
import showCharityItem from "./ShowCharityItem";

function selectionChanged(props) {
  console.log("props is " + JSON.stringify(props));
}
export default class CharitiesSection extends React.Component {
  render() {
    const apiId = this.props.match.params.apiId;
    return (
      <Query query={charityQuery} variables={{ apiId: apiId }}>
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
          return (
            <Page
              title={"Charities for " + categoryName}
              subtitle={"Click below to learn more about these charities."}
            >
              <Layout>
                <Layout.Section>
                  <Card>
                    {console.log(
                      "props in card is" + JSON.stringify(this.props)
                    )}
                    <ResourceList
                      items={items}
                      renderItem={showCharityItem}
                      onSelectionChange={selectionChanged(this.props)}
                      resourceName={{
                        singular: "Charity",
                        plural: "Charities"
                      }}
                    />
                  </Card>
                </Layout.Section>
                <Layout.Section secondary>
                  <Layout.Section>
                    This charity is blah bblah - go to their website...
                  </Layout.Section>
                  <Layout.Section>
                    <FormLayout>
                      <TextField label="Enter Occasion" value={"Birthday"} />
                      <TextContainer
                        type="Enter message"
                        value={"I know how much you care about ..."}
                      />
                    </FormLayout>
                  </Layout.Section>
                </Layout.Section>
              </Layout>
            </Page>
          );
        }}
      </Query>
    );
  }
}
