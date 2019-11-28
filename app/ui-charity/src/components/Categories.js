import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const CAT_QUERY = gql`
  query {
    categories {
      categoryId
      description
    }
  }
`;

class Categories extends Component {
  render() {
    return (
      <Query query={CAT_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching..</div>;
          if (error) return <div>Error!</div>;
          return (
            <div>
              {data.categories.map(cat => {
                return (
                  <div key={cat.categoryId}>
                    <p> {cat.description} </p>
                  </div>
                );
              })}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Categories;
