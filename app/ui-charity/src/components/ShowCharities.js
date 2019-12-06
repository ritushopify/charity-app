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
import getCharities from "./GetCharities";

export default class ShowCharities extends React.Component {
  render() {
    console.log("in charities now");
    const id = this.props.match.params.id;
    const allCharities = getCharities(id);
    const resourceName = {
      singular: "Charity",
      plural: "Charities"
    };

    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    function renderCharity(charity) {
      const { id, charityName, city, state } = charity;
      const media = <Avatar customer size="medium" name={charityName} />;

      return (
        <ResourceItem id={id} media={media}>
          <h3>
            <p>{charityName.toUpperCase()}</p>
            <p>
              {capitalize(city)}, {capitalize(state)}
            </p>
          </h3>
        </ResourceItem>
      );
    }

    return (
      <Page title="Charities for Category X">
        <Layout>
          <Layout.AnnotatedSection
            title="Get more information on these charities."
            description="Possible subtitle"
          >
            <Card>
              <ResourceList
                items={allCharities}
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
  }
}
