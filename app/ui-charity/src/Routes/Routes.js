import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShowCharities from "../components/ShowCharities";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/charities" render={() => <ShowCharities />} />
      </Switch>
    </BrowserRouter>
  );
}

export default React.memo(Routes);
