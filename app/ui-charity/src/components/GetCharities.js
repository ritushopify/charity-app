import React from "react";

export default function getCharities(id) {
  console.log("id is now " + id);
  return [
    {
      ein: "680259824",
      charityName: "PACIFIC COAST FISH WILDLIFE AND WETLANDS ASSOC",
      url: "http://www.orghunter.com/organization/680259824",
      city: "ARCATA",
      state: "California"
    },
    {
      ein: "260253627",
      charityName: "MENDOCINO COUNTY COOPERATIVE AERIALFIRE PATROL",
      url: "http://www.orghunter.com/organization/260253627",
      city: "WILLITS",
      state: "California"
    }
  ];
}
