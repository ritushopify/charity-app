import React from "react";
import CharitiesWithHook from "./CharitiesWithHook";

export default class CharitiesSection extends React.Component {
  render() {
    const apiId = this.props.match.params.apiId;
    return <CharitiesWithHook apiId={apiId} />;
  }
}
