import React from "react";
import HomePage from "../components/HomePage";
import Charities from "../components/Charities";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route
          exact
          path="/charities/:id"
          render={props => {
            return <Charities {...props} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default React.memo(Routes);
