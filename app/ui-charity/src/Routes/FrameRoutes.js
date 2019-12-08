import React from "react";
import StartPage from "../components/Starting/StartPage";
import HomePage from "../components/HomePageTest";
import MainPage from "../components/MainPage";
import ShowCharities from "../components/ShowCharities";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function FrameRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/charities" render={() => <HomePage />} />
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

export default React.memo(FrameRoutes);
