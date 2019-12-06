import React from "react";
import { Switch, Route } from "react-router";
import ShowCharities from "../components/ShowCharities";

function Routes() {
  return (
    <Switch>
      <Route path="/charities/:id" component={ShowCharities} />
    </Switch>
  );
}

export default React.memo(Routes);
