import React from "react";
import {
  Avatar,
  Page,
  Card,
  Layout,
  FormLayout,
  TextField,
  ResourceList,
  ResourceItem
} from "@shopify/polaris";
import { Query } from "react-apollo";
import { charityQuery } from "../../queries/CharityQuery";

export default class CharitiesSection extends React.Component {
  render() {
    const apiId = this.props.match.params.apiId;
    const resourceName = {
      singular: "Charity",
      plural: "Charities"
    };
    function renderCharity(charity) {
      const { id, name, url } = charity;
      const media = <Avatar customer size="medium" name={name} />;

      return (
        <ResourceItem id={id} media={media}>
          <h3>
            <p>{name.toUpperCase()}</p>
            <p>
              {url}
              {/* {capitalize(city)}, {capitalize(state)} */}
            </p>
          </h3>
        </ResourceItem>
      );
    }

    return (
      <Query query={charityQuery} variables={{ apiId: apiId }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          console.log("query returned charity data: " + data);
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
                    <ResourceList
                      items={items}
                      renderItem={renderCharity}
                      resourceName={resourceName}
                    />
                  </Card>
                </Layout.Section>
                <Layout.Section secondary>
                  <Layout.Section>
                    This charity is blah bblah - go to their website...
                    <Layout.Section></Layout.Section>
                    <FormLayout>
                      <TextField label="Enter Occasion" value={"Birthday"} />
                      <TextField
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
