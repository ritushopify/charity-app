import React from "react";
import { charityQuery } from "../queries/CharityQuery";
import { useQuery } from "@apollo/react-hooks";
// import { Query } from "react-apollo";
import gql from "graphql-tag";

export default function getCharityItems(apiId) {
  const { loading, error, data } = useQuery(charityQuery, {
    variables: { apiId: apiId }
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const charityItems = data.charities.map(charity => {
    return {
      id: charity.id,
      name: charity.name,
      url: charity.url
    };
  });
}
//   console.log("id in getCharities is " + id);
//   console.log("type of id is " + typeof id);
//   // const QUERY_CHARITIES = gql`
//   //   query GetCharities($apiId: String) {
//   //     charitiesForCategory(apiId: apiId) {
//   //       name
//   //       url
//   //       city
//   //       state
//   //     }
//   //   }
//   // `;

//   return (
//     <Query query={charityQuery} variables={id}>
//       {({ loading, error, data }) => {
//         if (loading) return "Loading...";
//         if (error) return `Error! ${error.message}`;
//         console.log("In GetCharities, made it to end of query");
//         console.log("In GetCharities, the charities are " + data.charities);
//         return data.charities;
//       }}
//     </Query>
//   );
// }
