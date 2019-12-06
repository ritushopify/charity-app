import React from "react";

class ShowCharities extends React.Component {
  render() {
    const id = this.props.match.params.id;
    console.log("id is " + id);
    return <p>Getting there </p>;
  }
}

export default ShowCharities;
