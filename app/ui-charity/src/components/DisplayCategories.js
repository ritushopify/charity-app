import React, { Component } from "react";

class DisplayCategories extends Component {
  render() {
    return (
      <div>
        {this.props.categories.map(cat => {
          return (
            <div key={cat.categoryId}>
              <p>{cat.description.substring(0, 25)}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default DisplayCategories;
