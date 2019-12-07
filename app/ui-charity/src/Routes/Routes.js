import React from "react";
import HomePage from "../components/HomePageTest";
import ShowCharities from "../components/ShowCharities";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route
          exact
          path="/charities/:apiId"
          render={props => {
            return <ShowCharities {...props} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default React.memo(Routes);
