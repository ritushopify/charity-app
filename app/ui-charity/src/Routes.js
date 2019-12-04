import React from "react";
import { Switch, Route } from "react-router";
import Environment from "./components/Environment";

function Routes() {
  return (
    <Switch>
      <Route exact path="/environment" render={() => <Environment />} />
    </Switch>
  );
}

export default React.memo(Routes);
