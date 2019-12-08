import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeSection from "../components/HomeSection";
import CharitiesSection from "../components/charities/CharitiesSection";

function FrameRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <HomeSection />} />
        <Route
          exact
          path="/charities/:apiId"
          render={props => {
            return <CharitiesSection {...props} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default React.memo(FrameRoutes);
