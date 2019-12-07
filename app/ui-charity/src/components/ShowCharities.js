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
//import { charityQuery } from "../queries/CharityQuery";
import gql from "graphql-tag";
export default class ShowCharities extends React.Component {
  render() {
    const apiId = this.props.match.params.apiId;
    // function capitalize(word) {
    //   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    // }
    const charityQuery = gql`
      query CharitiesForCategory($apiId: String) {
        charitiesForCategory(apiId: $apiId) {
          employerId
          name
          url
        }
      }
    `;

    const Result = ({ apiId }) => (
      <Query query={charityQuery} variables={{ apiId: apiId }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          console.log("query returned data: " + data);
          data.charities.map(charity => {
            return {
              id: charity.employerId,
              name: charity.name,
              url: charity.url
            };
          });
        }}
      </Query>
    );
    return (
      <Page title={"Category Selected: " + apiId}>
        <Card>{console.log("here are the charity items" + Result)}</Card>
      </Page>
    );
  }
}
//  );
// return Result;
