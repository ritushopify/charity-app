import React from "react";
import {
  Avatar,
  Page,
  Layout,
  Card,
  FormLayout,
  TextField,
  ResourceList,
  ResourceItem
} from "@shopify/polaris";
import { Query } from "react-apollo";
import { charityQuery } from "../queries/CharityQuery";
import gql from "graphql-tag";
export default class ShowCharities extends React.Component {
  render() {
    const apiId = this.props.match.params.apiId;
    const resourceName = {
      singular: "Charity",
      plural: "Charities"
    };
    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    function renderCharity(charity) {
      const { id, name, url, city, state } = charity;
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
          {
            console.log("query returned charity data: " + data);
          }
          const items = data.charitiesForCategory.map(charity => {
            return {
              id: charity.employerId,
              name: charity.name,
              url: charity.url
            };
          });
          return (
            <Page title="Charities for Category X">
              <Layout>
                <Layout.AnnotatedSection
                  title="Get more information on these charities."
                  description="Possible subtitle"
                >
                  <Card>
                    <ResourceList
                      items={items}
                      renderItem={renderCharity}
                      resourceName={resourceName}
                    />
                  </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection
                  title="Pacific Coast Fish Wildife and Wetlands"
                  description="Possible Description"
                >
                  <Card>
                    <FormLayout>
                      <TextField
                        label="Identification Number"
                        disabled
                        value={"680259824"}
                      />
                      <TextField
                        type="Location"
                        disabled
                        value={"Arcata, California"}
                      />
                    </FormLayout>
                  </Card>
                </Layout.AnnotatedSection>
              </Layout>
            </Page>
          );
        }}
      </Query>
    );
  }
}
