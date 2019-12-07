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

export default class ShowCharities extends React.Component {
  render() {
    const id = this.props.match.params.apiId;
    // function capitalize(word) {
    //   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    // }
    console.log("api id is " + id);
    return (
      <Page title="bye">
        {console.log("api id type is " + (typeof id))}
      </Page>
    );
    //  return <Query query={charityQuery} variables={{id}}>
    //     {({ loading, error, data }) => {
    //       if (loading) return "Loading...";
    //       if (error) return `Error! ${error.message}`;
    //       console.log("query returned data: " + data);
    //       const items = data.charities.map(charity => {
    //         return {
    //           id: charity.employerId,
    //           name: charity.name,
    //           url: charity.url
    //         };
    //       });

    //       return (
    //         <Card>
    //           <ResourceList
    //             resourceName={{ singular: "Charity", plural: "Charities" }}
    //             items={items}
    //             renderItem={item => {
    //               const { employerId, name, url } = item;
    //               const media = <Avatar customer size="medium" name={name} />;

    //               return (
    //                 <ResourceItem
    //                   id={employerId}
    //                   url={url}
    //                   media={media}
    //                   accessibilityLabel={"View details for Charity"}
    //                 >
    //                   <h3>
    //                     <p>{name.toUpperCase()}</p>
    //                     <p>{url}</p>
    //                   </h3>
    //                 </ResourceItem>
    //               );
    //             }}
    //           />
    //         </Card>
    //       );
    //     }}
    //   </Query>
    // );
  }
}
