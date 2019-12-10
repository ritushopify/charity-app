import React from "react";
import { ResourceItem, Avatar } from "@shopify/polaris";

export default function CharityItem(charity) {
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
